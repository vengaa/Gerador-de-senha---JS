let slideElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password"); 

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let novaSenha = "";

// Atualizar o valor do slide ao inicializar a página
sizePassword.innerHTML = slideElement.value;

// Atualizar o valor do slide ao mover o controle deslizante
slideElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword(size) {
    let n = charset.length;
    let pass = "";
    for(let i = 0; i < size; ++i) { 
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerText = pass; 
    novaSenha = pass;
}

function copy() {
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}