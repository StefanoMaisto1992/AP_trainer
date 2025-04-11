// Funzione per aprire il modal
function openModal(beforeImage, afterImage) {
    const modal = document.getElementById('modal');
    document.getElementById('before-image').src = beforeImage;
    document.getElementById('after-image').src = afterImage;

    // Mostra il modale usando style.display
    modal.style.display = 'flex';
}

// Funzione per chiudere il modal
function closeModal() {
    const modal = document.getElementById('modal');

    // Nascondi il modale
    modal.style.display = 'none';
}

// Aggiungi gli eventi di clic per i testimonial
document.getElementById('testimonial-1').addEventListener('click', function() {
    openModal('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61', 'https://images.unsplash.com/photo-1597452485668-2b8ae3b8daa7');
});
document.getElementById('testimonial-2').addEventListener('click', function() {
    openModal('https://images.unsplash.com/photo-1574680096145-d05b474e2155', 'https://images.unsplash.com/photo-1648634558270-6533b7578915');
});
document.getElementById('testimonial-3').addEventListener('click', function() {
    openModal('https://images.unsplash.com/photo-1633956319625-df645828880d', 'https://images.unsplash.com/photo-1627262899263-839fe9307c00');
});

// Chiudi il modal quando l'utente clicca sul bottone "Close"
document.getElementById('closeModal').addEventListener('click', closeModal);

// Chiudi il modal se l'utente clicca fuori dal modale
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});