import './style.css'
window.addEventListener('DOMContentLoaded', function () {

    const mediaQuery = [window.matchMedia('(min-width: 1200px)'), window.matchMedia('(min-width: 768px)')];

    function handleScreenSizeChange(event) {
        for (const elemento of event) {
            
            if (elemento.media === '(min-width: 1200px)' && elemento.matches === true) {
                // console.log("Tamaño 1200px o mas")
        
                /* BOTON PARA VOLVER AL PRINCIPIO DE LA PAGINA - UBICADO EN LA PARTE INFERIOR DERECHA */
                document.getElementById('btn-para-arriba').addEventListener('click', function() {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
        
                /* BOTON EDUCACION */
                document.getElementById('educacion').addEventListener('click', function() {
                    window.scrollTo({ top: 950, behavior: 'smooth' });
                });
        
                /* BOTON TECNOLOGIAS */
                document.getElementById('tecnologias').addEventListener('click', function() {
                    window.scrollTo({ top: 1720, behavior: 'smooth' });
                });
        
                /* BOTON CERTIFICADOS */
                document.getElementById('certificados').addEventListener('click', function() {
                    window.scrollTo({ top: 2550, behavior: 'smooth' });
                });

                /* BOTON PROYECTOS */
                document.getElementById('proyectos').addEventListener('click', function() {
                    window.scrollTo({ top: 3500, behavior: 'smooth' });
                });
        
                /* BOTON CONTACTO */
                document.getElementById('contacto').addEventListener('click', function() {
                    window.scrollTo({ top: 50000, behavior: 'smooth' });
                });
                break
        
            }
            else if(elemento.media === '(min-width: 768px)' && elemento.matches === true) {
                // console.log("Tamaño 768px o mas")
                
                /* BOTON PARA VOLVER AL PRINCIPIO DE LA PAGINA - UBICADO EN LA PARTE INFERIOR DERECHA */
                document.getElementById('btn-para-arriba').addEventListener('click', function() {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
        
                /* BOTON EDUCACION */
                document.getElementById('educacion').addEventListener('click', function() {
                    window.scrollTo({ top: 970, behavior: 'smooth' });
                });
        
                /* BOTON TECNOLOGIAS */
                document.getElementById('tecnologias').addEventListener('click', function() {
                    window.scrollTo({ top: 2000, behavior: 'smooth' });
                });
                
                /* BOTON CERTIFICADOS */
                document.getElementById('certificados').addEventListener('click', function() {
                    window.scrollTo({ top: 3000, behavior: 'smooth' });
                });
        
                /* BOTON PROYECTOS */
                document.getElementById('proyectos').addEventListener('click', function() {
                    window.scrollTo({ top: 4000, behavior: 'smooth' });
                });
        
                /* BOTON CONTACTO */
                document.getElementById('contacto').addEventListener('click', function() {
                    window.scrollTo({ top: 9000, behavior: 'smooth' });
                });
                break
            }
            
            else {
                // console.log("tamaño menor a 768px")
                
                /* BOTON PARA VOLVER AL PRINCIPIO DE LA PAGINA - UBICADO EN LA PARTE INFERIOR DERECHA */
                document.getElementById('btn-para-arriba').addEventListener('click', function() {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
        
                /* BOTON EDUCACION */
                document.getElementById('educacion').addEventListener('click', function() {
                    window.scrollTo({ top: 750, behavior: 'smooth' });
                });
        
                /* BOTON TECNOLOGIAS */
                document.getElementById('tecnologias').addEventListener('click', function() {
                    window.scrollTo({ top: 1450, behavior: 'smooth' });
                });
                
                /* BOTON CERTIFICADOS */
                document.getElementById('certificados').addEventListener('click', function() {
                    window.scrollTo({ top: 2140, behavior: 'smooth' });
                });
        
                /* BOTON PROYECTOS */
                document.getElementById('proyectos').addEventListener('click', function() {
                    window.scrollTo({ top: 2750, behavior: 'smooth' });
                });
        
                /* BOTON CONTACTO */
                document.getElementById('contacto').addEventListener('click', function() {
                    window.scrollTo({ top: 3700, behavior: 'smooth' });
                });
                
            }
        }
    }

    handleScreenSizeChange(mediaQuery);

    // console.log(mediaQuery)

    // mediaQuery.addEventListener('change', handleScreenSizeChange);

    // ! carrusel certificados
    const arrayCertificados = [
        {id: 1, ruta: "/image/certificados/Certificado-Desarrollo-Web-con-HTML.webp", texto:"Certificado desarrollo web con HTML"},
        {id: 2, ruta: "/image/certificados/Certificado-Maquetador-Web-Avanzado.webp", texto:"Certificado maquetador web avanzado"},
        {id: 3, ruta: "/image/certificados/Certificado-Javascript-desde-cero.webp", texto:"Certificado JavaScript desde cero"},
        {id: 4, ruta: "/image/certificados/Certificado-Javascript-Avanzado.webp", texto:"Certificado JavaScript avanzado"},
        {id: 5, ruta: "/image/certificados/Certificado-Introducción-Paradigma-de-Objetos.webp", texto:"Certificado introducción a paradigma de objetos"},
        {id: 6, ruta: "/image/certificados/Certificado-React.JS-Developer.webp", texto:"Certificado React.js"},
        {id: 7, ruta: "/image/certificados/Certificado-Angular-13.webp", texto:"Certificado Angular"},
        {id: 8, ruta: "/image/certificados/Certificado-NodeJS-Backend.webp", texto:"Certificado Node.js"},
        {id: 9, ruta: "/image/certificados/Certificado-Introducción-MongoDB.webp", texto:"Certificado introducción MongoDB"},
        {id: 10, ruta: "/image/certificados/Certificado-Git.webp", texto:"Certificado GIT"}
    ]
    // console.log(arrayCertificados)
    
    const divSlider = document.querySelector('#slider')

    arrayCertificados.forEach(function(certificado) {
        
        // ! Crea dinamicamente las etiquetas
        const divSliderSection = document.createElement('div')
        const imgTag = document.createElement('img')

        // console.log(divSliderSection)
        // console.log(imgTag)

        // ! Le asigno la info del objeto a las etiquetas
        imgTag.src = certificado.ruta
        imgTag.alt = certificado.texto

        divSliderSection.classList.add('slider-section')
        // console.log(divSliderSection)

        // ! Y agrego las imagenes al elemento contenedor (slider-section)
        divSliderSection.appendChild(imgTag)

        // ! A nuestro contenedor con el ID 'slider' le agrego cada una de las imagenes
        divSlider.appendChild(divSliderSection)
    })

    // ! Agregar eventos al carrusel de certificados

    const btnLeft = document.querySelector('#btn-left')
    const btnRight = document.querySelector('#btn-right')
    // console.log(btnLeft, btnRight)

    const sliderSection = document.querySelectorAll('.slider-section')
    // console.log(sliderSection) // NodeList -> []

    let operacion = 0
    let widthImg = 100 / sliderSection.length
    let counter = 0
    // console.log(widthImg)

    function moverALaDerecha() {
        
        if (counter >= sliderSection.length-1) {
            counter = 0
            operacion = 0
            divSlider.style.transform = `translate(-${operacion}%)`

        } else {
            counter++
            operacion = operacion + widthImg
            divSlider.style.transform = `translate(-${operacion}%)`
            divSlider.style.transition = 'transform ease 1s'
        }
    }

    function moverALaIzquierda() {
        counter--
        if (counter < 0) {
            counter = sliderSection.length-1
            operacion = widthImg * (sliderSection.length-1)
            divSlider.style.transform = `translate(-${operacion}%)`
        } 
        
        else if (counter === 0) {
            operacion = 0
            divSlider.style.transform = `translate(-${operacion}%)`
            divSlider.style.transition = 'transform ease 1s'
        }
    
        else {
            operacion = operacion - widthImg
            divSlider.style.transform = `translate(-${operacion}%)`
            divSlider.style.transition = 'transform ease 1s'
        }}
        
    btnLeft.addEventListener('click', moverALaIzquierda)
    btnRight.addEventListener('click', moverALaDerecha)
})