// Simulated JSON Data
const mediaData = [
    {
        id: 1,
        tipo: 'video',
        titulo: 'Historias de mi tierra: Mundos Paralelos',
        autor: 'APUA Producciones',
        url: 'https://www.youtube.com/embed/ip6DYZ_-8oM', // Embed de YouTube correcto
        descripcion: 'Una mirada única sobre el conflicto armado, liderada por dos mujeres sobrevivientes de los peores eventos de la historia de Colombia, desde lados opuestos del confrontamiento. Estos mundos paralelos nos muestran el valor que se requiere para seguir viviendo sin heredar los odios de una guerra ajena.',
        fecha: '2021'
    },
      {
        id: 2,
        tipo: 'video',
        titulo: 'Trailer: Huellas del pasado, mentes del presente',
        autor: 'APUA Producciones',
        url: 'https://www.youtube.com/embed/h-pfCRKtdhs', // Embed de YouTube correcto   
        descripcion: 'De la voz de tres generaciones, esta historia nos cuenta la experiencia de vivir en Mitú, Vaupés durante los episodios más duros de la historia del país. Tres historias de vida que nos enseñan la resiliencia de una comunidad que no deja que las huellas del pasado determinen su presente.',
        fecha: '2021'
    },
    {
        id: 3,
        tipo: 'video',
        titulo: 'Historias en Kilómetros',
        autor: 'APUA Producciones',
        url: 'https://www.youtube.com/embed/xs0uvPMsN7Q', // Embed de YouTube correcto
        descripcion: 'Serie documental de siete episodios que retrata las luchas y resistencias culturales frente al conflicto armado colombiano. A través de diversas expresiones como la música, la cocina, el teatro y el arte urbano, comunidades locales transforman sus vivencias en actos de memoria y resistencia, recogiendo además reflexiones y aportes de la Comisión de la Verdad.',
        fecha: '2024'
    },
     {
        id: 4,
        tipo: 'video',
        titulo: 'Humberto: Fragmento de vida',
        autor: 'APUA Producciones',
        url: 'https://historiasenkilometros.com/humberto-fragmento-de-vida/',
        descripcion: 'Humberto, un hombre mayor que trabaja diariamente en su chagra, refleja en su vida las huellas de un pasado marcado por el conflicto armado. Su historia representa a miles de colombianos que continúan esperando verdad, justicia y reparación.',
        fecha: '2024'
    },
    {
        id: 5,
        tipo: 'video',
        titulo: 'Festival IPANORÉ en Vaupés',
        autor: 'APUA Producciones',
        url: 'https://www.youtube.com/embed/ogiSpgQINc8', // Embed de YouTube correcto
        descripcion: 'El Festival IPANORÉ en Vaupés celebra la riqueza cultural y ancestral de la región, reuniendo música, danza y tradiciones que fortalecen la identidad de las comunidades locales.',
        fecha: '2024'
    },
    {
        id: 6,
        tipo: 'video',
        titulo: 'Fortalecimiento de la cosmovisión de los saberes ancestrales',
        autor: 'APUA Producciones',
        url: 'https://www.youtube.com/embed/lfACjm-OuhE', // Embed de YouTube correcto
        descripcion: 'Este video resalta el fortalecimiento de la cosmovisión y los saberes ancestrales en torno a las plantas medicinales, a través de las artes visuales como herramienta de memoria, identidad y transmisión cultural.',
        fecha: '2024'
    },
    {
        id: 7,
        tipo: 'video',
        titulo: 'SerieSomos Historias: Capitulo; "Lucha por la vida" ',
        autor: 'APUA Producciones',
        url: 'https://www.youtube.com/embed/Cc0hxoarYjg', 
        descripcion: 'La plaza de mercado de Mitú, Vaupés, es un escenario icónico en la vida de un país multicultural como Colombia. Al borde de uno de los ríos más mágicos del continente, vemos llegar en pequeñas balsas de madera a integrantes de diversas comunidades indígenas y mestizas, cargadas de plantas, alimentos y artesanías que difícilmente se ven en otra parte del territorio nacional.',
        fecha: '29 de nov de 2023'
    },
    {
        id: 8,
        tipo: 'video',
        titulo: 'Temporada de Cine Colombiano en Mitú',
        autor: 'APUA Producciones',
        url: 'https://www.youtube.com/embed/t4rwqJXSIIE', // Embed de YouTube correcto
        descripcion: 'La ciudad de Mitú, capital del Vaupés, fue escenario de la Temporada de Cine Colombiano, con proyecciones de cine nacional y espacios de formación audiovisual. Una iniciativa que fortalece el acceso al cine y promueve la cultura en territorios con pocas salas de exhibición.',
        fecha: '2024'
    },
    {
        id: 9,
        tipo: 'video',
        titulo: 'Cristian y su experiencia en Tu Negocio en Línea 2024',
        autor: 'APUA Producciones',
        url: 'https://www.youtube.com/embed/YxM3bXtGk5A', // Embed de YouTube correcto
        descripcion: 'Cristian, director de APUA Producciones, comparte su experiencia como beneficiario del programa Tu Negocio en Línea 2024 del Ministerio TIC. A través de esta iniciativa, ha fortalecido su presencia digital y utiliza su tienda virtual para impulsar el cine comunitario a nivel nacional.',
        fecha: '2024'
    },
    {
        id: 10,
        tipo: 'video',
        titulo: 'Taraira: territorio en medio de la selva',
        autor: 'APUA Producciones',
        url: 'https://www.youtube.com/embed/ioOde7D-luQ', // Embed de YouTube correcto
        descripcion: 'Taraira, municipio ubicado en el corazón de la selva del Vaupés, refleja la vida, cultura y resistencia de las comunidades que habitan este territorio amazónico, rodeado de naturaleza y saberes ancestrales.',
        fecha: '2024'
    },
       {
        id: 10,
        tipo: 'video',
        titulo: 'Vaupés Crea: Memorias en movimiento',
        autor: 'APUA Producciones',
        url: 'https://www.youtube.com/embed/gnpsthxzE6M', // Embed de YouTube correcto
        descripcion: 'Proceso creativo y colaborativo donde las memorias cobran vida a través del movimiento y la imagen. En este espacio, exploramos las vivencias de la población local para transformarlas en cortos documentales que reflejan identidad, historia y territorio.',
        fecha: '2021'
    },
    {
        id: 11,
        tipo: 'video',
        titulo: 'Emprendimiento de artesanías en Mitú',
        autor: 'APUA Producciones',
        url: 'https://www.youtube.com/embed/KMXNmpcKiDI', // Embed de YouTube correcto
        descripcion: 'Emprendimiento de artesanías en Mitú, Vaupés, que refleja el talento local y la riqueza cultural de la región, promoviendo la creación manual como una forma de sustento, identidad y preservación de saberes tradicionales.',
        fecha: '2024'
    },
     {
        id: 12,
        tipo: 'video',
        titulo: 'Halloween en Taraira 2018',
        autor: 'APUA Producciones',
        url: 'https://www.youtube.com/embed/39JXSyKicp0', // Embed de YouTube correcto
        descripcion: 'Registro del evento de Halloween realizado el 31 de octubre de 2018 en Taraira, municipio del departamento del Vaupés, donde la comunidad se reúne para compartir y celebrar en medio de su contexto cultural amazónico.',
        fecha: '2018'
    },
    {
        id: 13,
        tipo: 'video',
        titulo: 'Simulacro de respuesta a emergencias en Taraira',
        autor: 'APUA Producciones',
        url: 'https://www.youtube.com/embed/VCpuZI9pHZU', // Embed de YouTube correcto
        descripcion: 'Registro del simulacro de respuesta a emergencias realizado el 24 de octubre de 2018 en el municipio de Taraira, Vaupés. Esta actividad buscó fortalecer la planeación, coordinación y comunicación entre entidades y comunidad para una respuesta efectiva ante distintos fenómenos de riesgo.',
        fecha: '2018'
    },
    {
        id: 14,
        tipo: 'foto',
        titulo: 'Luciérnagas bajo la luna en Taraira',
        autor: 'APUA Producciones',
        url: 'imagenes/Taraira_nocturna.jpeg',
        descripcion: 'Las luciérnagas iluminan las noches de mi pueblo, la magia de la selva del Vaupés tambien se vuve detras de un lente.',
        fecha: '2017'
    },
    {
        id: 15,
        tipo: 'foto',
        titulo: 'Donde la luz susurra y la cámara despierta',
        autor: 'APUA Producciones',
        url: 'imagenes/Taraira_nocturna_2.jpeg',
        descripcion: 'En las noches de Taraira, la fotografía se convierte en una experiencia mágica: entre la luz de la luna y el brillo de las luciérnagas, los participantes de las clases descubren cómo capturar la esencia de la selva del Vaupés a través del lente.',
        fecha: '2017'
    },
    {
        id: 16,
        tipo: 'foto',
        titulo: 'Mi casa es un espacio seguro y estas invitado',
        autor: 'APUA Producciones',
        url: 'imagenes/maloca_tradicional.jpeg',
        descripcion: 'En la Casa ancestral nuestros abuelos nos enseñan la sabiduría de la selva y la vida.',
        fecha: '2017'
    },
    {
        id: 17,
        tipo: 'foto',
        titulo: 'Horizonte infinito: El arte de capturar la luz',
        autor: 'APUA Producciones',
        url: 'imagenes/Foto_en_el_horizonte.jpg',
        descripcion: 'El sol se despide en el horizonte, pintando el cielo con colores cálidos y creando una atmósfera mágica que invita a la reflexión y a la contemplación de la naturaleza.',
        fecha: '2017'
    },
    {
        id: 18,
        tipo: 'foto',
        titulo: 'Arcoiris de colores: instante de libertad',
        autor: 'APUA Producciones',
        url: 'imagenes/Colores_de_la_vida.JPG',
        descripcion: 'Una mujer llena de alegría libera una nube de colores que captura el instante perfecto entre emoción y movimiento, reflejando la energía, la libertad y la belleza de vivir el momento frente a la cámara.',
        fecha: '2017'
    },
    {
        id: 19,
        tipo: 'foto',
        titulo: 'Bajo la lluvia: la alegría en su forma más pura',
        autor: 'APUA Producciones',
        url: 'imagenes/ECO03424.png',
        descripcion: 'Una niña recibe la lluvia con una sonrisa abierta, jugando en la calle mientras cada gota se convierte en un instante de felicidad capturado, recordándonos la belleza de lo simple y lo espontáneo.',
        fecha: '2017'
    },
    {
        id: 15,
        tipo: 'audio',
        titulo: 'Voces de la Maloca - Episodio 1',
        autor: 'Radio Comunitaria',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Demo open source audio
        descripcion: 'Pódcast dedicado a la memoria oral y a las leyendas narradas por nuestros mayores.',
        fecha: 'Agosto 2025'
    },
    {
        id: 16,
        tipo: 'foto',
        titulo: 'Detrás de cámaras: Semillas',
        autor: 'María T.',
        url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        descripcion: 'Nuestros jóvenes aprendiendo a usar equipos de grabación audiovisuales.',
        fecha: 'Septiembre 2025'
    },
    {
        id: 17,
        tipo: 'audio',
        titulo: 'Cantos Tradicionales',
        autor: 'Coro de Voces',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        descripcion: 'Recopilación de cantos y sonidos propios tradicionales entonados durante la minga.',
        fecha: 'Noviembre 2025'
    },
    
];

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Lightbox API
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');

    // Function to generate media badge icon based on type
    const getBadgeIcon = (tipo) => {
        if (tipo === 'video') return '<i class="fa-solid fa-video"></i> Video';
        if (tipo === 'foto') return '<i class="fa-solid fa-camera"></i> Foto';
        if (tipo === 'audio') return '<i class="fa-solid fa-headphones"></i> Audio';
        return '';
    };

    // Formats element HTML based on type
    const getMediaElement = (item) => {
        if (item.tipo === 'video') {
            return `<iframe class="media-embed" src="${item.url}" title="${item.titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
        } else if (item.tipo === 'foto') {
            return `
                <div class="media-thumbnail-container" onclick="openLightbox('${item.url}', '${item.titulo}')">
                    <img src="${item.url}" alt="${item.titulo}" class="media-thumbnail" loading="lazy">
                </div>
            `;
        } else if (item.tipo === 'audio') {
            return `
                <div class="media-audio-container">
                    <audio controls loading="lazy">
                        <source src="${item.url}" type="audio/mpeg">
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                </div>
            `;
        }
    };

    // Render gallery items
    const renderGallery = (data) => {
        galleryGrid.innerHTML = ''; // Clear current content
        
        data.forEach((item, index) => {
            const delay = index * 0.1; // Stagger animation
            const card = document.createElement('article');
            card.className = `media-item`;
            card.setAttribute('data-category', item.tipo);
            card.style.animationDelay = `${delay}s`;
            
            card.innerHTML = `
                <div class="media-type-badge">${getBadgeIcon(item.tipo)}</div>
                ${getMediaElement(item)}
                <div class="media-info">
                    <h3>${item.titulo}</h3>
                    <p class="desc">${item.descripcion}</p>
                    <div class="media-meta">
                        <span class="author"><i class="fa-solid fa-circle-user"></i> ${item.autor}</span>
                        <span class="date"><i class="fa-regular fa-calendar-alt"></i> ${item.fecha}</span>
                    </div>
                </div>
            `;
            galleryGrid.appendChild(card);
        });
    };

    // Initial render
    renderGallery(mediaData);

    // Filtering logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to current
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            const items = document.querySelectorAll('.media-item');
            
            items.forEach(item => {
                if (filterValue === 'todos' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // Re-trigger animation
                    item.style.animation = 'none';
                    item.offsetHeight; /* trigger reflow */
                    item.style.animation = null; 
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox functionalities
    window.openLightbox = (url, caption) => {
        lightboxImg.src = url;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop scrolling
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // allow scrolling
        // reset src after animation to avoid visual bugs
        setTimeout(() => lightboxImg.src = '', 300);
    };

    lightboxClose.addEventListener('click', closeLightbox);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});
