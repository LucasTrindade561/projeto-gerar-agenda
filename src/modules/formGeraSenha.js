import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinuscula = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
}

function gera(){
    const senha = geraSenha( //geraSenha --> outro modulo (geradores)
        qtdCaracteres.value, 
        chkMaiusculas.checked, //checked --> vai retornar true or false e com isso mandaremos para o outro modulo e conseguiremos gerar a senha
        chkMinuscula.checked,
        chkNumeros.checked,
        chkSimbolos.checked
        );
        return senha || 'Nada selecionado';
}

