document.addEventListener('DOMContentLoaded', (event) => {
    const counterElement = document.querySelector('.counter-wrap .number');

    // Periksa apakah ada data yang disimpan di localStorage
    let currentCount = localStorage.getItem('counter');

    if (currentCount === null) {
        // Jika tidak ada data yang disimpan, mulai dari 50
        currentCount = 50;
    } else {
        // Jika ada data yang disimpan, konversi ke integer
        currentCount = parseInt(currentCount);
    }

    // Setel atribut dan teks elemen counter
    counterElement.setAttribute('data-number', currentCount);
    counterElement.textContent = currentCount;

    document.getElementById('rentalForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah form submit default

        // Tambah angka pada counter
        const newCount = currentCount + 1;
        counterElement.setAttribute('data-number', newCount);
        counterElement.textContent = newCount;

        // Simpan nilai baru di localStorage
        localStorage.setItem('counter', newCount);

        // Perbarui nilai currentCount
        currentCount = newCount;
    });
});
