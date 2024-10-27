/****** Étape 2: ajouter les écouteurs d'évènements aux flèches ******/
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

/****** Étape 3: ajouter les bullets points ******/
let dotsDiv = document.querySelector(".dots");
for(let i = 0; i < slides.length; i++){
	let dotSpan = document.createElement("span");
	dotSpan.classList.add("dot");
	if(i == 0){
		dotSpan.classList.add("dot_selected");
	}
	dotsDiv.appendChild(dotSpan);
}