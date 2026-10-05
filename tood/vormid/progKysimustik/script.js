function checkboxValik(){
    let vastus1 = document.getElementById("vastus1");
    let js = document.getElementById("javaScript")
    let cs = document.getElementById("CSharp");
    let java = document.getElementById("java");
    let cpp = document.getElementById("cpp");
    let php = document.getElementById("php");

    let valik = "Sinu valitud programmeerimiskeeled: ";

    if(js.checked){
        valik += js.value + " ";
    }
    if (cs.checked){
        valik += cs.value + " ";
    }
    if (java.checked){
        valik += java.value + " ";
    }
    if (cpp.checked){
        valik += cpp.value + " ";
    }
    if (php.checked){
        valik += php.value;
    }
    if (!js.checked && !cs.checked && !java.checked && !cpp.checked && !php.checked){
        valik = "Mitte midagi valitud";
    }

    vastus1.innerHTML = valik;

    return valik;
}

function ArvamuseLugemineKastist() {
    let vastus2 = document.getElementById("vastus2");
    let arvamus = document.getElementById("arvamus");

    if (arvamus.value == null || arvamus.value === "") {
        vastus2.innerHTML = "Arvamuse ei ole";
    }
    else{
        vastus2.innerHTML = "Sinu arvamus: " + arvamus.value;
    }

    return arvamus.value;
}

function rangeValik() {
    let vastus3 = document.getElementById("vastus3");
    let tund = document.getElementById("tund");

    vastus3.innerHTML = "Tegeled programmeerimisega " + tund.value + " tundi nädalas.";

    return tund.value;
}

function radioValik2(){
    let vastus4 = document.getElementById("vastus4");
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");
    let jaheiPilt = document.getElementById("jaheiPilt");

    let valik2 = "";

    if(jah.checked){
        valik2 = jah.value;
        vastus4.innerHTML = "Programmeerimine meeldib!";
        jaheiPilt.src = "../../pildid/smile.png";

    }
    else if (ei.checked){
        valik2 = ei.value;
        vastus4.innerHTML = "Programmeerimine ei meeldi.";
        jaheiPilt.src = "../../pildid/kurb.png";

    }
    else {
        valik2 = "Palun tee oma valik"
    }


    return valik2;
}

function ide() {
    let vastus5 = document.getElementById("vastus5");
    let ide = document.getElementById("IDE");

    if (ide.value == null || ide.value === "") {
        vastus5.innerHTML = "Kas ei tea tööristad?";
    }
    else{
        vastus5.innerHTML = "Sinu nimetatud tööriistad: " + ide.value;
    }

    return ide.value;
}

function selectValik() {
    let vastus6 = document.getElementById("vastus6");
    let lemKeel = document.getElementById("lemKeel");

    if (lemKeel.selectedIndex !== 0){
        vastus6.innerHTML = "Sinu valik: " + lemKeel.value;
    }
    else{
        vastus6.innerHTML = "Palun tee oma valik";
    }
    if (lemKeel.selectedIndex !== 0){
        return lemKeel.value;
    }
    else {
        return "Lemmik keel pole valitud"
    }
}

function puhasta(){
    let kokku = document.getElementById("kokku");

    let pilt = document.getElementById("jaheiPilt");
    pilt.src = "../../pildid/vali.png";
    vastus1.innerHTML = "";
    vastus2.innerHTML = "";
    vastus3.innerHTML = "";
    vastus4.innerHTML = "";
    vastus5.innerHTML = "";
    vastus6.innerHTML = "";
    kokku.innerHTML = "";
}

function saada(){
    let kokku = document.getElementById("kokku");

    let progKeel = checkboxValik();
    let arvamus = ArvamuseLugemineKastist()
    let range = rangeValik();
    let radioValik = radioValik2();
    let IDE = ide();
    let select = selectValik();

    valik = "";

    if (radioValik == "Jah"){
        valik = "Programmeerimine meeldib!";
    }
    else{
        valik = "Programmeerimine ei meeldi.";
    }


    kokku.innerHTML =
    progKeel + "," + '<br>' +
    "Sinu arvamus: " + arvamus + "," + '<br>' +
    "Tegeled programmeerimisega " + range + " tundi nädalas." + '<br>' +
    valik + '<br>' +
    "Sinu nimetatud tööriistad: " + IDE + "," + '<br>' +
    "Sinu valik: " + select;
}