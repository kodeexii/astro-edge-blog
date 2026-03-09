import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  if (context.url.pathname.startsWith('/keystatic')) {
    const html = await response.text();
    
    const automationScript = `
      <script>
        (function() {
          const automate = () => {
            const path = window.location.pathname;
            const branchMatch = path.match(/\\/branch\\/([^\\/]+)/);
            const currentBranch = branchMatch ? decodeURIComponent(branchMatch[1]) : "";

            if (currentBranch.startsWith('draf/') && !document.getElementById('reset-branch-btn')) {
              const actionBar = document.querySelector('header') || document.body;
              const resetBtn = document.createElement('button');
              resetBtn.id = 'reset-branch-btn';
              resetBtn.innerText = '🗑️ RESET DRAF INI';
              resetBtn.style = 'background: #ef4444; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-left: 10px; font-weight: bold; font-size: 12px;';
              
              resetBtn.onclick = async () => {
                if (confirm('Ini akan memadam semua kerja draf dan menyelaraskannya semula dengan website LIVE. Pasti?')) {
                  resetBtn.innerText = '⏳ Sedang Reset...';
                  const res = await fetch('/api/reset-branch', {
                    method: 'POST',
                    body: JSON.stringify({ branch: currentBranch })
                  });
                  if (res.ok) {
                    alert('Draf berjaya diperbaharui! Halaman akan dimuat semula.');
                    window.location.reload();
                  } else {
                    alert('Gagal reset draf. Sila cuba lagi.');
                    resetBtn.innerText = '🗑️ RESET DRAF INI';
                  }
                }
              };
              actionBar.appendChild(resetBtn);
            }

            const replacements = {
              'Create Pull Request': '🚀 TERBITKAN KE WEBSITE',
              'Pull Request': '🚀 TERBITKAN',
              'Save': '💾 SIMPAN DRAF',
              'Create branch': '📝 BUAT DRAF BARU'
            };

            document.querySelectorAll('span, button').forEach(el => {
              const text = el.innerText.trim();
              if (replacements[text]) el.innerText = replacements[text];
            });
          };

          const observer = new MutationObserver(automate);
          observer.observe(document.body, { childList: true, subtree: true });
          automate();
        })();
      </script>
    `;

    const newHtml = html.replace('</body>', `${automationScript}</body>`);
    
    return new Response(newHtml, {
      status: 200,
      headers: response.headers
    });
  }

  return response;
});
