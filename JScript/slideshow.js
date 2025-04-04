document.addEventListener("DOMContentLoaded", function() {
  // Funzione per cambiare le slide
  const changeSlide = () => {
      const slides = document.querySelectorAll("#slideshow .slide");
      let currentSlide = 0;

      // Funzione per avanzare alla prossima slide
      return function() {
          slides[currentSlide].classList.remove("active"); // Rimuove la classe active dalla slide attuale

          // Incrementa l'indice della slide
          currentSlide = (currentSlide + 1) % slides.length;

          // Aggiunge la classe active alla nuova slide
          slides[currentSlide].classList.add("active");
      };
  };

  // Funzione di inizializzazione per lo slideshow
  const initSlideshow = () => {
      const change = changeSlide();
      setInterval(change, 5000); // Cambia slide ogni 5 secondi
  };

  // Caricamento del contenuto dinamico (assicurarsi che lo slideshow sia pronto prima di iniziare)
  loadSection("slideshow", "html/home.html");

  // Verifica se la sezione slideshow è stata caricata
  const interval = setInterval(() => {
      const slideshow = document.getElementById("slideshow");
      if (slideshow) {
          clearInterval(interval); // Se trovato, ferma l'intervallo
          initSlideshow(); // Inizializza lo slideshow
      }
  }, 100); // Verifica ogni 100ms se la sezione è stata caricata nel DOM
});