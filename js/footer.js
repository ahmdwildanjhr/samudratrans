// // Calculate the number of years from 2020 to the current year
// $(document).ready(function () {
//     const startYear = 2020;
//     const currentYear = new Date().getFullYear();
//     const experienceYears = currentYear - startYear;

//     $('#experience-years').text(experienceYears);
// });

document.addEventListener('DOMContentLoaded', (event) => {
    // Tahun pengalaman
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - startYear;
    document.getElementById('experience-years').innerText = experienceYears;

    // Inisialisasi pelanggan puas
    let satisfiedCustomers = 50;
    document.getElementById('counter').innerText = satisfiedCustomers;

    // Tambahkan pelanggan puas setiap kali tombol submit diklik
    document.getElementById('rentalForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah form dari submit sebenarnya
        satisfiedCustomers++;
        document.getElementById('counter').innerText = satisfiedCustomers;
        alert('Form berhasil disubmit!'); // Berikan pesan berhasil submit
    });
});
