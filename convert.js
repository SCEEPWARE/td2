const button = document.getElementById("button");
const eur = document.getElementById("eur");
const usd = document.getElementById("usd");
const aud = document.getElementById("aud");


button.addEventListener("click", (e) => {
    if(eur.value){
        usd.value = eur.value * 1.01;
        aud.value = eur.value * 1.47;
    }
})

document.addEventListener("DOMContentLoaded", () => {
    usd.setAttribute("disabled", "");
    aud.setAttribute("disabled", "");
})