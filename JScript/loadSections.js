function loadSection(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Errore nel caricamento di ${file}:`, error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadSection("navbar", "html/navbar.html");
    loadSection("home", "html/home.html");
    //loadSection("about", "about.html");
    //loadSection("gallery", "gallery.html");
    //loadSection("testimonials", "testimonials.html");
    //loadSection("bmi", "bmi.html");
    //loadSection("contact", "contact.html");
});
