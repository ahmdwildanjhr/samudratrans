document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var navbar = document.getElementById("ftco-navbar");
        if (window.scrollY > 50) { // Ganti angka sesuai dengan kebutuhan
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
