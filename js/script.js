//seleção dos elementos
const multiplicationForm = document.querySelector("#multiplication-form"); // pega o elemento de FORM
const numberInput = document.querySelector("#number"); //pega o elemento do INPUT DE NUMBER
const multiplicationInput = document.querySelector("#multiplicator"); //Pega o elemento do INPUT do MULTIPLICADOR

const multiplicationTable = document.querySelector("#multiplication-operations"); //irei usar esse elemento para zeraro o texto que mostra na div <p>Informe o número para calcular uma tabuada...</p>
const multiplicationTitle = document.querySelector("#multiplation-title span"); // pegando o valor do numero digitado pra mostrarmos no SPAM

const btlimpar = document.querySelector("#Btlimpar"); // criado para limpar a tabela


//funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = ""; //zera o texto dessa CONST que pegamos acima.

    //laço para pegar o multiplicador e varrer e exibir pra cada percorrido
    for(i = 1; i <= multiplicatorNumber; i++){
        const result = number * i;

        //criei uma template 
        const template = 
        `<div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);

    }
    multiplicationTitle.innerText = number;
    console.log(`Numero digitado: ${number} e multipilcador digitado: ${ multiplicatorNumber}`);
};


//Eventos
multiplicationForm.addEventListener("submit", (e) =>{
    e.preventDefault(); //pra não recarregar a pagina

    const multiplicationNumber = +numberInput.value; //pega do input acima o valor que o usuario digitou
    const multiplicatorNumber = +multiplicationInput.value; // pega do input acima o multiplicador que o usuario digitou.

    if(!multiplicationNumber || !multiplicatorNumber) return;
    
    
    createTable(multiplicationNumber, multiplicatorNumber);

});

//criando evento, ao clicar em LIMPAR ele resetar e apenas colocar a mensagem abaixo
btlimpar.addEventListener("click", () => {
    numberInput.value = "";
    multiplicationTitle.innerText = "";
     multiplicationTable.innerHTML = "Informe o número para calcular uma tabuada"; //zera o texto dessa CONST que pegamos acima.
     

});

