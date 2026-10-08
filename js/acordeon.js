const preguntas = [
    {
        pregunta: "¿Qué servicios ofrecen?",
        respuesta: "Ofrecemos páginas web, sistemas de gestión, aplicaciones web y bases de datos."
    },

    {
        pregunta: "¿Cuánto cuesta una página web?",
        respuesta: "El precio depende del tipo de página y las funcionalidades que necesite el proyecto."
    },

    {
        pregunta: "¿Trabajan con empresas y emprendedores?",
        respuesta: "Sí, desarrollamos soluciones digitales para empresas, negocios y emprendedores."
    },

    {
        pregunta: "¿Puedo solicitar un sistema personalizado?",
        respuesta: "Sí, podemos desarrollar un sistema adaptado a las necesidades específicas de tu negocio."
    }
];

const contenedorPreguntas = document.getElementById("faq-contenedor");

preguntas.forEach((item) => {

    const elemento = document.createElement("div");

    elemento.className = "faq-item";

    elemento.innerHTML = `
        <button class="faq-pregunta">
            ${item.pregunta}
            <span>+</span>
        </button>

        <div class="faq-respuesta">
            <p>${item.respuesta}</p>
        </div>
    `;

    contenedorPreguntas.appendChild(elemento);
});


const botones = document.querySelectorAll(".faq-pregunta");

botones.forEach((boton) => {

    boton.addEventListener("click", () => {

        const item = boton.parentElement;

        item.classList.toggle("active");

    });

});