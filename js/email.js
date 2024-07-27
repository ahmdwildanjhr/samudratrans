document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Menghentikan pengiriman form default

    var formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            alert('Pesan berhasil dikirim!');
            document.getElementById("contact-form").reset(); // Mereset form setelah pengiriman berhasil
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Gagal mengirim pesan.');
        });
});
