

const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');

const correctPassword = 'kadnosa'; // Replace with your actual password

submitButton.addEventListener('click', () => {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        window.location.href = 'home.html'; // Replace with the actual URL of your main content page
    } else {
        errorMessage.textContent = 'Mot de passe incorrect! veuillez saisir votre mot de passe .';
    }
});
