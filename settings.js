let translations = {};

// Funzione per caricare le traduzioni
function loadTranslations(lang) {
    fetch(`${lang}.json`)
        .then(response => response.json())
        .then(data => {
            translations = data;
            updateText();  // Una volta caricate le traduzioni, aggiorniamo i testi
        })
        .catch(error => console.error("Errore nel caricamento delle traduzioni:", error));
}

// Funzione per aggiornare i testi sulla pagina
function updateText() {
    document.getElementById("welcome-text").textContent = translations.welcome;
    document.getElementById("contact-text").textContent = translations.contact;
}

// Funzione per cambiare la lingua
function setLanguage(lang) {
    loadTranslations(lang);
}
