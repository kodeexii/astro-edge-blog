/**
 * KEYSTATIC EDITOR FLOW FIX
 * Menggantikan istilah teknikal GitHub kepada bahasa Editor (WordPress-style).
 */
(function() {
  const replacements = {
    'Create Pull Request': '🚀 TERBITKAN KE WEBSITE',
    'Pull Request': '🚀 TERBITKAN',
    'Create branch': '📝 BUAT DRAF BARU',
    'Current branch': '📂 Lokasi Draf',
    'Save': '💾 SIMPAN DRAF',
    'Changes saved': '✅ Berjaya Disimpan!',
    'Create': '➕ TAMBAH BARU'
  };

  const translate = () => {
    const elements = document.querySelectorAll('span, button, h2');
    elements.forEach(el => {
      const text = el.innerText.trim();
      if (replacements[text]) {
        el.innerText = replacements[text];
      }
    });

    // Sembunyikan butang branch kalau tak perlu
    const branchPicker = document.querySelector('[data-keystatic-branch-picker]');
    if (branchPicker) branchPicker.style.display = 'none';
  };

  // Pantau perubahan skrin
  const observer = new MutationObserver(translate);
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Jalankan segera
  translate();
})();
