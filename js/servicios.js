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
const contenedor = document.getElementById("contenedor-servicios");

contenedor.innerHTML = "";

servicios.forEach((servicio) => {
    let item = document.createElement("div");
    item.className = "item";

    item.innerHTML = `
        <img class="icono" src="${servicio.img}" alt="${servicio.titulo}">
        <h2>${servicio.titulo}</h2>
        <p>${servicio.descri}</p>
        <button class="btn-servicio">Ver más</button>
    `;

    const boton = item.querySelector(".btn-servicio");

    boton.addEventListener("click", () => {
        const numero = "595993574822";
        const mensaje = `Hola, quiero cotizar un proyecto de ${servicio.titulo}.`;
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank", "noopener,noreferrer");
    });

    contenedor.appendChild(item);
});

console.log("Servicios cargados correctamente");



const btnCotizar = document.getElementById("btn-cotizar");

btnCotizar.addEventListener("click", (e) => {
    e.preventDefault();

    const numero = "595993574822";
    const mensaje = "Hola, quiero cotizar un proyecto.";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank", "noopener,noreferrer");
});


const btnservicios = document.querySelectorAll(".btnservicio");

btnservicios.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();

        const numero = "595993574822";
        const servicio = boton.textContent.trim();
        const mensaje = `Hola, quiero cotizar un proyecto de ${servicio}.`;

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank", "noopener,noreferrer");
    });
});

