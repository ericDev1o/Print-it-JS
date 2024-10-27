let flecheGauche = document.querySelector(".arrow_left");
let flecheDroite = document.querySelector(".arrow_right");

/**
 * Cette fonction est DRY et 
 * facilite l'éventuel usage futur de removeEventListener.
 * @param {*} avantOuApres selon que la flèche est gauche ou droite le msg réfèrera
 * respectivement à l'image précédente ou suivante du carrousel.
 */
function affichage(avantOuApres) {
	alert(`Vous voulez afficher l'image ${avantOuApres} du carrousel.`);
}

const affichageGauche = affichage.bind(null, "précédente");
const affichageDroite = affichage.bind(null, "suivante");

flecheGauche.addEventListener("click", affichageGauche);
flecheDroite.addEventListener("click", affichageDroite);