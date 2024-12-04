(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "Y3HDs3hNV0iW6dpE_",
    });
})();

function sendMail(event) {
    event.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const mail = document.getElementById("email_id").value;
    const message = document.getElementById("message_id").value;
    var params = {
        from_name: `${firstName} ${lastName}`,
        email_id: mail,
        message_id: message
    }
    emailjs.send("service_tay3428", "template_emz2bzj", params)
        .then(function (response) {
            console.log("SUCCESS!", response);
            alert("Il tuo messaggio è stato inviato con successo!");
            clearAll();
        }, function (error) {
            console.log("FAILED...", error);
            alert("Ops! Qualcosa è andato storto. Riprova.");
        });
}

function clearAll() {
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('email_id').value = '';
    document.getElementById('message_id').value = '';
}