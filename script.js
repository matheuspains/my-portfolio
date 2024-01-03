// Aguarda o evento de carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function () {
    
    // Obtém a referência para o botão de alternância da barra lateral
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    
    // Obtém a referência para a barra lateral
    const sidebar = document.getElementById('sidebar');

    // Adiciona um ouvinte de evento para o clique no botão de alternância
    toggleSidebarButton.addEventListener('click', function () {
        
        // Alterna a presença da classe 'show' na barra lateral
        sidebar.classList.toggle('show');
    });
});