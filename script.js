document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const headerTitle = document.querySelector('header h1');

    headerTitle.addEventListener('click', function () {
        sidebar.classList.toggle('show');
        const leftIcon = headerTitle.querySelector('span#leftSidebarIcon');
        const rightIcon = headerTitle.querySelector('span#rightSidebarIcon');

        if (sidebar.classList.contains('show')) {
            leftIcon.textContent = '<';
            rightIcon.textContent = '>';
        } else {
            leftIcon.textContent = '>';
            rightIcon.textContent = '<';
        }
    });

    // Adiciona um ouvinte de evento para o envio do formulário
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (event) {
        // Impede o envio padrão do formulário
        event.preventDefault();

        // Chama a função para redirecionar apenas se a verificação for bem-sucedida
        if (redirecionarPaginaBranco()) {
            // Substitua este caminho com a lógica de redirecionamento apropriada
            window.location.href = 'pagina_em_branco.html';
        }
    });
});

function redirecionarPaginaBranco() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorContainer = document.getElementById('errorContainer');

    // Substitua este exemplo com sua lógica de verificação
    if (username === 'user' && password === 'senha') {
        // Retorna verdadeiro apenas se a verificação for bem-sucedida
        return true;
    }

    // Adicione uma mensagem de erro dinâmica ao invés de usar alert
    errorContainer.textContent = 'Usuário ou senha incorretos.';
    
    // Retorna falso se a verificação falhar
    return false;
}