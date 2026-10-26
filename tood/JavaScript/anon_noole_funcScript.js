// 1. Erinevad funktsioonid
function minuNimi() {
    return "Oleg";
}

const minuNimi2 = () => "Oleg";

function naitaNimi() {
    document.getElementById("vastus1").innerHTML = "Klassikaline: " + minuNimi();
}

function naitaNimi2() {
    document.getElementById("vastus1").innerHTML = "Noolefunktsioon: " + minuNimi2();
}


// 2. Argumendiga funktsioon
function kuupaevEesti(kuupaev) {
    let kuud = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
        "juuli", "august", "september", "oktoober", "november", "detsember"];
    let osad = kuupaev.split(".");
    let tekst = osad[0] + ". " + kuud[osad[1] - 1];
    console.log(tekst);
    return tekst;
}

function naitaKuupaev() {
    let kuupaev = document.getElementById("kuupaev").value;
    document.getElementById("vastus2").innerHTML = kuupaevEesti(kuupaev);
}


// 3. Teadmata hulk
function arvudeInfo(arvud) {
    let summa = 0;
    arvud.forEach(arv => summa += arv);
    return "Kokku: " + arvud.length + "<br>Keskmine: " + summa / arvud.length;
}

function naitaArvudeInfo() {
    let tekst = document.getElementById("arvud").value;
    let arvud = [];
    tekst.split(",").forEach(arv => arvud.push(Number(arv)));
    document.getElementById("vastus3").innerHTML = arvudeInfo(arvud);
}


// 4. Salajane sõnum
const salajaneSonum = sonum => {
    let vokaalid = ["a", "e", "i", "o", "u", "õ", "ä", "ö", "ü"];
    let tulemus = "";
    sonum.split("").forEach(taht => {
        if (vokaalid.find(v => v === taht) === undefined) {
            tulemus += taht;
        } else {
            tulemus += "*";
        }
    });
    return tulemus;
};

function naitaSalajane() {
    let sonum = document.getElementById("sonum").value;
    document.getElementById("vastus4").innerHTML = salajaneSonum(sonum);
}


// 5. Unikaalsed nimed
const leiaUnikaalsedNimed = nimed => {
    let unikaalsed = [];
    nimed.forEach(nimi => {
        if (unikaalsed.find(n => n === nimi) === undefined) {
            unikaalsed.push(nimi);
        }
    });
    return unikaalsed;
};

function naitaUnikaalsed() {
    let nimed = document.getElementById("nimed").value.split(",");
    document.getElementById("vastus5").innerHTML = leiaUnikaalsedNimed(nimed);
}