function normalize(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\u00C0-\u017F ]/g, '') 
        .replace(/\s+/g, ' ') 
        .trim();
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchMessage = document.getElementById('searchMessage');
    if (!searchInput) return;
    searchInput.addEventListener('input', function() {
        const query = normalize(this.value);
        const kampusBlocks = document.querySelectorAll('.content-wrapper > div');
        let found = 0;
        kampusBlocks.forEach(function(block) {
            const nama = normalize(block.querySelector('h3')?.textContent || '');
            const deskripsi = normalize(block.querySelector('p')?.textContent || '');
            if (nama.includes(query) || deskripsi.includes(query) || query === '') {
                block.style.display = '';
                found++;
            } else {
                block.style.display = 'none';
            }
        });
        if (query !== '' && found === 0) {
            searchMessage.textContent = 'Kampus tidak ditemukan';
            searchMessage.style.display = 'block';
        } else {
            searchMessage.textContent = '';
            searchMessage.style.display = 'none';
        }
    });
});
