
const form1 = document.getElementById("forma_cadastro");
const confirmacao = document.getElementById("confirmacao");
const senha1 = document.getElementById("senha");
const alerta = document.getElementById("alert");

form1.addEventListener("submit", (e) => {
    if(senha1.value != confirmacao.value) {
        console.log(senha1.value)
        e.preventDefault()
        alerta.style.background = "#f4b3b3ff"
        alerta.style.color = "#130000ff"
        alerta.textContent = "senhas que você digitou não são iguais"
    }
    else
    {
        alerta.style.display ="none";
    }


})