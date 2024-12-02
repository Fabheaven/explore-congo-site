import './styles/app.css';
//--------------------------Button-down---------------------------------------
// Étape 1 : Sélectionner les éléments
const navbarButton = document.querySelector('.navbar-button'); // Le bouton
const buttonDown = document.querySelector('.button-down'); // La div à afficher

// Étape 2 : Ajouter un écouteur d'événement au clic
navbarButton.addEventListener('click', () => {
    // Étape 3 : Ajouter ou retirer la classe "active"
    buttonDown.classList.toggle('active');
});

// Ajouter un écouteur d'événement global pour détecter les clics en dehors de la div
document.addEventListener('click', (event) => {
    if (!buttonDown.contains(event.target) && !navbarButton.contains(event.target)) {
        buttonDown.classList.remove('active'); // Masquer la div si le clic est à l'extérieur
    }
});

//----------- Button-language --------
// Étape 1 : Sélectionner les éléments
const buttonLanguageDown = document.querySelector('.button-language-down'); // La div à afficher
const navbarButtonLink = document.querySelector('.navbar-button-link'); // Le bouton
// Étape 2 : Ajouter un écouteur d'événement au clic
navbarButtonLink.addEventListener('click', () => {
    // Étape 3 : Ajouter ou retirer la classe "active"
    buttonLanguageDown.classList.toggle('active');
});

// Ajouter un écouteur d'événement global pour détecter les clics en dehors de la div
document.addEventListener('click', (event) => {
    if (!buttonLanguageDown.contains(event.target) && !navbarButtonLink.contains(event.target)) {
        buttonLanguageDown.classList.remove('active'); // Masquer la div si le clic est à l'extérieur
    }
});


