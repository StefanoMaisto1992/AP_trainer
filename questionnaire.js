let userGoal = "";
let userFrequency = "";
let userEnvironment = "";
let currentQuestionIndex = 0;

const questions = document.querySelectorAll('.question-container');
const progressBar = document.getElementById('progress-bar');

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
    // Mostra la prima domanda
    document.querySelectorAll('.question-container button').forEach((button) => {
        button.addEventListener('click', function () {
            const questionType = questions[currentQuestionIndex].querySelector('p').dataset.langKey.replace('Question', '').toLowerCase(); // Ottieni il tipo di domanda
            const selectedValue = button.textContent;

            // Aggiorna la variabile globale in base al tipo di domanda
            if (questionType === 'goal') {
                userGoal = selectedValue;
            } else if (questionType === 'frequency') {
                userFrequency = selectedValue;
            } else if (questionType === 'environment') {
                userEnvironment = selectedValue;
            }

            if (currentQuestionIndex < questions.length - 1) {
                questions[currentQuestionIndex].classList.add('hidden');
                currentQuestionIndex++;
                questions[currentQuestionIndex].classList.remove('hidden');
                updateProgressBar();
            } else {
                document.getElementById('onboarding-overlay').style.display = 'none';
                sendData();
            }
        });
    });
    updateProgressBar();
}

function resetQuestionnaire() {
    userGoal = "";
    userFrequency = "";
    userEnvironment = "";
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
    currentQuestionIndex = 0;
    questions[currentQuestionIndex].classList.remove('hidden');
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
        goal: userGoal,
        frequency: userFrequency,
        environment: userEnvironment,
        height: document.getElementById("height-1").value,
        weight: document.getElementById("weight-1").value,
        email: document.getElementById("email").value
    };
    // Mostra i dati in un alert
    alert("Dati da inviare:\n" + JSON.stringify(userData, null, 2));
    // URL della tua Netlify Function
    const proxyURL = "/.netlify/functions/google-sheets-proxy";

    fetch(proxyURL, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
        resetQuestionnaire();
        alert("Onboarding completed successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
        resetQuestionnaire();
        alert("There was an error submitting your data.");
    });
}

