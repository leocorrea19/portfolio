import './style.css'

const mediaQuery = [window.matchMedia('(min-width: 1200px)'), window.matchMedia('(min-width: 768px)')];

function handleScreenSizeChange(event) {
    event.forEach(elemento => {
        
        if (elemento.media === '(min-width: 1200px)' && elemento.matches === true) {
            console.log("Tamaño 1200px o mas")
    
            /* BOTON PARA VOLVER AL PRINCIPIO DE LA PAGINA - UBICADO EN LA PARTE INFERIOR DERECHA */
            document.getElementById('btn-para-arriba').addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
    
            /* BOTON EDUCACION */
            document.getElementById('educacion').addEventListener('click', function() {
                window.scrollTo({ top: 1200, behavior: 'smooth' });
            });
    
            /* BOTON TECNOLOGIAS */
            document.getElementById('tecnologias').addEventListener('click', function() {
                window.scrollTo({ top: 2260, behavior: 'smooth' });
            });
    
            /* BOTON PROYECTOS */
            document.getElementById('proyectos').addEventListener('click', function() {
                window.scrollTo({ top: 3350, behavior: 'smooth' });
            });
    
            /* BOTON CONTACTO */
            document.getElementById('contacto').addEventListener('click', function() {
                window.scrollTo({ top: 50000, behavior: 'smooth' });
            });
    
        }
        
        else if(elemento.media === '(min-width: 768px)' && elemento.matches === true) {
            console.log("Tamaño 768px o mas")
        }
        
        else {
            console.log("tamaño menor a 768px")
    
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
    });
    
}

handleScreenSizeChange(mediaQuery);

console.log(mediaQuery)

mediaQuery.addEventListener('change', handleScreenSizeChange);