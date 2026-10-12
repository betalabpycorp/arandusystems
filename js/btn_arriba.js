document.addEventListener("DOMContentLoaded", () => {
    const btnArriba = document.getElementById("btn-arriba");

    if (!btnArriba) return;

    const controlarBoton = () => {
        const scrollActual = window.scrollY ||
            document.documentElement.scrollTop;

        btnArriba.classList.toggle("visible", scrollActual > 300);
    };

    window.addEventListener("scroll", controlarBoton, {
        passive: true
    });

    btnArriba.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    controlarBoton();
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