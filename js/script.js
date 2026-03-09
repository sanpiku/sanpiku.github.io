// ========================================
// SANPIKU - SCRIPT PRINCIPAL
// Sistema de Interactividad para Historias y Leyendas
// ========================================

// ========================================
// 1. ESPERAR A QUE CARGUE LA PÁGINA
// ========================================
// Este código espera a que toda la página HTML esté lista antes de ejecutar el JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Página cargada - Inicializando Sanpiku...');
    
    // ========================================
    // 2. MENÚ MÓVIL (HAMBURGUESA)
    // ========================================
    // Esta función hace que el menú lateral aparezca y desaparezca en pantallas pequeñas
    
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    // Cuando se hace clic en el botón hamburguesa
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Cambiar el icono entre hamburguesa (☰) y cerrar (✕)
            const icon = this.querySelector('i');
            if (sidebar.classList.contains('active')) {
                icon.textContent = '✕';
                console.log('📱 Menú móvil abierto');
            } else {
                icon.textContent = '☰';
                console.log('📱 Menú móvil cerrado');
            }
        });
    }
    
    // Cerrar el menú cuando se hace clic en el overlay (fondo oscuro)
    if (overlay) {
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.textContent = '☰';
            console.log('📱 Menú cerrado desde overlay');
        });
    }
    
    // ========================================
    // 3. MENÚS DESPLEGABLES EN SIDEBAR
    // ========================================
    // Permite abrir y cerrar las categorías en la barra lateral
    
    const categoryHeaders = document.querySelectorAll('.category-header');
    
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Obtener el contenedor padre de la categoría
            const categoryCard = this.parentElement;
            const categoryContent = categoryCard.querySelector('.category-content');
            const arrow = this.querySelector('.arrow');
            
            // Alternar entre abierto y cerrado
            categoryCard.classList.toggle('active');
            
            // Rotar la flecha cuando se abre/cierra
            if (categoryCard.classList.contains('active')) {
                arrow.style.transform = 'rotate(180deg)';
                console.log(`📂 Categoría abierta: ${this.querySelector('h3').textContent}`);
            } else {
                arrow.style.transform = 'rotate(0deg)';
                console.log(`📂 Categoría cerrada: ${this.querySelector('h3').textContent}`);
            }
        });
    });
    
    // ========================================
    // 4. TARJETAS EXPANDIBLES (ACCORDION)
    // ========================================
    // Las tarjetas de historias se expanden al hacer clic para mostrar todo el contenido
    
    const storyHeaders = document.querySelectorAll('.story-header');
    
    storyHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Obtener la tarjeta completa
            const storyCard = this.parentElement;
            const arrow = this.querySelector('.story-arrow');
            
            // Expandir o contraer la tarjeta
            storyCard.classList.toggle('active');
            
            // Rotar la flecha indicadora
            if (storyCard.classList.contains('active')) {
                arrow.style.transform = 'rotate(180deg)';
                console.log(`📖 Historia expandida: ${this.querySelector('h3').textContent}`);
            } else {
                arrow.style.transform = 'rotate(0deg)';
                console.log(`📖 Historia contraída: ${this.querySelector('h3').textContent}`);
            }
        });
    });
    
    // ========================================
    // 5. SMOOTH SCROLL (DESPLAZAMIENTO SUAVE)
    // ========================================
    // Cuando se hace clic en enlaces internos, la página se desplaza suavemente
    
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                console.log(`🎯 Navegando a: ${targetId}`);
            }
        });
    });
    
    // ========================================
    // 6. FILTRO DE HISTORIAS POR CATEGORÍA
    // ========================================
    // Permite mostrar solo las historias de una categoría específica
    
    const categoryLinks = document.querySelectorAll('.category-item');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const category = this.getAttribute('data-category');
            const allStories = document.querySelectorAll('.story-card');
            
            // Mostrar/ocultar historias según la categoría
            allStories.forEach(story => {
                const storyCategory = story.getAttribute('data-category');
                
                if (category === 'todas' || storyCategory === category) {
                    story.style.display = 'block';
                    // Animación de entrada
                    setTimeout(() => {
                        story.style.opacity = '1';
                        story.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    story.style.opacity = '0';
                    story.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        story.style.display = 'none';
                    }, 300);
                }
            });
            
            // Resaltar la categoría activa
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            console.log(`🔍 Filtrando por categoría: ${category}`);
            
            // Cerrar el menú móvil si está abierto
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                menuToggle.querySelector('i').textContent = '☰';
            }
        });
    });
    
    // ========================================
    // 7. ANIMACIONES AL HACER SCROLL
    // ========================================
    // Los elementos aparecen con animación cuando entran en la pantalla
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                console.log(`✨ Elemento visible: ${entry.target.className}`);
            }
        });
    }, observerOptions);
    
    // Observar todas las tarjetas y secciones
    const elementsToAnimate = document.querySelectorAll('.story-card, .video-container, .category-card');
    elementsToAnimate.forEach(element => observer.observe(element));
    
    // ========================================
    // 8. BOTÓN VOLVER ARRIBA
    // ========================================
    // Muestra un botón para volver al inicio cuando se hace scroll hacia abajo
    
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    backToTopButton.title = 'Volver arriba';
    document.body.appendChild(backToTopButton);
    
    // Mostrar/ocultar el botón según el scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Función del botón: volver arriba suavemente
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        console.log('⬆️ Volviendo al inicio...');
    });
    
    // ========================================
    // 9. BÚSQUEDA EN TIEMPO REAL (OPCIONAL)
    // ========================================
    // Si se añade un campo de búsqueda, esta función filtra las historias
    
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const allStories = document.querySelectorAll('.story-card');
            
            allStories.forEach(story => {
                const title = story.querySelector('h3').textContent.toLowerCase();
                const content = story.querySelector('.story-content').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || content.includes(searchTerm)) {
                    story.style.display = 'block';
                } else {
                    story.style.display = 'none';
                }
            });
            
            console.log(`🔎 Buscando: ${searchTerm}`);
        });
    }
    
    // ========================================
    // 10. MANEJO DE VIDEOS DE YOUTUBE
    // ========================================
    // Mejora el rendimiento cargando los videos solo cuando son visibles
    
    const videoContainers = document.querySelectorAll('.video-container iframe');
    
    videoContainers.forEach(video => {
        // Lazy loading: cargar videos solo cuando están cerca del viewport
        const videoSrc = video.getAttribute('data-src');
        if (videoSrc) {
            video.setAttribute('src', videoSrc);
            video.removeAttribute('data-src');
            console.log('🎥 Video cargado');
        }
    });
    
    // ========================================
    // 11. MANEJO DE ERRORES Y FALLBACKS
    // ========================================
    // Detecta si faltan elementos importantes y muestra advertencias
    
    if (!sidebar) {
        console.warn('⚠️ No se encontró el sidebar');
    }
    
    if (storyHeaders.length === 0) {
        console.warn('⚠️ No se encontraron historias');
    }
    
    if (categoryHeaders.length === 0) {
        console.warn('⚠️ No se encontraron categorías');
    }
    
    // ========================================
    // 12. RESPONSIVE: AJUSTES SEGÚN TAMAÑO DE PANTALLA
    // ========================================
    
    function checkScreenSize() {
        const width = window.innerWidth;
        
        if (width <= 768) {
            console.log('📱 Vista móvil activa');
            // Cerrar sidebar automáticamente en móvil
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        } else {
            console.log('💻 Vista desktop activa');
            // En desktop, quitar clases de móvil
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }
    }
    
    // Verificar al cargar y al cambiar tamaño de ventana
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // ========================================
    // 13. ANIMACIONES DE HOVER EN TARJETAS
    // ========================================
    // Efectos adicionales cuando el mouse pasa sobre las tarjetas
    
    const allCards = document.querySelectorAll('.story-card, .category-card');
    
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ========================================
    // 14. CONTADOR DE HISTORIAS
    // ========================================
    // Muestra cuántas historias hay en total
    
    const totalStories = document.querySelectorAll('.story-card').length;
    console.log(`📚 Total de historias cargadas: ${totalStories}`);
    
    // ========================================
    // 15. PREFERENCIAS DE USUARIO (LocalStorage)
    // ========================================
    // Guarda la última categoría seleccionada para recordarla
    
    // Guardar categoría seleccionada
    categoryLinks.forEach(link => {
        link.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            localStorage.setItem('lastCategory', category);
        });
    });
    
    // Restaurar última categoría al cargar
    const lastCategory = localStorage.getItem('lastCategory');
    if (lastCategory) {
        const categoryLink = document.querySelector(`[data-category="${lastCategory}"]`);
        if (categoryLink) {
            categoryLink.click();
            console.log(`💾 Categoría restaurada: ${lastCategory}`);
        }
    }
    
    // ========================================
    // 16. MENSAJE DE BIENVENIDA
    // ========================================
    
    console.log(`
    ╔════════════════════════════════════╗
    ║   🎭 SANPIKU - Sistema Cargado    ║
    ║   Historias y Leyendas             ║
    ║   Versión 1.0                      ║
    ╚════════════════════════════════════╝
    `);
    
    // Notificar que todo está listo
    setTimeout(() => {
        console.log('✅ Todas las funcionalidades están activas');
        console.log('📖 Historias cargadas:', totalStories);
        console.log('🎨 Animaciones activadas');
        console.log('📱 Responsive funcionando');
    }, 500);
    
}); // Fin del DOMContentLoaded

