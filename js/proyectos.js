
const proyectos = [
    {
        img: "img/barbershop.png",
        titulo: "Brother Barbershop",
        descri: "Sitio web desarrollado para una barbería",
        url: "https://betalabpycorp.github.io/brothersbarbershop/index.html"
    },
    {
        img: "img/patitas.png",
        titulo: "Patitas Felices",
        descri: "Sitio web desarrollado para una veterinaria",
        url: "https://estefaniaarce711-tech.github.io/Veterinaria/index.html"
    },
    {
        img: "img/gym.png",
        titulo: "Luks Training",
        descri: "Sitio web desarrollado para un gimnasio",
        url: "https://akalukspy-sudo.github.io/Lukss_training/index.html"
    },
    {
        img: "img/aura.png",
        titulo: "Aura",
        descri: "Sitio web desarrollado para Aura",
        url: "https://akalukspy-sudo.github.io/Aura/"
    },
    {
        img: "img/farma.png",
        titulo: "Farma Vital",
        descri: "Sitio web desarrollado para una farmacia",
        url: "https://betalabpycorp.github.io/farmavital/"
    },
    {
        img: "img/games.png",
        titulo: "Betalab Games PY",
        descri: "Sitio web desarrollado para una tienda gamer",
        url: "https://betalabwebstudio.github.io/betalabgamespy/"
    }
];


    

const contenedorProyecto = document.getElementById("contenedor-proyectos");

contenedorProyecto.innerHTML = "";

proyectos.forEach((proyecto) => {
    const item = document.createElement("div");
    item.className = "item_proyectos";

    item.innerHTML = `
        <img class="img_proyecto" src="${proyecto.img}" alt="${proyecto.titulo}">
        <h2>${proyecto.titulo}</h2>
        <button class="btn-visitar">Visitar</button>
    `;

    const boton = item.querySelector(".btn-visitar");

    boton.addEventListener("click", () => {
        window.open(proyecto.url, "_blank", "noopener,noreferrer");
    });

    contenedorProyecto.appendChild(item);
});

console.log("Proyectos cargados correctamente");