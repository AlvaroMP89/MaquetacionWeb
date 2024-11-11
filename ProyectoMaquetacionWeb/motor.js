document.addEventListener('DOMContentLoaded', function() {

     // ELEMENTO PRINCIPAL DE LA PÁGINA
    const paginaPrincipal = document.createElement('div');  // Crea un elemento <div> que será el contenedor principal
    paginaPrincipal.className = 'pagina-principal';  // Le asigna la clase 'pagina-principal' para estilos


    // SECCIÓN DEL LOGO
    const logo = document.createElement('div'); // Crea un <div> para el logo
    logo.className = 'logo'; // Le asigna la clase 'logo'
    logo.innerHTML = ` <img src="img/logo-azul-marino-viajes.jpg" alt="Logo" class="logo">`; // Agrega la imagen del logo usando HTML
    paginaPrincipal.appendChild(logo); // Añade el logo al contenedor principal

    // SECCIÓN DE NAVEGACIÓN
    const navegacion = document.createElement('div');// Crea un <div> para la barra de navegación
    navegacion.className = 'navegacion-seccion'; // Le asigna la clase 'navegacion-seccion' para estilos
    navegacion.innerHTML = `
        <nav>
            <ul class="navegacion">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    `;
    paginaPrincipal.appendChild(navegacion); //Añade  la navegación al contenedor principal


    // SECCIÓN PRINCIPAL DE CONTENIDO
    const contenidoPrincipal = document.createElement('div'); //Crea  un <div> para el contenido principal

    contenidoPrincipal.className = 'contenido-principal'; //Le asigna la clase 'contenido-principal'
    contenidoPrincipal.innerHTML = `
        <div class="imagen-contenido">
            <img src="img/articulos-808572.jpg" alt="Monumento" class="imagen-principal">
            <p class="titulo-seccion">Este es el titular de la sección 2</p>
        </div>
        <div class="texto-contenido">
            <h2>Titular del contenido</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sequi laborum quas architecto vitae quo reprehenderit aperiam id, odit accusantium! Illum fugit consectetur sit, enim corporis incidunt! Eius, itaque nemo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sequi laborum quas architecto vitae quo reprehenderit aperiam id, odit accusantium! Illum fugit consectetur sit, enim corporis incidunt! Eius, itaque nemo.</p>
            <button class="boton-ver-mas">Ver más</button>
        </div>
    `;
    paginaPrincipal.appendChild(contenidoPrincipal); // Añade el contenido principal al contenedor principal


    // SECCIÓN DE LA IMAGEN CENTRAL
    const imagenCentral = document.createElement('div'); // Crea  un <div> para la imagen central
    imagenCentral.className = 'imagen-central';  // Le asigna la clase 'imagen-central'

    imagenCentral.innerHTML = `
        <img src="img/foto6.jpg" alt="Imagen Central" class="imagen-central" style="width: 100%;">
    `;
    paginaPrincipal.appendChild(imagenCentral); // Añade la imagen central al contenedor principal


    // SECCIÓN DE IMÁGENES AL PIE
    const pieImagenes = document.createElement('div');  // Crea  un <div> para las imágenes al pie

    pieImagenes.className = 'pie-imagenes';  // Le asigna la clase 'pie-imagenes'

    const rutasImagenes = ['img/Viajes_Donde_Viajes_3.jpg','img/kayak-valencia.jpeg','img/600x400_viajes-lujo-FOTO-1-White-Dessert-experiencia-Polo-Norte-en-jet-privaso.jpg'];  // Arreglo de rutas de imágenes


    rutasImagenes.forEach(src => {   // Recorre el arreglo de rutas de imágenes

        const imagenPie = document.createElement('div');   // Crea  un <div> para cada imagen al pie

        imagenPie.className = 'imagen-pie';   // Le asigna la clase 'imagen-pie'
        


        const img = document.createElement('img');   // Crea  un <img> para cada imagen al pie

        img.src = src;    // Establece la ruta de la imagen

        img.className = 'imagen-pie-src'; //  Le asigna la clase 'imagen-pie-src'

        imagenPie.appendChild(img); //  Añade la imagen al contenedor de la imagen al pie


        const texto = document.createElement('p'); //  Crea un <p> para cada imagen al pie

        texto.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'; //  Establece el texto del <p>

        imagenPie.appendChild(texto); // Añade el texto al contenedor de la imagen pie 

        const botonCompra = document.createElement('button'); // Crea un boton para comprar 
        botonCompra.textContent = 'Comprar'; // Texto del boton
        botonCompra.className = 'boton-comprar';  // Le asigna la clase 'boton-comprar' para estilos
        imagenPie.appendChild(botonCompra); // Añade el botón al <div> imagenPie

        pieImagenes.appendChild(imagenPie); // Añade el <div> imagenPie a la sección de pieImagenes
    });

    paginaPrincipal.appendChild(pieImagenes);  // Añade la sección de imágenes al pie al contenedor principal

    // AÑADIR EL ELEMENTO PRINCIPAL AL BODY
    document.body.prepend(paginaPrincipal);  // Añade el contenedor principal al inicio del <body>
});
