import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  // Hanya proses jika URL bermula dengan /keystatic
  if (context.url.pathname.startsWith('/keystatic')) {
    const html = await response.text();
    
    // Skrip Automasi yang akan disuntik
    const automationScript = `
      <script>
        (function() {
          const automate = () => {
            // 1. Cari Username
            const avatarImg = document.querySelector('img[alt*="avatar"]');
            const userBtn = avatarImg?.closest('button');
            const userDisplayName = userBtn?.innerText || "";
            const username = userDisplayName.split(' ')[0].toLowerCase().replace(/[^a-z0-9]/g, '');

            // 2. Redirect ke branch draf/username jika berada di main
            const path = window.location.pathname;
            if (username && path === '/keystatic') {
              console.log('🚀 Redirecting to user draft branch...');
              window.location.href = '/keystatic/branch/draf-' + username;
              return;
            }

            // 3. Ganti Label Butang
            const replacements = {
              'Create Pull Request': '🚀 TERBITKAN KE WEBSITE',
              'Pull Request': '🚀 TERBITKAN',
              'Save': '💾 SIMPAN DRAF',
              'Changes saved': '✅ Draf Berjaya Disimpan!',
              'Create branch': '📝 BUAT DRAF BARU'
            };

            document.querySelectorAll('span, button').forEach(el => {
              const text = el.innerText.trim();
              if (replacements[text]) el.innerText = replacements[text];
            });

            // 4. Sembunyikan Branch Picker (Opsional)
            const branchPicker = document.querySelector('[data-keystatic-branch-picker]');
            if (branchPicker) branchPicker.style.display = 'none';
          };

          const observer = new MutationObserver(automate);
          observer.observe(document.body, { childList: true, subtree: true });
          automate();
        })();
      </script>
    `;

    // Suntik skrip sebelum tag penutup body
    const newHtml = html.replace('</body>', `${automationScript}</body>`);
    
    return new Response(newHtml, {
      status: 200,
      headers: response.headers
    });
  }

  return response;
});
