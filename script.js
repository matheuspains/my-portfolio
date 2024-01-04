// Aguarda o evento de carregamento completo do DOM (Document Object Model)
document.addEventListener('DOMContentLoaded', function () {
    // Obtém a referência para a barra lateral e o título no cabeçalho
    const sidebar = document.getElementById('sidebar');
    const headerTitle = document.querySelector('header h1');

    // Adiciona um ouvinte de evento para o clique no título no cabeçalho
    headerTitle.addEventListener('click', function () {
        // Alterna a presença da classe 'show' na barra lateral
        sidebar.classList.toggle('show');

        // Obtém as referências para os ícones à esquerda e à direita do título
        const leftIcon = headerTitle.querySelector('span#leftSidebarIcon');
        const rightIcon = headerTitle.querySelector('span#rightSidebarIcon');

        // Alterna o conteúdo dos spans entre ">" e "<" conforme necessário
        if (sidebar.classList.contains('show')) {
            leftIcon.textContent = '<';
            rightIcon.textContent = '>';
        } else {
            leftIcon.textContent = '>';
            rightIcon.textContent = '<';
        }
    });
});