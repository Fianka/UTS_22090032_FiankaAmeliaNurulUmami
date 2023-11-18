// Script.js

// Fungsi untuk menampilkan pesan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    alert('Selamat datang di website kami!');
});

// Fungsi untuk menambahkan efek hover pada menu navigasi
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        this.style.color = '#4e4e4e'; 
    });

    link.addEventListener('mouseout', function () {
        this.style.color = 'white';
    });
});

// Fungsi untuk handle content
function toggleContent(sectionId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}