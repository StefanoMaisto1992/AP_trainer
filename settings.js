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
        aboutDescription: "With over 10 years of experience in professional boxing and personal training, I help clients achieve their fitness goals through personalized training programs and expert guidance.",
        moreDescription: " My focus is on maintaining good practices in the fitness and wellness world, ensuring sustainable and effective results for everyone I train.",
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
        aboutDescription: "Con oltre 10 anni di esperienza nella boxe professionale e nell'allenamento personale, aiuto i clienti a raggiungere i loro obiettivi di fitness con programmi personalizzati e guida esperta.",
        moreDescription: "Il mio obiettivo è mantenere buone pratiche nel mondo del fitness e del benessere, assicurando risultati sostenibili ed efficaci per tutti coloro che alleno.",
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