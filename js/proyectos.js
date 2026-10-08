const proyectos = [
    {
        img: "img/barbershop.png",
        titulo: "Brother barbershop",
        descri: "Sitio web desarrollado para una barbería"
    },

    {
        img: "img/barbershop.png",
        titulo: "Brother barbershop",
        descri: "Sitio web desarrollado para una barbería"
    },
    
    {
        img: "img/barbershop.png",
        titulo: "Brother barbershop",
        descri: "Sitio web desarrollado para una barbería"
    },

    {
        img: "img/barbershop.png",
        titulo: "Brother barbershop",
        descri: "Sitio web desarrollado para una barbería"
    },

    {
        img: "img/barbershop.png",
        titulo: "Brother barbershop",
        descri: "Sitio web desarrollado para una barbería"
    },

    {
        img: "img/barbershop.png",
        titulo: "Brother barbershop",
        descri: "Sitio web desarrollado para una barbería"
    },
];

    const contenedorProyecto = document.getElementById('contenedor-proyectos');

    contenedorProyecto.innerHTML = "";

    proyectos.forEach((proyecto) =>{
        let item = document.createElement('div');
        item.className = "item_proyectos";

        item.innerHTML = `

            <img class="img_proyecto" src="${proyecto.img}">
            <h2>${proyecto.titulo}</h2>
            <button>Visitar</button>
        
        `;


        contenedorProyecto.appendChild(item);
    });

        console.log('Servicios cargados correctamente')