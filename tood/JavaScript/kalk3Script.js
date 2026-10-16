function arvuta_suurus(){
    let valik = document.getElementsByName("valik2")
    let kujund = document.getElementById("kujund")
    let vastus = document.getElementById("vastus3")
    let a = document.getElementsByClassName("a")
    let b = document.getElementsByClassName("b")
    let c = document.getElementsByClassName("c")

    const pi = Math.PI

    for (let i = 0; i < valik.length; i++){
        if (valik[i].checked){
            if (valik[i].value == "pindala"){
                
                for (let u = 0; u < c.length; u++){
                    b[u].hidden = false
                    c[u].hidden = true
                }

                a[0].innerHTML = "A: "
                b[0].innerHTML = "B: "
                c[0].innerHTML = "C: "

                if(kujund.selectedIndex === 1){
                    a[0].innerHTML = "r: "
                    for (let u = 0; u < b.length; u++){
                        b[u].hidden = true
                    }
                    vastus.innerHTML = "Ringi pindala on: " + (pi * a[1].value).toFixed(2) + " meetrit²"
                }
                else if (kujund.selectedIndex === 2){
                    a[0].innerHTML = "A: "
                    b[0].innerHTML = "B: "
                    for (let u = 0; u < b.length; u++){
                        b[u].hidden = true
                    }
                    vastus.innerHTML = "Ruutu pindala on: " + a[1].value ** 2 + " meetrit²"
                }
                else if(kujund.selectedIndex === 3){
                    for (let u = 0; u < c.length; u++){
                        b[u].hidden = false
                        c[u].hidden = true
                    }

                    a[0].innerHTML = "A: "
                    b[0].innerHTML = "B: "
                    c[0].innerHTML = "C: "
                    
                    vastus.innerHTML = "Kolmnurgi pindala on: " + (a[1].value * b[1].value) / 2 + " meetrit²"
                }
                else{
                    b[0].innerHTML = "B: "
                    for (let u = 0; u < b.length; u++){
                        b[u].hidden = false
                    }
                    vastus.innerHTML = "Valige kujund"
                }
            }
            else if (valik[i].value == "ruumala"){
                
                for (let u = 0; u < c.length; u++){
                    a[u].hidden = false
                    b[u].hidden = false                    
                    c[u].hidden = false
                }

                a[0].innerHTML = "A: "
                b[0].innerHTML = "B: "
                c[0].innerHTML = "C: "
                
                if(kujund.selectedIndex === 1){
                    for (let u = 0; u < c.length; u++){
                    c[u].hidden = true
                    }
                    a[0].innerHTML = "r: "
                    b[0].innerHTML = "H: "

                    vastus.innerHTML = "Silindri ruumala on: " + a[1].value ** 2 * b[1].value + " meetrit³"
                }
                else if (kujund.selectedIndex === 2){
                    for (let u = 0; u < c.length; u++){
                    a[u].hidden = false
                    b[u].hidden = true                    
                    c[u].hidden = true
                }
                vastus.innerHTML = "Ruutu ruumala on: " + a[1].value ** 3 + " meetrit³"
                }
                else if(kujund.selectedIndex === 3){
                    for (let u = 0; u < c.length; u++){
                        a[u].hidden = false
                        b[u].hidden = false                    
                        c[u].hidden = false
                    }

                    a[0].innerHTML = "A: "
                    b[0].innerHTML = "h: "
                    c[0].innerHTML = "H: "

                    vastus.innerHTML = "Kolmnurgi ruumala on: " + ((a[1].value * b[1].value) / 2) * c[1].value + " meetrit³"
                }
                else{
                    for (let u = 0; u < c.length; u++){
                    a[u].hidden = false
                    b[u].hidden = false                    
                    c[u].hidden = false
                    }

                    a[0].innerHTML = "A: "
                    b[0].innerHTML = "B: "
                    c[0].innerHTML = "C: "

                    vastus.innerHTML = "Valige kujund"
                }
            }
            else{
                vastus.innerHTML = "Vali ühiku - kas pindala või ruumala!"
            }
        }
    }
}