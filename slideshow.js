document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll("#slideshow .slide");
    let currentSlide = 0;

    const changeSlide = () => {
      // Rimuove la classe "active" dalla slide corrente
      slides[currentSlide].classList.remove("active");
      
      // Incrementa l'indice della slide
      currentSlide = (currentSlide + 1) % slides.length;
      
      // Aggiunge la classe "active" alla nuova slide
      slides[currentSlide].classList.add("active");
    };

    // Cambia slide ogni 5 secondi
    setInterval(changeSlide, 5000);
  });