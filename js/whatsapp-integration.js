document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sewaButton').forEach(function (button) {
        button.addEventListener('click', function () {
            const namaMobil = this.getAttribute('data-car-name'); // Nama mobil dari atribut data
            const pesan = `Selamat datang di Samudra Trans
            
Terima kasih telah memilih layanan kami untuk kebutuhan transportasi kamu. Kami berkomitmen untuk memberikan pengalaman berkendara yang nyaman, aman, dan menyenangkan. Untuk memulai pemesanan, silakan isi formulir berikut dengan informasi lengkap kamu. Tim kami akan segera menghubungi kamu untuk konfirmasi dan detail lebih lanjut.
            
Nama Pelanggan : 
Nama Mobil        : ${namaMobil}
Lokasi Ambil        : 
Lokasi Kembali    : 
Tanggal Ambil     : 
Tanggal Kembali : 
Waktu Ambil       : 
Durasi Sewa        :
            
Selamat menikmati perjalanan kamu bersama Samudra Trans.`;

            const encodedPesan = encodeURIComponent(pesan);
            const whatsappURL = `https://wa.me/6285259119005?text=${encodedPesan}`;
            window.open(whatsappURL, '_blank');
        });
    });
});