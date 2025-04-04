document.getElementById("bmiButton").addEventListener("click", function(event) {
    event.preventDefault();  // Prevent any default action (just in case)

    // Get weight and height values from the input fields
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // Validate input
    if (!weight || !height || height <= 0 || weight <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }

    // Convert height to meters (assuming it's in centimeters)
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Show the result using an alert
    const message = bmi < 18.5 ? 'You need mass gain': bmi > 18.5 && bmi < 24.9 ? 'You are ok but you can be better!' : 'If you have muscle is ok, in another way is better call me...'
    const result = `Your BMI is: ${bmi.toFixed(2)}\n${message}`;

    // Optionally, show a badge with the BMI result
    const badge = document.createElement('span');
    badge.classList.add('bg-red-600', 'text-white', 'px-2', 'py-1', 'rounded-full', 'ml-4');
    badge.innerText = bmi.toFixed(2);
    
    alert(result); // Display alert message
});

// Select the elements
const showInfoButton = document.getElementById('show-info-btn');
const infoBox = document.getElementById('info-box');
const closeInfoButton = document.getElementById('close-info-btn');

// Function to show the info box
function showInfo() {
    infoBox.classList.remove('hidden');
}

// Function to hide the info box
function hideInfo() {
    infoBox.classList.add('hidden');
}

// Event listeners for buttons
closeInfoButton.addEventListener('click', hideInfo);

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