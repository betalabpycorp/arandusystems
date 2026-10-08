const servicios = [
    {
        img: "img/sitioweb.png",
        titulo: "Páginas Web",
        descri: "Sitios web profesionales <br> Landing pages y páginas empresariales"
    },

    {
        img: "img/sistema.png",
        titulo: "Sistemas de Gestión",
        descri: "Sistemas a medida <br> Ventas, inventario y administración"
    },

    {
        img: "img/cell.png",
        titulo: "Aplicaciones Web",
        descri: "Aplicaciones modernas <br> Soluciones digitales para tu negocio"
    },

    {
        img: "img/bd.png",
        titulo: "Bases de Datos",
        descri: "Diseño y gestión de datos <br> PostgreSQL, MySQL y más"
    }
];

    const contenedor = document.getElementById('contenedor-servicios');

    contenedor.innerHTML = "";

    servicios.forEach((servicio) =>{
        let item = document.createElement('div');
        item.className = "item";

        item.innerHTML = `

            <img class="icono" src="${servicio.img}">
            <h2>${servicio.titulo}</h2>
            <p>${servicio.descri}</p>
            <button>Ver más</button>
        
        `;


        contenedor.appendChild(item);
    });

        console.log('Servicios cargados correctamente')