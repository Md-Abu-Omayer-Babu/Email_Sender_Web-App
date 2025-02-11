emailjs.init("YOUR_PUBLIC_KEY");

function sendEmail() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const statusMessage = document.getElementById("status");

    if (!email || !message) {
        statusMessage.innerHTML = "Please fill in all fields.";
        statusMessage.style.color = "red";
        return;
    }

    const templateParams = {
        to_email: email,
        message: message
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(response => {
            statusMessage.innerHTML = "Welcome email sent successfully!";
            statusMessage.style.color = "green";
            console.log("Success:", response);
        })
        .catch(error => {
            statusMessage.innerHTML = "Failed to send email.";
            statusMessage.style.color = "red";
            console.log("Error:", error);
        });
}
