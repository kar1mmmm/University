document.addEventListener('DOMContentLoaded', function () {
    initDarkMode();
    initNavToggle();
    renderKampus();
    initFormKontak();
    registerServiceWorker();
});

function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;
    const icon = darkModeToggle.querySelector('i');

    function setDarkMode(on) {
        document.body.classList.toggle('dark-mode', on);
        icon.classList.toggle('fa-moon', !on);
        icon.classList.toggle('fa-sun', on);
    }

    darkModeToggle.addEventListener('click', function () {
        const isDark = !document.body.classList.contains('dark-mode');
        setDarkMode(isDark);
        localStorage.setItem('ptninfo-darkmode', isDark ? '1' : '0');
    });

    if (localStorage.getItem('ptninfo-darkmode') === '1') {
        setDarkMode(true);
    }
}

function initNavToggle() {
    const btn = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
        const isOpen = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        const icon = btn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars', !isOpen);
            icon.classList.toggle('fa-times', isOpen);
        }
    });
}

function buatKartu(kampus) {
    const kartu = document.createElement('div');
    kartu.className = kampus.kelas;

    const img = document.createElement('img');
    img.src = kampus.gambar;
    img.alt = kampus.alt;

    const inner = document.createElement('div');
    inner.className = 'inner-container';

    const h3 = document.createElement('h3');
    h3.textContent = kampus.nama;

    const p = document.createElement('p');
    p.textContent = kampus.deskripsi;

    inner.appendChild(h3);
    inner.appendChild(p);

    const link = document.createElement('a');
    link.className = 'btn-detail';
    link.href = kampus.url;
    link.textContent = 'Lihat selengkapnya';

    kartu.appendChild(img);
    kartu.appendChild(inner);
    kartu.appendChild(link);
    return kartu;
}

function renderKampus() {
    const container = document.getElementById('daftar-kampus');
    if (!container) return;

    fetch('data.json')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('HTTP ' + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            container.textContent = '';
            for (let i = 0; i < data.kampus.length; i += 3) {
                const wrapper = document.createElement('div');
                wrapper.className = 'content-wrapper';
                data.kampus.slice(i, i + 3).forEach(function (kampus) {
                    wrapper.appendChild(buatKartu(kampus));
                });
                container.appendChild(wrapper);
            }
            const searchInput = document.getElementById('searchInput');
            if (searchInput && searchInput.value !== '') {
                searchInput.dispatchEvent(new Event('input'));
            }
        })
        .catch(function () {
            container.textContent = '';
            const pesan = document.createElement('p');
            pesan.className = 'error-fetch';
            pesan.textContent = 'Gagal memuat data kampus. Silakan muat ulang halaman.';
            container.appendChild(pesan);
        });
}

function initFormKontak() {
    const form = document.getElementById('formKontak');
    if (!form) return;

    const nama = document.getElementById('nama');
    const email = document.getElementById('email');
    const pesan = document.getElementById('pesan');
    const sukses = document.getElementById('formSukses');

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function tampilkanError(input, pesanError) {
        const span = document.getElementById('error-' + input.id);
        if (pesanError) {
            span.textContent = pesanError;
            input.classList.add('input-invalid');
            input.setAttribute('aria-invalid', 'true');
        } else {
            span.textContent = '';
            input.classList.remove('input-invalid');
            input.removeAttribute('aria-invalid');
        }
    }

    function validasi() {
        let valid = true;

        if (nama.value.trim() === '') {
            tampilkanError(nama, 'Nama wajib diisi.');
            valid = false;
        } else {
            tampilkanError(nama, '');
        }

        if (email.value.trim() === '') {
            tampilkanError(email, 'Email wajib diisi.');
            valid = false;
        } else if (!polaEmail.test(email.value.trim())) {
            tampilkanError(email, 'Format email tidak valid (contoh: nama@email.com).');
            valid = false;
        } else {
            tampilkanError(email, '');
        }

        if (pesan.value.trim() === '') {
            tampilkanError(pesan, 'Pesan wajib diisi.');
            valid = false;
        } else {
            tampilkanError(pesan, '');
        }

        return valid;
    }

    [nama, email, pesan].forEach(function (input) {
        input.addEventListener('input', function () {
            if (input.classList.contains('input-invalid')) {
                validasi();
            }
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        sukses.textContent = '';
        if (validasi()) {
            sukses.textContent = 'Terima kasih, ' + nama.value.trim() +
                '! Pesan Anda berhasil dikirim.';
            form.reset();
        }
    });
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .catch(function () {
            });
    }
}
