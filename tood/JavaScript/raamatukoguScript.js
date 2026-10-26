let raamat = {
    pealkiri: "Tõde ja õigus",
    autor: "A. H. Tammsaare",
    aasta: 1926, //Objekt raamat. Esimene punkt raamat

    kirjeldus() {
        return "Raamat \"" + this.pealkiri + "\", autor " + this.autor + ", ilmus " + this.aasta + ". aastal";
    }, //Funktsioon kuvab raamatu nimi, autor ja ilmumisaasta. Teine punkt raamat

    muudaAasta(uusAasta) {
        this.aasta = uusAasta;
        console.log("Uus väljaandmise aasta: " + this.aasta);
        console.log(this.kirjeldus());
    } //Funktsioon muudab ilmumisaasta. Kolmas punkt raamat
};

let raamatukogu = {
    raamatud: [
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Nimed marmortahvlil", autor: "Albert Kivikas", aasta: 1936 },
        { pealkiri: "Harry Potter ja tarkade kivi", autor: "J. K. Rowling", aasta: 1997 },
        { pealkiri: "Rehepapp", autor: "Andrus Kivirähk", aasta: 2000 },
        { pealkiri: "Mees, kes teadis ussisõnu", autor: "Andrus Kivirähk", aasta: 2007 }
    ], //Massiiv raamatukogu. Esimene punkt raamatukogu

    kuvaRaamatud() {
        let tekst = "";
        this.raamatud.forEach(raamat => {
            console.log(raamat.pealkiri + " - " + raamat.autor + " (" + raamat.aasta + ")");
            tekst += raamat.pealkiri + " - " + raamat.autor + " (" + raamat.aasta + ")<br>";
        });
        return tekst;
    }, //Kuvab kõik raamatud. Teine punkt raamatukogu

    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });
        console.log("Lisatud uus raamat: " + pealkiri);
    }, //Lisab raamat raamatukogusse. Kolmas punkt raamatukogu

    koguarv() {
        console.log("Raamatuid kokku: " + this.raamatud.length);
        return this.raamatud.length;
    }, //Kirjutab mitu raamatut raamatukogus. Neljas punkt raamatukogu

    parast2000() {
        let uued = this.raamatud.filter(raamat => raamat.aasta > 2000);
        console.log("Pärast 2000. aastat ilmunud raamatuid: " + uued.length);
        return uued.length;
    }, //Kuvab kõik raamatud, mille ilmumisaasta pärast 2000. Viies punkt raamatukogu

    autoriRaamatud(autor) {
        let leitud = this.raamatud.filter(raamat => raamat.autor === autor);
        let tekst = "";
        leitud.forEach(raamat => {
            console.log(autor + ": " + raamat.pealkiri + " (" + raamat.aasta + ")");
            tekst += raamat.pealkiri + " (" + raamat.aasta + ")<br>";
        });
        return tekst;
    } //Raamatute otsimine autori järgi. Kuues punkt raamatukogu
};

function naitaKirjeldus() {
    let vastus = document.getElementById("vastus");
    console.log(raamat.kirjeldus());
    vastus.innerHTML = raamat.kirjeldus();
}

function muudaAastat() {
    let vastus = document.getElementById("vastus2");
    let uusAasta = document.getElementById("uusAasta");
    raamat.muudaAasta(uusAasta.value);
    vastus.innerHTML = "Pärast aasta muutmist: " + raamat.kirjeldus();
}

function naitaRaamatud() {
    let vastus = document.getElementById("vastus3");
    console.log("Kõik raamatud:");
    vastus.innerHTML = raamatukogu.kuvaRaamatud();
}

function lisaUusRaamat() {
    let vastus = document.getElementById("vastus4");
    let pealkiri = document.getElementById("pealkiri");
    let autor = document.getElementById("autor");
    let aasta = document.getElementById("aasta");

    if (pealkiri.value == "" || autor.value == "" || aasta.value == "") {
        vastus.innerHTML = "Täida kõik väljad!";
    }
    else {
        raamatukogu.lisaRaamat(pealkiri.value, autor.value, aasta.value);
        vastus.innerHTML = "Lisatud raamat: " + pealkiri.value;
    }
}

function naitaKoguarv() {
    let vastus = document.getElementById("vastus5");
    vastus.innerHTML = "Raamatuid kokku: " + raamatukogu.koguarv();
}

function naitaParast2000() {
    let vastus = document.getElementById("vastus6");
    vastus.innerHTML = "Pärast 2000. aastat ilmunud raamatuid: " + raamatukogu.parast2000();
}

function otsiAutor() {
    let vastus = document.getElementById("vastus7");
    let autoriNimi = document.getElementById("autoriNimi");
    let tekst = raamatukogu.autoriRaamatud(autoriNimi.value);

    if (tekst == "") {
        vastus.innerHTML = "Selle autori raamatuid ei leitud";
    }
    else {
        vastus.innerHTML = tekst;
    }
}
