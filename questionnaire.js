document.getElementById('get-started').addEventListener('click', function () {
    document.getElementById('onboarding-overlay').classList.remove('hidden');
    // Mostra l'overlay
    document.getElementById('onboarding-overlay').style.display = 'flex'; // Modifica qui!
    startOnboarding();
});

function nextQuestion(currentStep, nextStep) {
    const currentElement = document.querySelector(`.${currentStep}`);
    const nextElement = document.querySelector(`.${nextStep}`);

    currentElement.classList.add('hidden');
    nextElement.classList.remove('hidden');
    updateProgressBar();
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
                alert("Thank you for submitting your details!");
                document.getElementById('onboarding-overlay').style.display = 'none';
                resetQuestionnaire();
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
