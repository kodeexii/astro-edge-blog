import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { branch } = await request.json();

  if (!branch || !branch.startsWith('draf/')) {
    return new Response(JSON.stringify({ error: 'Branch tidak sah.' }), { status: 400 });
  }

  const GITHUB_TOKEN = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET;
  const REPO = 'kodeexii/astro-edge-blog';
  const headers = {
    'Authorization': `token ${GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
  };

  try {
    // 1. Dapatkan SHA terbaru dari branch 'main'
    const mainRef = await fetch(`https://api.github.com/repos/${REPO}/git/refs/heads/main`, { headers });
    const mainData = await mainRef.json();
    const sha = mainData.object.sha;

    // 2. Padam branch draf lama (jika wujud)
    await fetch(`https://api.github.com/repos/${REPO}/git/refs/heads/${branch}`, {
      method: 'DELETE',
      headers
    });

    // 3. Cipta semula branch draf yang baru berdasarkan SHA 'main'
    const createRes = await fetch(`https://api.github.com/repos/${REPO}/git/refs`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        ref: `refs/heads/${branch}`,
        sha: sha
      })
    });

    if (createRes.ok) {
      return new Response(JSON.stringify({ success: true }));
    } else {
      const err = await createRes.json();
      return new Response(JSON.stringify({ error: err.message }), { status: createRes.status });
    }
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};
