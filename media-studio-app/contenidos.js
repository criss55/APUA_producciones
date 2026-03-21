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
        tipo: 'foto',
        titulo: 'Asamblea bajo las estrellas',
        autor: 'Colectivo Fotográfico',
        url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        descripcion: 'Registro fotográfico de la primera proyección con la comunidad al aire libre.',
        fecha: 'Julio 2025'
    },
    {
        id: 3,
        tipo: 'audio',
        titulo: 'Voces de la Maloca - Episodio 1',
        autor: 'Radio Comunitaria',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Demo open source audio
        descripcion: 'Pódcast dedicado a la memoria oral y a las leyendas narradas por nuestros mayores.',
        fecha: 'Agosto 2025'
    },
    {
        id: 4,
        tipo: 'video',
        titulo: 'SerieSomos Historias: Capitulo; "Lucha por la vida" ',
        autor: 'APUA Producciones',
        url: 'https://www.youtube.com/embed/Cc0hxoarYjg', 
        descripcion: 'La plaza de mercado de Mitú, Vaupés, es un escenario icónico en la vida de un país multicultural como Colombia. Al borde de uno de los ríos más mágicos del continente, vemos llegar en pequeñas balsas de madera a integrantes de diversas comunidades indígenas y mestizas, cargadas de plantas, alimentos y artesanías que difícilmente se ven en otra parte del territorio nacional.',
        fecha: '29 de nov de 2023'
    },
    {
        id: 5,
        tipo: 'foto',
        titulo: 'Detrás de cámaras: Semillas',
        autor: 'María T.',
        url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        descripcion: 'Nuestros jóvenes aprendiendo a usar equipos de grabación audiovisuales.',
        fecha: 'Septiembre 2025'
    },
    {
        id: 6,
        tipo: 'audio',
        titulo: 'Cantos Tradicionales',
        autor: 'Coro de Voces',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        descripcion: 'Recopilación de cantos y sonidos propios tradicionales entonados durante la minga.',
        fecha: 'Noviembre 2025'
    }
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
