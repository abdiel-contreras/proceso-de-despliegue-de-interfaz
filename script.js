document.addEventListener('DOMContentLoaded', () => {
    const platformBox = document.getElementById('platform-info');
    const resolutionBox = document.getElementById('resolution');
    const browserBox = document.getElementById('browser');

    // 1. Detectar Plataforma
    const platform = navigator.platform;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    platformBox.innerHTML = isMobile ? "📱 Dispositivo Móvil Detectado" : `💻 Escritorio (${platform})`;

    // 2. Obtener Resolución
    const updateMetrics = () => {
        resolutionBox.innerText = `${window.innerWidth} x ${window.innerHeight} px`;
    };

    // 3. Obtener Navegador
    browserBox.innerText = navigator.vendor || "Navegador Estándar";

    window.addEventListener('resize', updateMetrics);
    updateMetrics();
});
