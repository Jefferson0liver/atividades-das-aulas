type veiculo = {modelo:string, ano:number};   //definimos a estrutura do objeto com nome 'veiculo', contendo modelo e ano.

const carroNovo:veiculo = {modelo:'Kicks', ano:2026};   //declaramos as variáveis com dados associados ao objeto 'veiculo'.
const carroVelho:veiculo = {modelo:'Palio', ano:2004};

function nomeCarro(carango:veiculo){   //criamos uma função 'nomeCarro', no parametro CARANGO vai estar associado aos dados de 'veiculo'. 
    if(carango.modelo === 'Kicks'){
        console.log(`O veículo ${carango.modelo} está apto, seu ano é ${carango.ano}. ✅`);  //a variável tem q estar igual a lógica da condição para estar apta.
    }else{
        console.log(`O veículo ${carango.modelo} ano ${carango.ano} não se enquadra como carro atual. ⛔`); //a lógica não confirmou, então a condição é negada
    }
}

nomeCarro(carroNovo);    //aqui chamamos a função para saber o resultado
nomeCarro(carroVelho);