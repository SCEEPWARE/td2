// 1
document.querySelector('#wikipedia').setAttribute('href', 'https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal');

document.querySelector('#verif').addEventListener('click', (e) => {
    console.log('clicked');
    let etiquette = document.querySelector('#etiquette');
    if (!(etiquette.value === "Oui" || etiquette.value === "Non")) {
        etiquette.value = "Il faut mettre Oui ou Non!";
    }
})

// 2
let elem = document.getElementById("ch1");
elem.nextSibling.innerHTML = "HP";
elem.nextSibling.nextSibling.nextSibling.innerHTML = "Casque" // deux fois pour sauter la case à cocher
elem.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = "Bluetooth"

//3
let volume = document.querySelector('input[type="range"]');

document.querySelectorAll('input[name="choix"]').forEach(e => {
    e.addEventListener('change', function () {
        if (this.value == "1") {
            document.querySelector('label[for="vol"]').innerHTML = "HP"
            return;
        }
        if (this.value == "2") {
            document.querySelector('label[for="vol"]').innerHTML = "Casque"
            return;
        }
        if (this.value == "3") {
            document.querySelector('label[for="vol"]').innerHTML = "Bluetooth"
            return;
        }
    })
})

volume.max = 100;
console.log(volume.max);

volume.addEventListener('input', function () {
    volume.nextElementSibling.nextElementSibling.innerHTML = this.value;
})

document.querySelector('label[for="ouinon"]').innerHTML = "Mute";
document.querySelector('#ouinon').addEventListener('change', function () {
    if (this.checked) {
        volume.setAttribute("disabled", "");
        return;
    }
    volume.removeAttribute("disabled");
})

// Modification du dom

// la div "Lien et image" est la première  div donc pas besoin d'id ou autre.
let img = document.createElement("img");
img.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";
img.alt = "logo uphf";
img.width = 200;
document.querySelector("div").appendChild(document.createElement("br")); // juste pour bien afficher l'image à la fin de la div.
document.querySelector("div").appendChild(img);

// Démarrage

// On ajoute le code HTML

document.querySelectorAll("div").forEach(div => {
    div.style.display = "none"
})

document.querySelectorAll('hr').forEach(e => {
    e.style.display = "none"
})

document.querySelectorAll('input[name="menu"]').forEach(e => {
    e.addEventListener('change', function () {
        let div = document.querySelector(this.value);
        if (this.checked) {
            div.style.display = "block";
            if (!!div.nextElementSibling.style.display) {
                div.nextElementSibling.style.display = "block";
            }
            return;
        }
        div.style.display = "none";
        if (!!div.nextElementSibling.style.display) {
            div.nextElementSibling.style.display = "none";
        }
    })
})

// décocher tout (avec callback)
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('input[name="menu"]').forEach(box => {
        box.checked = false;
    })
})

// 3
document.querySelector("#date").addEventListener('change', function () {
    let date = new Date(this.value);
    console.log(date.getFullYear());
})

document.querySelector("progress").value = 0;
document.querySelector("meter").value = 0;

function increment(){
    document.querySelector("progress").value += 5;
    document.querySelector("meter").value += 5;
    if(document.querySelector("progress").value >= 100){
        clearInterval(id);
    }
}

let id = setInterval(increment, 1000);