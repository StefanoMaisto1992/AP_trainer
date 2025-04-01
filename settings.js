const translations = {
    en: {
        home: "Home",
        about: "About",
        testimonials: "Testimonials",
        bmi: "BMI Calculator",
        contact: "Contact",
        welcomeMessage: "Transform Your Body, Transform Your Life",
        welcomeSubtext: "Professional boxing and personal training to help you achieve your fitness goals",
        getStarted: "Get Started",
        aboutTitle: "About Me",
        aboutDescription: "I am a Personal Trainer with a degree in Sports Science and extensive experience in boxing. I help my clients enhance their strength 💪, endurance 🏃‍♂️, and technique 🎯 through personalized and scientifically designed training programs.",
        moreDescription: "Every plan is tailored to individual needs, combining the analytical approach of movement science 📚 with a passion for sports. I focus on optimal performance and injury prevention 🛡️, ensuring steady and safe progress. My goal is to motivate and guide each client toward achieving their physical and mental goals 🏆, transforming every training session into a concrete step toward becoming the best version of themselves 🌟.",
        seeMore: "See more",
        contactFormTitle: "Contact Me",
        contactFormMessage: "Have questions or want to start your fitness journey? Fill out the form below to get in touch!",
        closeButton: "Close",
        height: "Height (cm)",
        weight: "Weight (kg)",
        calculateBMI: "Calculate BMI",
        //Form section
        firstname: "First Name",
        placeholderFirstname: "Enter your first name",
        lastname: "Last Name",
        placeholderLastname: "Enter your last name",
        mail: "Email address",
        placeholderMail: "Enter your email address",
        message: "Your Message",
        placeholderMessage: "Write your message here",
        sendMessageButtonTitle: "Send Message",
        //Footer
        contactSectionTitle: "Contact Info", 
        followMeTitle: "Follow me",
        hoursTitle: "Hours",  
        hoursp1: "Mon-Fri: 6am - 9pm",
        hoursp2: "Sat: 8am - 6pm",
        successStories: "Success Stories",
        //Questionario
        skip: "Skip",
        onboardingTitle: "Let's Start Your Journey!",
        goalQuestion: "What's your primary fitness goal?",
        goalOption1: "Lose Weight",
        goalOption2: "Build Muscle",
        goalOption3: "Improve Endurance",
        frequencyQuestion: "How often do you currently work out?",
        frequencyOption1: "3 times a week",
        frequencyOption2: "5 times a week",
        frequencyOption3: "I don't work out yet",
        environmentQuestion: "What's your preferred workout environment?",
        environmentOption1: "Gym",
        environmentOption2: "Home",
        environmentOption3: "Outdoor",
        detailsTitle: "Please provide your details:",
        dataConsent: "I authorize the treatment of my personal data.",
        finish: "Finish"
    },
    it: {
        home: "Home",
        about: "Chi Sono",
        testimonials: "Testimonianze",
        bmi: "Calcolatore BMI",
        contact: "Contatti",
        welcomeMessage: "Trasforma il tuo corpo, trasforma la tua vita",
        welcomeSubtext: "Boxe professionale e allenamento personalizzato per aiutarti a raggiungere i tuoi obiettivi di fitness",
        getStarted: "Inizia Ora",
        aboutTitle: "Chi Sono",
        aboutDescription: "Sono un Personal Trainer laureato in Scienze Motorie con una solida esperienza nel pugilato. Aiuto i miei clienti a migliorare forza 💪, resistenza 🏃‍♂️ e tecnica 🎯 attraverso programmi di allenamento personalizzati e scientificamente mirati.",
        moreDescription: "Ogni percorso è studiato per adattarsi alle esigenze individuali, combinando l'approccio analitico della scienza del movimento 📚 con la passione per lo sport. Mi concentro su performance e prevenzione degli infortuni 🛡️, garantendo progressi in sicurezza. Il mio obiettivo è motivare e guidare ciascun cliente nel raggiungimento dei propri traguardi fisici e mentali 🏆, trasformando ogni sessione di allenamento in un passo concreto verso la migliore versione di sé 🌟.",
        seeMore: "Vedi altro",
        contactFormTitle: "Contattami",
        contactFormMessage: "Hai domande o vuoi iniziare il tuo percorso fitness? Compila il modulo qui sotto per metterti in contatto!",
        closeButton: "Chiudi",
        height: "Altezza (cm)",
        weight: "Peso (kg)",
        calculateBMI: "Calcola BMI",
        //Form section
        firstname: "Nome",
        placeholderFirstname: "Inserisci il tuo nome",
        lastname: "Cognome",
        placeholderLastname: "Inserisci il tuo cognome",
        mail: "Indirizzo email",
        placeholderMail: "Inserisci il tuo indirizzo mail",
        message: "Il tuo messaggio",
        placeholderMessage: "Scrivi il tuo messagio qui",
        sendMessageButtonTitle: "Invia Messaggio",
        //Footer
        contactSectionTitle: "Info di contatto", 
        followMeTitle: "Seguimi",  
        hoursTitle: "Orari",
        hoursp1: "Lun-Ven: 6am - 9pm",
        hoursp2: "Sab: 8am - 6pm",
        successStories: "Storie di Successo",
        //Questionario
        skip: "Salta",
        onboardingTitle: "Inizia il Tuo Percorso!",
        goalQuestion: "Qual è il tuo obiettivo fitness principale?",
        goalOption1: "Perdere Peso",
        goalOption2: "Costruire Muscoli",
        goalOption3: "Migliorare la Resistenza",
        frequencyQuestion: "Quanto spesso ti alleni attualmente?",
        frequencyOption1: "3 volte a settimana",
        frequencyOption2: "5 volte a settimana",
        frequencyOption3: "Non mi alleno ancora",
        environmentQuestion: "Qual è il tuo ambiente di allenamento preferito?",
        environmentOption1: "Palestra",
        environmentOption2: "Casa",
        environmentOption3: "All'aperto",
        detailsTitle: "Fornisci i tuoi dati:",
        dataConsent: "Autorizzo il trattamento dei miei dati personali.",
        finish: "Termina"
    }
};

document.addEventListener('DOMContentLoaded', function () {
    setLanguage('it');
    emptyMessage();
});

function setLanguage(lang) {
    document.querySelectorAll("[data-lang-key]").forEach(element => {
        const key = element.getAttribute("data-lang-key");
        element.textContent = translations[lang][key];
    });
    document.querySelectorAll('input[data-lang-key], textarea[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translation = translations[lang][key];

        // Se la traduzione esiste, applicala al placeholder
        if (translation) {
            element.placeholder = translation;
        };

    });
}

function emptyMessage() {
    const textarea = document.getElementById('message');
    if (textarea) {
        textarea.value = '';
    }
}