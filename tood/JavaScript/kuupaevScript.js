const now = new Date();

const paev = now.getDate(); //Tagastab päeva
console.log("Tänane päev " + paev + " päev")

const kuu = now.getMonth() //Tagastab kuu number
console.log("Tänane kuu number on: " + kuu);

const aasta = now.getFullYear(); //Tagastab aasta number
console.log("Aasta on: " + aasta)

const nadalapaev = now.getDay(); //Tagastab nädalapäevanumber
console.log("Nädalapäeva number on: " + nadalapaev);

function tana(){
    let vastus = document.getElementById("vastus");
    vastus.innerHTML = "Täna on: " + paev + "." + kuu + "." + aasta;
    //console.log("Täna on: {paev}.{kuu}.{aasta}", paev, kuu, aasta);
}

//Lisa veel getHours() getMinutes()
//Ja lise veel üks funktsioon mis näitab aeg-kellaaeg

const tund = now.getHours();
const minutit = now.getMinutes();

function kellaaeg(){
    let vastus = document.getElementById("vastus2");

    vastus.innerHTML = "Kell on: " + tund + ":" + minutit;
    console.log("Kell on: " + tund + "." + minutit);
}

const konsultatsioonipaev = new Date(2026, 10, 2);
const vahe = konsultatsioonipaev.getTime() - now.getTime();
const konspaev = (vahe / (1000 * 60 * 60 * 24)).toFixed(0); //Sekundid * minutit * tundi * päeva

function konsultatsioon(){
    let vastus = document.getElementById("vastus3");
    vastus.innerHTML = "Konsultatsiooni nädalani " + konspaev + " päeva"
}

const sunnipaevani = new Date(2027, 1, 10);
const vahe2 = sunnipaevani.getTime() - now.getTime();
const sunnpaev = (vahe2 / (1000 * 60 * 60 * 24)).toFixed(0);

function sunnipaev(){
    let vastus = document.getElementById("vastus4");
    vastus.innerHTML = "Sünnipäevani " + sunnpaev + " päeva"
}