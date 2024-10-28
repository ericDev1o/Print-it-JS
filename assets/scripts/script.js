/****** Étape 2: ajouter les écouteurs d'évènements aux flèches ******/
let flecheGauche = document.querySelector(".arrow_left");
let flecheDroite = document.querySelector(".arrow_right");

/**
 * Cette fonction est DRY et 
 * facilite l'éventuel usage futur de removeEventListener.
 * Le clic sur la flèche droite respectivement gauche
 * 	->	affiche l'image suivante resp. précédente
 * 	->	sélectionne le bullet point suivant resp. précédent
 * 	->	affiche le texte de l'image suivante resp. précédente
 * @param {string} avantOuApres selon que la flèche est gauche ou droite le msg réfèrera
 * respectivement à l'image précédente ou suivante du carrousel.
 */
function affichage(avantOuApres) {
	/****** Étapes 4 et 5: faire défiler le carrousel ******/
	let dotsSpan = document.querySelectorAll(".dot");
	let j = 0;
	for(let i = 0; i < dotsSpan.length; i++){
		if(dotsSpan[i].classList.contains("dot_selected")){
			j = i;
		}
	}
	dotsSpan[j].classList.remove("dot_selected");
	let image = document.querySelector(".banner-img");
	let tagLine = document.querySelector("#banner p");
	switch (avantOuApres){
		case "suivante":
			if(j === dotsSpan.length-1){
				j = -1;
			}
			dotsSpan[j+1].classList.add("dot_selected");
			image.src = "./assets/images/slideshow/" + slides[j+1].image;
			tagLine.innerHTML = `<p>${slides[j+1].tagLine}</p>`;
			break;
		case "précédente":
			if(j === 0){
				j = dotsSpan.length;
			}
			dotsSpan[j-1].classList.add("dot_selected");
			image.src = "./assets/images/slideshow/" + slides[j-1].image;
			tagLine.innerHTML = `<p>${slides[j-1].tagLine}</p>`;
	}
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