// ============================================
// FIB - Funcionalidad JavaScript
// Menú responsive, efectos y utilidades
// ============================================

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('FIB Web - Inicializada correctamente');
    
    // Añadir clase activa al enlace de navegación según la página actual
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.style.backgroundColor = '#1e3a5f';
            link.style.borderRadius = '4px';
        }
    });
    
    // Efecto de fade in para tarjetas (animación suave)
    const cards = document.querySelectorAll('.card, .wanted-card, .news-item');
    if (cards.length > 0) {
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
});

// Función para alerta de Roleplay (opcional)
function showRpAlert() {
    alert('⚠️ ESTE ES UN SITIO PARA FINES DE ROLEPLAY ⚠️\n\nEl Federal Investigation Bureau (FIB) es una agencia ficticia dentro del universo de Grand Theft Auto V. Este sitio es parte de un servidor de roleplay y no representa una entidad gubernamental real.');
}