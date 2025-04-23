import './style.css'

const mediaQuery = [window.matchMedia('(min-width: 1200px)'), window.matchMedia('(min-width: 768px)')];

function handleScreenSizeChange(event) {
    for (const elemento of event) {
        debugger
        if (elemento.media === '(min-width: 1200px)' && elemento.matches === true) {
            // console.log("Tamaño 1200px o mas")
    
            /* BOTON PARA VOLVER AL PRINCIPIO DE LA PAGINA - UBICADO EN LA PARTE INFERIOR DERECHA */
            document.getElementById('btn-para-arriba').addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
    
            /* BOTON EDUCACION */
            document.getElementById('educacion').addEventListener('click', function() {
                window.scrollTo({ top: 880, behavior: 'smooth' });
            });
    
            /* BOTON TECNOLOGIAS */
            document.getElementById('tecnologias').addEventListener('click', function() {
                window.scrollTo({ top: 1650, behavior: 'smooth' });
            });
    
            /* BOTON PROYECTOS */
            document.getElementById('proyectos').addEventListener('click', function() {
                window.scrollTo({ top: 2550, behavior: 'smooth' });
            });
    
            /* BOTON CONTACTO */
            document.getElementById('contacto').addEventListener('click', function() {
                window.scrollTo({ top: 50000, behavior: 'smooth' });
            });
            break
    
        }
        else if(elemento.media === '(min-width: 768px)' && elemento.matches === true) {
            console.log("Tamaño 768px o mas")
            debugger
             /* BOTON PARA VOLVER AL PRINCIPIO DE LA PAGINA - UBICADO EN LA PARTE INFERIOR DERECHA */
            document.getElementById('btn-para-arriba').addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
    
            /* BOTON EDUCACION */
            document.getElementById('educacion').addEventListener('click', function() {
                window.scrollTo({ top: 870, behavior: 'smooth' });
            });
    
            /* BOTON TECNOLOGIAS */
            document.getElementById('tecnologias').addEventListener('click', function() {
                window.scrollTo({ top: 1900, behavior: 'smooth' });
            });
    
            /* BOTON PROYECTOS */
            document.getElementById('proyectos').addEventListener('click', function() {
                window.scrollTo({ top: 3000, behavior: 'smooth' });
            });
    
            /* BOTON CONTACTO */
            document.getElementById('contacto').addEventListener('click', function() {
                window.scrollTo({ top: 3700, behavior: 'smooth' });
            });
            break
        }
        
        else {
            console.log("tamaño menor a 768px")
            debugger
            /* BOTON PARA VOLVER AL PRINCIPIO DE LA PAGINA - UBICADO EN LA PARTE INFERIOR DERECHA */
            document.getElementById('btn-para-arriba').addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
    
            /* BOTON EDUCACION */
            document.getElementById('educacion').addEventListener('click', function() {
                window.scrollTo({ top: 690, behavior: 'smooth' });
            });
    
            /* BOTON TECNOLOGIAS */
            document.getElementById('tecnologias').addEventListener('click', function() {
                window.scrollTo({ top: 1420, behavior: 'smooth' });
            });
    
            /* BOTON PROYECTOS */
            document.getElementById('proyectos').addEventListener('click', function() {
                window.scrollTo({ top: 2110, behavior: 'smooth' });
            });
    
            /* BOTON CONTACTO */
            document.getElementById('contacto').addEventListener('click', function() {
                window.scrollTo({ top: 3700, behavior: 'smooth' });
            });
            
        }
    }
}

handleScreenSizeChange(mediaQuery);

console.log(mediaQuery)

// mediaQuery.addEventListener('change', handleScreenSizeChange);