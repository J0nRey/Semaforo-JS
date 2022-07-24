let etapa = ""

let control = document.querySelectorAll(".control")

control.forEach( control => {

    control.addEventListener("click", event => {
        let etapaSeleccionada = event.target.value
        etapa = etapaSeleccionada

        console.log( etapa )

        if(etapa === "siga"){
            document.querySelector(".luz").classList.add("siga")
        } else if(etapa === "precaucion"){
            document.querySelector(".luz").classList.add("precaucion")
        }else if(etapa === "alto"){
            document.querySelector(".luz").classList.add("alto")
        }


    })
})
