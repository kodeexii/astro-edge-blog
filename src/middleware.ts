import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  if (context.url.pathname.startsWith('/keystatic')) {
    const html = await response.text();
    
    const automationScript = `
      <script>
        (function() {
          const automate = () => {
            // 1. Cari Username & Branch
            const path = window.location.pathname;
            const branchMatch = path.match(/\\/branch\\/([^\\/]+)/);
            const currentBranch = branchMatch ? decodeURIComponent(branchMatch[1]) : "";

            // 2. Tambah Butang Reset jika dalam branch draf
            if (currentBranch.startsWith('draf/') && !document.getElementById('reset-branch-btn')) {
              const actionBar = document.querySelector('header') || document.body;
              const resetBtn = document.createElement('button');
              resetBtn.id = 'reset-branch-btn';
              resetBtn.innerText = '🗑️ RESET DRAF INI';
              resetBtn.style = 'background: #ef4444; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-left: 10px; font-weight: bold; font-size: 12px;';
              
              resetBtn.onclick = async () => {
                if (confirm('AMARAN: Ini akan memadam SEMUA perubahan yang belum diterbitkan dalam draf ini. Pasti?')) {
                  resetBtn.innerText = '⌛ Memadam...';
                  const res = await fetch('/api/reset-branch', {
                    method: 'POST',
                    body: JSON.stringify({ branch: currentBranch })
                  });
                  if (res.ok) {
                    alert('Draf berjaya dipadam. Sistem akan dimuat semula.');
                    window.location.href = '/keystatic';
                  } else {
                    alert('Gagal memadam draf. Sila cuba lagi.');
                    resetBtn.innerText = '🗑️ RESET DRAF INI';
                  }
                }
              };
              actionBar.appendChild(resetBtn);
            }

            // 3. Ganti Label Butang (Terminology)
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
