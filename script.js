document.addEventListener('DOMContentLoaded', () => {
    const platformBox = document.getElementById('platform-info');
    const resolutionBox = document.getElementById('resolution');
    const browserBox = document.getElementById('browser');

    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    platformBox.innerHTML = isMobile ? "📱 Dispositivo Móvil Detectado" : "💻 Escritorio Detectado";

    
    const updateMetrics = () => {
        resolutionBox.innerText = `${window.innerWidth} x ${window.innerHeight} px`;
    };

    browserBox.innerText = "Google Chrome / Navegador Web";

    window.addEventListener('resize', updateMetrics);
    updateMetrics();
});
