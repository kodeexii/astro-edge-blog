import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { branch } = await request.json();

  if (!branch || !branch.startsWith('draf/')) {
    return new Response(JSON.stringify({ error: 'Branch tidak sah.' }), { status: 400 });
  }

  const GITHUB_TOKEN = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET; // Kita guna secret sedia ada
  const REPO = 'kodeexii/astro-edge-blog';

  try {
    // Gunakan GitHub API untuk padam branch
    const response = await fetch(`https://api.github.com/repos/${REPO}/git/refs/heads/${branch}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      }
    });

    if (response.ok) {
      return new Response(JSON.stringify({ success: true }));
    } else {
      const err = await response.json();
      return new Response(JSON.stringify({ error: err.message }), { status: response.status });
    }
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};
