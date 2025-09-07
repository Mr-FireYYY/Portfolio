window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ?
        navbar.style.backgroundcolor = 'rgba(10,10,10, 0.98)' :
        navbar.style.backgroundcolor = 'rgba(10,10,10, 0.95)';
});

function calM() { 
    let a = 0; 
    let b = 0; 
    let c; 
    while (true) { 
        c = parseFloat(prompt("Entrez un nombre positif (nombre négatif pour arrêter) :")); 
        if (c < 0) break; 
        a += c; 
        b++; 
    } 
    if (b > 0) { 
        alert ("La moyenne est : " + (a / b)); 
    } else { 
        alert ("Aucun nombre positif saisi."); 
    }
}

function verifierAge() {
    let age = parseFloat(prompt("Entrez votre âge :"));
    if (age < 18) {
        alert("Vous êtes mineur."); 
    } else { 
        alert("Vous êtes majeur."); 
    }
}

function verifierNombre() { 
    let n = parseFloat(prompt("Entrez un nombre :")); 
    if (n % 2 === 0) { 
        alert(n+" est pair."); 
    } else { 
        alert(n+" est impair."); 
    } 
}

function contenu() {
    let prenom = document.getElementById("prenom").value;
    let nom = document.getElementById("nom").value;
    let sujet = document.getElementById("sujet").value;
    let message = document.getElementById("message").value;
    if (prenom === "") {
        alert("Veuillez terminer le formulaire");
    } else if (nom === "") {
        alert("Veuillez terminer le formulaire");
    } else if (sujet === "") {
        alert("Veuillez terminer le formulaire");
    } else if (message === "") {
        alert("Veuillez terminer le formulaire");
    } else {
        alert("Merci pour votre message.");
    }
}