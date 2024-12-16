import './style.css'

const mediaQuery = window.matchMedia('(min-width: 1200px)');

function handleScreenSizeChange(event) {
    if (event.matches) {
        // console.log("Tamaño desktop")

        /* BOTON PARA VOLVER AL PRINCIPIO DE LA PAGINA - UBICADO EN LA PARTE INFERIOR DERECHA */
        document.getElementById('btn-para-arriba').addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        /* BOTON EDUCACION */
        document.getElementById('educacion').addEventListener('click', function() {
            window.scrollTo({ top: 1000, behavior: 'smooth' });
        });

        /* BOTON TECNOLOGIAS */
        document.getElementById('tecnologias').addEventListener('click', function() {
            window.scrollTo({ top: 1850, behavior: 'smooth' });
        });

        /* BOTON PROYECTOS */
        document.getElementById('proyectos').addEventListener('click', function() {
            window.scrollTo({ top: 2900, behavior: 'smooth' });
        });

        /* BOTON CONTACTO */
        document.getElementById('contacto').addEventListener('click', function() {
            window.scrollTo({ top: 5000, behavior: 'smooth' });
        });

    } else {
        // console.log("tamaño mobile")

        /* BOTON PARA VOLVER AL PRINCIPIO DE LA PAGINA - UBICADO EN LA PARTE INFERIOR DERECHA */
        document.getElementById('btn-para-arriba').addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        /* BOTON EDUCACION */
        document.getElementById('educacion').addEventListener('click', function() {
            window.scrollTo({ top: 800, behavior: 'smooth' });
        });

        /* BOTON TECNOLOGIAS */
        document.getElementById('tecnologias').addEventListener('click', function() {
            window.scrollTo({ top: 1800, behavior: 'smooth' });
        });

        /* BOTON PROYECTOS */
        document.getElementById('proyectos').addEventListener('click', function() {
            window.scrollTo({ top: 2700, behavior: 'smooth' });
        });

        /* BOTON CONTACTO */
        document.getElementById('contacto').addEventListener('click', function() {
            window.scrollTo({ top: 3700, behavior: 'smooth' });
        });
    }
}

handleScreenSizeChange(mediaQuery);

mediaQuery.addEventListener('change', handleScreenSizeChange);