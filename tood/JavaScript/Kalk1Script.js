function teisendamine() {
    let vastus = document.getElementById("vastus");
    let valik = document.getElementsByName("valik");
    let arv = document.getElementById("arv");
    const toll = 39.37;
    const meeter = 0.0254

    for (let i = 0; i < valik.length; i++) {
        if (valik[i].checked) {
            if (valik[i].value == "meeter"){
                vastus.innerHTML = arv.value + " meetri = " +
                    (arv.value * toll).toFixed(2) + " tolli"
                vastus.style.color = "yellow"
            }
            else if (valik[i].value == "tolli") {
                vastus.innerHTML = arv.value + " tolli = " +
                    (arv.value * meeter).toFixed(2) + " meetrit"
                vastus.style.color = "red"
            }
            else{
                vastus.innerHTML = "Vali ühiku - kas meeter või tolli"
            }
        }
    }
}