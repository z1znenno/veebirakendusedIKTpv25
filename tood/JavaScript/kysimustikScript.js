function koikFunc() {
    // NimiLugemineKastist();
    // EmailLugemineKastist();
    // TelefonLugemineKastist();
    // radioValik();
    // checkboxValik();

    let vastusKoik = document.getElementById("vastusKoik");
    let nimi = NimiLugemineKastist();
    let tel = TelefonLugemineKastist();
    let email = EmailLugemineKastist();
    let valik = radioValik();
    let valik2 = checkboxValik();
    let tund = rangeValik();
    let stiil = selectValik();

    vastusKoik.innerHTML = "Sinu nimi on: " + nimi + '<br>' +
        "Telefon: " + tel + '<br>' +
        "Email: " + email + '<br>' +
        "Sinu lemmikstiil: " + stiil + '<br>' +
        "Sinu lemmikud: " + valik2 + '<br>' +
        "Sa kasutad: " + valik + '<br>' +
        "Sa kuulad muusikat " + tund + " tundi";
}


function NimiLugemineKastist() {
    let vastus1 = document.getElementById("vastus1");
    let nimi = document.getElementById("nimi");

    if (nimi.value == null || nimi.value === "") {
        vastus1.innerHTML = "Nimi ei ole";
    }
    else{
        vastus1.innerHTML = "Sinu sisestatud nimi on: " + nimi.value;
    }

    return nimi.value;
}

function EmailLugemineKastist() {
    let vastus2 = document.getElementById("vastus2");
    let email = document.getElementById("email");
    if (email.value == null || email.value === "") {
        vastus2.innerHTML = "E-posti ei ole";
    }
    else{
    vastus2.innerHTML = "Sinu e-post on: " + email.value;
    }

    return email.value;
}

function TelefonLugemineKastist() {
    let vastus3 = document.getElementById("vastus3");
    let tel = document.getElementById("telefon");
    if (tel.value == null || tel.value === "") {
        vastus3.innerHTML = "Telefoni ei ole";
    }
    else{
        vastus3.innerHTML = "Sinu e-post on: " + email.value;
    }

    return tel.value;
}

function selectValik() {
    let vastus4 = document.getElementById("vastus4");
    let stiil = document.getElementById("stiil");

    if (stiil.selectedIndex !== 0){
        vastus4.innerHTML = "Sa valisid " + stiil.value;
    }
    else{
        vastus4.innerHTML = "Palun tee oma valik";
    }
    if (stiil.selectedIndex !== 0){
        return stiil.value;
    }
    else {
        return "Stiil pole valitud"
    }
}

function radioValik(){
    let vastus5 = document.getElementById("vastus5");
    let spotify = document.getElementById("Spotify");
    let raadio = document.getElementById("raadio");
    let vinyl = document.getElementById("vinyyplaat");

    let valik = "";

    if(spotify.checked){
        valik = spotify.value;
    }
    else if (raadio.checked){
        valik = raadio.value;
    }
    else if (vinyl.checked){
        valik = vinyl.value;
    }
    else {
        valik = "Palun tee oma valik"
    }

    vastus5.innerHTML = "Valik: " + valik;

    return valik;
}

function checkboxValik(){
    let vastus6 = document.getElementById("vastus6");
    let rol = document.getElementById("rollingstones")
    let radiohead = document.getElementById("radiohead");
    let agata = document.getElementById("agatakristi");
    let lsp = document.getElementById("lsp");

    let valik2 = "";

    if(rol.checked){
        valik2 += rol.value + " ";
    }
    if (radiohead.checked){
        valik2 += radiohead.value + " ";
    }
    if (agata.checked){
        valik2 += agata.value + " ";
    }
    if (lsp.checked){
        valik2 += lsp.value;
    }
    if (valik2 == ""){
        valik2 = "Mitte midagi valitud";
    }

    vastus6.innerHTML = valik2;

    return valik2;
}

function rangeValik() {
    let vastus7 = document.getElementById("vastus7");
    let tund = document.getElementById("tund");

    vastus7.innerHTML = tund.value;

    return tund.value;
}

function puhasta(){

}