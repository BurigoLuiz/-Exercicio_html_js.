const form = document.getElementById('Form');
const campoA = document.getElementById('Campo_A');
const campoB = document.getElementById('Campo_B');
const campoDividendo = document.getElementById('Campo_B');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);
    const resultado = (valorB / valorA).toFixed(2);
    const mensagemResultado = `Parabéns! O resultado da divisão é: ${resultado}`;

    if (valorB > valorA) {
        const containerMensagemSucesso = document.querySelector('.Mensagem_Sucesso');
        containerMensagemSucesso.innerHTML = mensagemResultado;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        campoDividendo.style.border = '2px solid red';
        document.querySelector('.Mensagem_Erro').style.display = 'block';
    }
});

campoB.addEventListener('keyup', function(e) {
    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (valorB <= valorA) { 
        campoDividendo.classList.add('error');
        document.querySelector('.Mensagem_Erro').style.display = 'block';
    } else {
        campoDividendo.classList.remove('error');
        document.querySelector('.Mensagem_Erro').style.display = 'none';
    }
});