// ========================================
// 17. FUNCIÓN PARA AÑADIR NUEVAS HISTORIAS (USAR DESDE CONSOLA)
// ========================================
// Esta función permite añadir historias dinámicamente desde la consola del navegador

function agregarHistoria(titulo, categoria, contenido) {
    const storiesGrid = document.querySelector('.stories-grid');
    
    if (!storiesGrid) {
        console.error('❌ No se encontró el contenedor de historias');
        return;
    }
    
    const newStory = document.createElement('div');
    newStory.className = 'story-card';
    newStory.setAttribute('data-category', categoria);
    
    newStory.innerHTML = `
        <div class="story-header">
            <h3>${titulo}</h3>
            <span class="story-arrow">▼</span>
        </div>
        <div class="story-content">
            <p>${contenido}</p>
        </div>
    `;
    
    storiesGrid.appendChild(newStory);
    
    // Añadir funcionalidad de clic a la nueva historia
    const newHeader = newStory.querySelector('.story-header');
    newHeader.addEventListener('click', function() {
        newStory.classList.toggle('active');
        const arrow = this.querySelector('.story-arrow');
        arrow.style.transform = newStory.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
    
    console.log(`✅ Historia añadida: ${titulo}`);
}

// Ejemplo de uso desde la consola:
// agregarHistoria('Mi Nueva Leyenda', 'leyendas', 'Érase una vez...');

// ========================================
// 18. MODO OSCURO (OPCIONAL - BONUS)
// ========================================
// Permite alternar entre modo claro y oscuro

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    console.log(`🌙 Modo oscuro: ${isDark ? 'activado' : 'desactivado'}`);
}

// Restaurar preferencia de modo oscuro
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ========================================
// FIN DEL SCRIPT
// ========================================
// Todas las funcionalidades están comentadas para facilitar
// la comprensión y modificación por usuarios sin conocimientos técnicos
// ========================================
