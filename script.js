function sport() {
    document.getElementById("infoSport").classList.toggle("cache");
}

function gaming() {
    document.getElementById("infoGaming").classList.toggle("cache");
}


function technologie() {
    document.getElementById("infoTech").classList.toggle("cache");
}

function changerTheme() {
    document.body.classList.toggle("light-mode");

    let bouton = document.getElementById("themeBtn");

    if (document.body.classList.contains("light-mode")) {
        bouton.innerText = "🌙 Mode sombre";
    } else {
        bouton.innerText = "☀️ Mode clair";
    }
}
function rechercherCarte() {
    let input = document.getElementById("searchBar").value.toLowerCase();

    let elements = document.querySelectorAll(".carte, .search-item");

    elements.forEach(function(element) {

        let texte = element.innerText.toLowerCase();

        if (texte.includes(input)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }

    });
}

function connexion() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let message = document.getElementById("messageLogin");

    if (user === "" || pass === "") {
        message.innerText = "Veuillez remplir tous les champs ⚠️";
        message.style.color = "orange";
        return;
    }

    if (user === "admin" && pass === "1234") {
        message.innerText = "Connexion réussie ✅";
        message.style.color = "lime";

        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

    } else {
        message.innerText = "Nom d'utilisateur ou mot de passe incorrect ❌";
        message.style.color = "red";
    }
}
function compteur(id, fin, suffixe = "") {
    let valeur = 0;
    let element = document.getElementById(id);

    let interval = setInterval(function () {
        valeur++;
        element.innerText = valeur + suffixe;

        if (valeur >= fin) {
            clearInterval(interval);
        }
    }, 40);
}

compteur("alertes", 12);
compteur("connexions", 48);
compteur("reseau", 96, "%");
window.onload = function () {
    document.getElementById("bar1").style.width = "40%";
    document.getElementById("bar2").style.width = "80%";
    document.getElementById("bar3").style.width = "30%";
    document.getElementById("bar4").style.width = "65%";
    document.getElementById("bar5").style.width = "90%";
};
let alertes = [
    "⚠️ Tentative de connexion détectée",
    "🔒 Scan de sécurité terminé",
    "🌐 Activité réseau élevée",
    "✅ Pare-feu stable"
];

let indexAlerte = 0;

setInterval(function () {
    document.getElementById("alerteTexte").innerText = alertes[indexAlerte];

    indexAlerte++;

    if (indexAlerte >= alertes.length) {
        indexAlerte = 0;
    }
}, 3000);
function scanReseau() {
    let message = document.getElementById("scanMessage");

    message.innerText = "⏳ Scan en cours...";
    message.style.color = "orange";

    setTimeout(function () {
        message.innerText = "✅ Aucune menace détectée";
        message.style.color = "lime";
    }, 2000);
}
function verifierMotDePasse() {
    let password = document.getElementById("passwordCheck").value;
    let resultat = document.getElementById("resultatPassword");

    if (password.length < 6) {
        resultat.innerText = "🔴 Mot de passe faible";
        resultat.style.color = "red";
    } 
    else if (password.length < 10) {
        resultat.innerText = "🟠 Mot de passe moyen";
        resultat.style.color = "orange";
    } 
    else {
        resultat.innerText = "🟢 Mot de passe fort";
        resultat.style.color = "lime";
    }
}
function envoyerMessage() {
    let nom = document.getElementById("nomContact").value;
    let email = document.getElementById("emailContact").value;
    let message = document.getElementById("messageContact").value;
    let confirmation = document.getElementById("confirmationContact");

    if (nom === "" || email === "" || message === "") {
        confirmation.innerText = "⚠️ Veuillez remplir tous les champs";
        confirmation.style.color = "orange";
        return;
    }

    confirmation.innerText = "✅ Message envoyé avec succès";
    confirmation.style.color = "lime";

    document.getElementById("nomContact").value = "";
    document.getElementById("emailContact").value = "";
    document.getElementById("messageContact").value = "";
}
function toggleFAQ(id) {
    let reponse = document.getElementById(id);

    if (reponse.style.display === "block") {
        reponse.style.display = "none";
    } else {
        reponse.style.display = "block";
    }
}
function genererMotDePasse() {

    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%!&*";

    let motDePasse = "";

    for (let i = 0; i < 12; i++) {

        let aleatoire = Math.floor(Math.random() * caracteres.length);

        motDePasse += caracteres.charAt(aleatoire);
    }

    document.getElementById("motDePasseGenere").innerText = motDePasse;
}