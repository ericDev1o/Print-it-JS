let flecheGauche = document.querySelector(".arrow_left");
let flecheDroite = document.querySelector(".arrow_right");

flecheGauche.addEventListener("click", () => {
	alert("Vous voulez afficher l'image précédente du carrousel.");
});
flecheDroite.addEventListener("click", () => {
	alert("Vous voulez afficher l'image suivante du carrousel.");
});