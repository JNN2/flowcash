function abrirNotificacoes() {
    console.log("Botão Notificações clicado!");
}

function abrirConfiguracoes() {
    console.log("Botão Configurações clicado!");

}

function abrirPerfil() {
    console.log("Botão Perfil clicado!");

}
function adicionarDespesas() {
    console.log("Botão Despesas clicado!");

}

function adicionarReceitas() {
    console.log("Botão Receitas clicado!");
}

function abrirRelatorio() {
    console.log("Botão Relatorio clicado!");
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

const toggle = document.getElementById("toggleSaldo");
const saldo = document.getElementById("saldoDisplay");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
    const isHidden = saldo.classList.toggle("hidden-saldo");

    // Alterna o ícone e o estilo ativo
    if (isHidden) {
        icon.classList.replace("fa-eye", "fa-eye-slash");
        toggle.classList.add("active");
    } else {
        icon.classList.replace("fa-eye-slash", "fa-eye");
        toggle.classList.remove("active");
    }
});
