function juhuslikPilt(){
    //massiiv pildi failidest
    pildid = [
        '../pildid/kurb.png',
        '../pildid/lill.png',
        '../pildid/neutral.png',
        '../pildid/smile.png'
    ]
    const randomPilt = document.getElementById('randomPilt');

    const pilt = pildid[Math.floor(Math.random() * pildid.length)];
    //Math.floor - ümardab täisarvuni
    //Math.random - juhuslik arv

    randomPilt.src = pilt;
}

function selectValik() {
    let vastus = document.getElementById("vastus");
    let valik = document.getElementById("valik");
    let randomPilt = document.getElementById('randomPilt');

    if (randomPilt.getAttribute("src") == valik.value){
        vastus.innerHTML = "Õige";
        vastus.style.color = "Green"
    }
    else {
        vastus.innerHTML = "Vale!";
        vastus.style.color = "Red"

    }
}

function radioValik(){
    let piltValik = document.getElementsByName("piltValik"); //mitu elemendi ühe nimega
    let valitudPilt = document.getElementById("valitudPilt");

    let valik = "";

    for (let i = 0; i < piltValik.length; i++){
        if (piltValik[i].checked){
            valitudPilt.src = piltValik[i].value;
        }
        else{
            //alert("Tee oma valik");
        }
    }
}