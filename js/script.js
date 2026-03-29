//seleção dos elementos
const multiplicationForm = document.querySelector("#multiplication-form"); // pega o elemento de FORM
const numberInput = document.querySelector("#number"); //pega o elemento do INPUT DE NUMBER
const multiplicationInput = document.querySelector("#multiplicator"); //Pega o elemento do INPUT do MULTIPLICADOR


//funções

//Eventos
multiplicationForm.addEventListener("submit", (e) =>{
    e.preventDefault(); //pra não recarregar a pagina

    const multiplicationNumber = +numberInput.value; //pega do input acima o valor que o usuario digitou
    const multiplicatorNumber = +multiplicationInput.value; // pega do input acima o multiplicador que o usuario digitou.

    if(!multiplicationNumber || !multiplicatorNumber) return;
    
    console.log(`Numero digitado: ${multiplicationNumber} e multipilcador digitado: ${ multiplicatorNumber}`);


});