const eur = document.getElementById("eur");
const usd = document.getElementById("usd");
const aud = document.getElementById("aud");


eur.addEventListener("input", (e) => {
    if(eur.value){
        usd.value = eur.value * 1.01;
        aud.value = eur.value * 1.47;
    }
})

usd.addEventListener("input", (e) => {
    if(usd.value){
        eur.value = usd.value * 0.99;
        aud.value = usd.value * 1.455;
    }
})

aud.addEventListener("input", (e) => {
    if(aud.value){
        eur.value = aud.value * 0.68;
        usd.value = aud.value * 0.687;
    }
})