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

// --------- Sous-menus--------

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('[class^="home-"]'); // Boutons déclencheurs
    const sousMenuContainer = document.querySelector('.navbar-sous-menu-container'); // Le conteneur principal
    const menuContainers = document.querySelectorAll('.navbar-sous-menu-container .sous-menu');
    let activeMenu = null; // Stocke le menu actuellement visible

    // Assure que la navbar-sous-menu-container est cachée au chargement
    sousMenuContainer.style.display = 'none';

    // Fonction pour masquer tous les sous-menus et le conteneur
    const hideAllMenus = () => {
        sousMenuContainer.style.display = 'none';
        menuContainers.forEach(menu => menu.style.display = 'none');
        activeMenu = null;
    };

    // Afficher ou cacher le sous-menu correspondant
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation(); // Empêche la propagation
            const targetClass = item.className.split(' ')[0]; // Identifie la classe cible
            const targetMenu = document.querySelector(`.navbar-sous-menu-container .${targetClass}`);

            // Vérifie si le menu cliqué est déjà actif
            if (activeMenu === targetMenu) {
                hideAllMenus(); // Cache tout si on clique à nouveau sur l'élément actif
            } else {
                hideAllMenus(); // Masque les autres menus
                sousMenuContainer.style.display = 'flex'; // Affiche le conteneur principal
                targetMenu.style.display = 'block'; // Affiche le menu correspondant
                activeMenu = targetMenu; // Définit le nouveau menu actif
            }
        });
    });

    // Masquer tout au clic extérieur
    document.addEventListener('click', () => {
        hideAllMenus();
    });
});

//------------les slides-----------------------

// Variables globales
let slideImages = document.querySelectorAll('.slides img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let dots = document.querySelectorAll('.dot');
let container = document.querySelector('.slide-container');
let counter = 0;
let autoSlideInterval;

// Fonction pour passer à l'image suivante
function slideNext() {
    slideImages[counter].classList.remove('active');
    slideImages[counter].style.animation = 'none'; // Supprimer toute animation en cours
    counter = (counter + 1) % slideImages.length;
    slideImages[counter].classList.add('active');
    slideImages[counter].style.animation = 'next 1s ease-in forwards';
    updateIndicators();
}

// Fonction pour revenir à l'image précédente
function slidePrev() {
    slideImages[counter].classList.remove('active');
    slideImages[counter].style.animation = 'none'; // Supprimer toute animation en cours
    counter = (counter - 1 + slideImages.length) % slideImages.length;
    slideImages[counter].classList.add('active');
    slideImages[counter].style.animation = 'prev 1s ease-in forwards';
    updateIndicators();
}

// Fonction pour mettre à jour les indicateurs
function updateIndicators() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}

// Fonction pour basculer vers une image spécifique (via les indicateurs)
dots.forEach(dot => {
    dot.addEventListener('click', function () {
        let imageId = parseInt(this.getAttribute('data-id'));
        if (imageId !== counter) {
            slideImages[counter].classList.remove('active');
            slideImages[counter].style.animation = 'none'; // Supprimer toute animation en cours
            counter = imageId;
            slideImages[counter].classList.add('active');
            slideImages[counter].style.animation = 'next 1s ease-in forwards';
            updateIndicators();
        }
    });
});

// Fonction d'auto-slide
function autoSliding() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(slideNext, 3000);
}

// Démarrage de l'auto-slide
autoSliding();

// Arrêter le slide lorsque la souris est sur le container
container.addEventListener('mouseover', () => clearInterval(autoSlideInterval));

// Reprendre le slide lorsque la souris quitte le container
container.addEventListener('mouseout', autoSliding);

// Écouteurs pour les boutons
next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);




