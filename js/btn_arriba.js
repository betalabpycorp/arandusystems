/*boton arriba */

const btnArriba = document.getElementById("btn-arriba");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnArriba.classList.add("visible");
    } else {
        btnArriba.classList.remove("visible");
    }
});

btnArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/*animar */

// Animar elementos cuando aparecen en pantalla
const elementosAnimados = document.querySelectorAll(".animar");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.15
});

elementosAnimados.forEach((elemento) => {
    observador.observe(elemento);
});