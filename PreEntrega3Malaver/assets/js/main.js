const paquetes = [
    { id: 1, nombre: "Marca Corporativa", contenido: "\n - Logo y aplicaciones \n - Tarjeta Corporativa \n - Membrete \n - Brand Guide", precio: 500},
    { id: 2, nombre: "Diseño Web", contenido: "\n - Pagina principal \n - 3 Paginas secundarias \n - Formulario de contacto", precio: 800},
    { id: 3, nombre: "Full Stack", contenido: "\n - Pagina Web 4 paginas \n - Formularios \n - Servicio Backend \n - Pagina es servidor HTTPS", precio: 1500},
]

const disenos = [
    { id: 1, nombre: "Logo", precio: 200},
    { id: 2, nombre: "Pagina Web", precio: 550},
    { id: 3, nombre: "illustración", precio: 250},
    { id: 4, nombre: "Membrete Corporativo", precio: 120},
    { id: 5, nombre: "Tarjetas Corporativas", precio: 350},
]


let stepData = localStorage.getItem("step")
let step = ( stepData == null ) ? 0 : parseInt(stepData);

let nombreUsuario = document.querySelector("#nombreUsuario")

let bntUser = document.querySelector(".btnUser")
let btnUserBack = document.querySelector(".btnUserBack")


bntUser.addEventListener("click" , (e) => {
    step++
    localStorage.setItem("step", step)
    
    showStep(step)

})

btnUserBack.addEventListener("click" , (e) => {
    step--
    showStep(step)
    
    localStorage.setItem("step", step)
})



let fillPackage = () => {
    let step2 = document.querySelector(".step2")
    step2.innerHTML = paquetes.map( producto => 
        `
            <div>paquetes </div>
            <div>Id: ${producto.id} </div>
            <div>Nombre: ${producto.nombre} </div>
            <div>Contenido: ${producto.contenido} </div>
            <div>Precio: ${producto.precio} </div>
            <button class='btn btn-add' data-type='package' data-data='${JSON.stringify(producto)}'>Agregar </button>
        `
    ).join("") + 
    disenos.map( producto => 
        `
            <div>disenos </div>
            <div>Id: ${producto.id} </div>
            <div>Nombre: ${producto.nombre} </div>
            <div>Precio: ${producto.precio} </div>
            <button class='btn btn-add' data-type='design' data-data='${JSON.stringify(producto)}'>Agregar </button>
        `
    ).join("")

    callAddButtonListener()
}

let showStep = (step) => {
    SwitchStep();
    document.querySelectorAll(".container").forEach ( container => {
        container.classList.remove("active")
    }) 
    console.log(`.container:nth-child(${(step + 1)})`)
    document.querySelector(`.container:nth-child(${(step + 1)})`).classList.add("active")
}

let SwitchStep = () => {
    
    switch (step) {
        case 0:
        break;
        
        case 1:
            localStorage.setItem("nombreUsuario", nombreUsuario.value)
            fillPackage()
        break;
        
        case 2:
            
            fillShop()
        break;
        
        case 3:
            
            fillShop()
        break;
    }
    
}

let callAddButtonListener = () => {
    document.querySelectorAll(".btn-add").forEach( e => {
        e.addEventListener("click" , (e) => {

            localStorage.setItem( "ProductSelected" ,  e.target.dataset.data )
            step++;
            showStep(step)            
            console.log( step )
            
        })
    })
}


let fillShop = () => {
    let productSelected = JSON.parse(localStorage.getItem( "ProductSelected" ))
    let step3 = document.querySelector(".step3")
    step3.innerHTML = 
        `
            <div>Id: ${productSelected.id} </div>
            <div>Nombre: ${productSelected.nombre} </div>
            <div>Precio: ${productSelected.precio} </div>
        `
}

showStep(step)