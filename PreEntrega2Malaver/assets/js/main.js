const nombreCliente = prompt("Ingrese su nombre")

for(let final = 0; final <= 3; final++){
    const avisoCompra = prompt("Desea realizar una compra? \n- Si \n- No");

    if (avisoCompra.toLowerCase() ==="no"){
        break;

    }else if
        (avisoCompra.toLocaleLowerCase() === "si"){
        alert(`Bienvenido ${nombreCliente}, Porfavor sige el paso a paso`);
        
        const tipoCompra = parseInt(prompt("Ingresa el número del Id del tipo de compra deseas realizar? \n1   Paquetes de diseño \n2   Diseños Individulaes \n3   Contactar con un asesor de diseño"));
        
        if (tipoCompra === 1){
            const paquetes = [
                    { id: 1, nombre: "Marca Corporativa", contenido: "\n - Logo y aplicaciones \n - Tarjeta Corporativa \n - Membrete \n - Brand Guide", precio: 500},
                    { id: 2, nombre: "Diseño Web", contenido: "\n - Pagina principal \n - 3 Paginas secundarias \n - Formulario de contacto", precio: 800},
                    { id: 3, nombre: "Full Stack", contenido: "\n - Pagina Web 4 paginas \n - Formularios \n - Servicio Backend \n - Pagina es servidor HTTPS", precio: 1500},
                ];
                paquetes.forEach (item =>{
                    let mensaje =`
                    Id: ${item.id};
                    Nombre: ${item.nombre};
                    Contenido: ${item.contenido};
                    Precio: ${item.precio}
                    `;

                    alert(mensaje)
                });
            
            let compra = parseInt(prompt("Que paquete deseas comprar? \n- Id 1 \n- Id 2 \n- Id 3"))
            for (const paquete of paquetes){
                if (paquete.id === compra)
                alert(`${nombreCliente}, acabas de comprar el paquete ${paquete.nombre} por el valor de $${paquete.precio}`)
            }            

        }else if
            (tipoCompra === 2){
                const disenos = [
                    { id: 1, nombre: "Logo", precio: 200},
                    { id: 2, nombre: "Pagina Web", precio: 550},
                    { id: 3, nombre: "illustración", precio: 250},
                    { id: 4, nombre: "Membrete Corporativo", precio: 120},
                    { id: 5, nombre: "Tarjetas Corporativas", precio: 350},
                ];
                disenos.forEach (item =>{
                    let mensaje =`
                    Id: ${item.id};
                    Nombre: ${item.nombre};
                    Contenido: ${item.contenido};
                    Precio: ${item.precio}
                    `;

                    alert(mensaje)
                });

            let compra = parseInt(prompt("Que diseños deseas comprar? \n- Id 1 \n- Id 2 \n- Id 3 \n- Id 4 \n- Id 5"));
            for (const diseno of disenos){
                if (diseno.id === compra)
                alert(`${nombreCliente}, acabas de comprar el paquete ${diseno.nombre} por el valor de $${diseno.precio}`)
            }

        break;

        }else{
            alert(contacto = `\n Andres Camilo Malaver \n +57 315 3766097 \n andres061112@gmail.com`)

            break;
        }

    }else{
        (avisoCompra != "si" && "no")
        alert(`${nombreCliente}, hiciste una selección incorrecta, intentalo nuevamente`);        
    }

}
alert((`${nombreCliente} Gracias por su visita, hasta luego`))