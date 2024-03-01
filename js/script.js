
//var -> Variável: Permite redeclaração (o que pode causar problemas no código)
//let -> Variável: Não permite redeclaração
//const -> Constante: Não permite alteração do seu valor

const info = document.querySelector('.info');
const btnInfo = document.querySelector('.info button');

//Se o usuário já fechou a info, esconde a div info
if(localStorage.getItem('fechouInfo') == 'sim'){
    info.style.display='none';
}

function fecharInfo(){
    info.style.display='none';

    //Armazenando dados no STORAGE
    //sessionStorage -> Guarda dados enquanto o usuário navega na página (quando fecha a aba, os dados somem)
    //localStorage -> Guarda no computador, mantém armazenado mesmo com o fechamento do browser.
    localStorage.setItem('fechouInfo','sim');
}

btnInfo.addEventListener('click', fecharInfo);


///////////////////////////////////////////Calculo do IMC

const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btnImc = document.querySelector('#btn-imc');
const result = document.querySelector('#result');

function calcularImc(){
    
    //Verificar SE os valores de peso e altura foram preenchidos
    // != comparação (diferença)
    // == comparação (igualdade)
    // && e
    // || ou

    if(peso.value != '' && altura.value != ''){
        
        let imc = peso.value / (altura.value*altura.value);
        //peso.value = '';
        //altura.value = '';
        
        let classificacao;
        let cor;

        //Verificando a classificação
        if(imc < 18.5){
            classificacao = 'Magreza';
            cor = '#FF1F00';
        }

        //Se o imc estiver entre 18.5 e 24.9
        else if(imc >= 18.5 && imc <= 24.9){
            classificacao = 'Normal';
            cor = '#2E943F';
        }

        else if(imc >= 25 && imc <= 29.9){
            classificacao = 'Sobrepeso';
            cor = '#AFB200';
        }

        else if(imc >= 30 && imc <= 34.9){
            classificacao = 'Obesidade';
            cor = '#CB7714';
        }

        else{
            classificacao = 'Obesidade grau 2';
            cor = '#ff0000';
        }

        result.style.display='block'; //exibindo a div
        result.style.backgroundColor = cor;
        result.innerHTML = 'IMC: '+imc.toFixed(2) + '<br>Classificação: '+classificacao; //escrevendo na div         

    }else{
        alert('Preencha todos os campos!');
    }    

}

btnImc.addEventListener('click', calcularImc);