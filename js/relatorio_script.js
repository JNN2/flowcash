function abrirNotificacoes() {
    console.log("Botão Notificações clicado!");
}

function abrirConfiguracoes() {
    console.log("Botão Configurações clicado!");

}

function abrirPerfil() {
    console.log("Botão Perfil clicado!");

}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-item a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            
            // Remove a classe 'active' de todos os itens
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            
            // Adiciona a classe 'active' ao item clicado (o pai <li>)
            e.target.parentElement.classList.add('active');
            
            // Lógica de Redirecionamento (exemplo)
            // window.location.href = e.target.href;
        });
    });
});