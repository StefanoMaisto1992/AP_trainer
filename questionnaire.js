document.getElementById('get-started').addEventListener('click', function () {
    document.getElementById('onboarding-overlay').style.display = 'flex';
    startOnboarding();
});

function nextQuestion(currentStep, nextStep) {
    const currentElement = document.querySelector(`.${currentStep}`);
    const nextElement = document.querySelector(`.${nextStep}`);
    updateProgressBar();
}

function closeOverlay() {
    document.getElementById('onboarding-overlay').style.display = 'none';
    resetQuestionnaire();
}

function startOnboarding() {
    let currentQuestion = 0;
    const questions = document.querySelectorAll('.question-container');
    const progressBar = document.getElementById('progress-bar');

    // Mostra la prima domanda
    questions[currentQuestion].classList.remove('hidden');

    // Funzione per aggiornare la barra di progresso
    function updateProgressBar() {
        const progress = ((currentQuestion + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Aggiungi evento per il pulsante "Submit"
    document.querySelectorAll('.question-container button').forEach((button) => {
        button.addEventListener('click', function () {
            if (currentQuestion < questions.length - 1) {
                questions[currentQuestion].classList.add('hidden');
                currentQuestion++;
                questions[currentQuestion].classList.remove('hidden');
                updateProgressBar();
            } else {
                document.getElementById('onboarding-overlay').style.display = 'none';
                resetQuestionnaire();
                sendData();
            }
        });
    });

    // Inizializzazione della barra di progresso
    updateProgressBar();
}

function resetQuestionnaire() {
    // Resetta le domande
    const questions = document.querySelectorAll('.question-container');

    // Nasconde tutte le domande
    questions.forEach((question) => {
        question.classList.add('hidden');

        // Resetta eventuali bottoni selezionati
        question.querySelectorAll('button').forEach((button) => {
            button.classList.remove('selected'); // Rimuovi la classe 'selected', se usata
        });

        // Resetta i campi di input, se presenti
        const inputs = question.querySelectorAll('input');
        inputs.forEach((input) => {
            input.value = ''; // Reset dei valori
            if (input.type === 'checkbox' || input.type === 'radio') {
                input.checked = false; // Deseleziona eventuali checkbox o radio button
            }
        });
    });

    // Reset della barra di progresso
    document.getElementById('progress-bar').style.width = '0%';

    // Ripristina la prima domanda
    currentQuestion = 0;
    questions[currentQuestion].classList.remove('hidden');
    location.reload();
}
// Inizializzazione della barra di progresso
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('progress-bar').style.width = '0%';
});

document.addEventListener("DOMContentLoaded", function () {
    const heightInput = document.getElementById("height-1");
    const weightInput = document.getElementById("weight-1");
    const emailInput = document.getElementById("email");
    const consentCheckbox = document.getElementById("data-consent");
    const finishButton = document.getElementById("finish-btn");

    function validateForm() {
        const height = parseInt(heightInput.value, 10);
        const weight = parseInt(weightInput.value, 10);
        const email = emailInput.value.trim();
        const consentChecked = consentCheckbox.checked;

        const heightValid = height >= 140 && height <= 250;
        const weightValid = weight >= 40 && weight <= 200;
        const emailValid = email !== "" && /\S+@\S+\.\S+/.test(email);

        if (heightValid && weightValid && emailValid && consentChecked) {
            finishButton.removeAttribute("disabled");
        } else {
            finishButton.setAttribute("disabled", "true");
        }
    }

    // Event listeners per validare i campi in tempo reale
    heightInput.addEventListener("input", validateForm);
    weightInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
    consentCheckbox.addEventListener("change", validateForm);
});

function sendData() {
    const userData = {
        goal: document.querySelector(".question-container:not(.hidden) button.selected")?.textContent || "",
        frequency: document.querySelector(".question-container:not(.hidden) button.selected")?.textContent || "",
        environment: document.querySelector(".question-container:not(.hidden) button.selected")?.textContent || "",
        height: document.getElementById("height-1").value,
        weight: document.getElementById("weight-1").value,
        email: document.getElementById("email").value
    };

    // URL Google Apps Script
    const scriptURL = "https://script.google.com/macros/s/AKfycbxGoYMm_XRd0ShjMv0JgXH-oqjR1ltnriOZGTzibd3fRkh4v34IizxokgOQDoPBYIko4A/exec";

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(data => {
        console.log("Success:", data);
        alert("Onboarding completed successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error submitting your data.");
    });
}

