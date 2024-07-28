// script.js

// Retrieve name from local storage and display it
const userName = localStorage.getItem('userName');
if (userName) {
    document.getElementById('user-name').textContent = userName;
}

// Function to choose WhatsApp version
function chooseWhatsAppVersion() {
    const pageUrl = window.location.href;
    const message = `Check out this Eid Mubarak greeting: ${pageUrl}`;
    const encodedMessage = encodeURIComponent(message);

    const userChoice = confirm("Do you want to share via WhatsApp Business?\n\nPress OK for Business, Cancel for Individual.");

    let whatsappUrl;
    if (userChoice) {
        // WhatsApp Business
        whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    } else {
        // Regular WhatsApp
        whatsappUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`;
    }

    window.open(whatsappUrl, '_blank');
}
