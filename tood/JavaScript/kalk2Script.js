function jookideValik() {
    let vastus = document.getElementById("vastus2");
    let valik = document.getElementById("joogiValik");
    let kogus = document.getElementById("kogus");

    const cola = 2.20;
    const fanta = 2;
    const lipton = 1.8;

    if (valik.selectedIndex === 1){
        vastus.innerHTML = kogus.value + " Coca-Cola hind on " + kogus.value * cola;
        vastus.style.color = "Red"
    }
    else if (valik.selectedIndex === 2){
        vastus.innerHTML = kogus.value + " Fanta hind on " + kogus.value * fanta;
        vastus.style.color = "Orange"
    }
    else if (valik.selectedIndex === 3){
        vastus.innerHTML = kogus.value + " Lipton hind on " + kogus.value * lipton;
        vastus.style.color = "Yellow"
    }
    else if (valik.selectedIndex === 4){
        vastus.innerHTML = "Vesi on tasuta";
        vastus.style.color = "White"
    }
}