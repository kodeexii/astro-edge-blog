import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  if (context.url.pathname.startsWith('/keystatic')) {
    const html = await response.text();
    
    const automationScript = `
      <script>
        (function() {
          const injectResetButton = () => {
            const path = window.location.pathname;
            const branchMatch = path.match(/\\/branch\\/([^\\/]+)/);
            const currentBranch = branchMatch ? decodeURIComponent(branchMatch[1]) : "";

            // Jika dalam branch draf dan butang belum ada
            if (currentBranch.startsWith('draf/') && !document.getElementById('reset-branch-btn')) {
              // Cari toolbar utama Keystatic (biasanya ada elemen butang avatar atau logo)
              const container = document.querySelector('nav') || document.querySelector('header') || document.body;
              
              if (container) {
                const resetBtn = document.createElement('button');
                resetBtn.id = 'reset-branch-btn';
                resetBtn.innerText = '🗑️ RESET DRAF';
                resetBtn.style = 'background: #ef4444; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; margin: 10px; font-weight: bold; font-size: 11px; z-index: 9999; position: relative;';
                
                resetBtn.onclick = async (e) => {
                  e.preventDefault();
                  if (confirm('Ini akan memadam semua kerja draf dan menyelaraskannya semula dengan website LIVE. Pasti?')) {
                    resetBtn.innerText = '⏳ Sedang Reset...';
                    try {
                      const res = await fetch('/api/reset-branch', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ branch: currentBranch })
                      });
                      if (res.ok) {
                        alert('Draf berjaya diperbaharui!');
                        window.location.reload();
                      } else {
                        alert('Gagal reset draf. Sila cuba lagi.');
                        resetBtn.innerText = '🗑️ RESET DRAF';
                      }
                    } catch (err) {
                      alert('Ralat teknikal: ' + err.message);
                      resetBtn.innerText = '🗑️ RESET DRAF';
                    }
                  }
                };
                
                // Masukkan butang di permulaan container supaya nampak jelas
                container.prepend(resetBtn);
                console.log('✅ Reset button injected into:', container.tagName);
              }
            }

            // Penterjemahan Label
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

          // Guna interval sikit sebab Keystatic ni lambat render
          setInterval(injectResetButton, 2000);
          injectResetButton();
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
