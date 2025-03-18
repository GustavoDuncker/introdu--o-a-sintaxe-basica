console.log('Hello');

//Este é um comentario de uma linha

/*
    Este é um comentario de multiplas linhas
*/

    //Variaveis
    let nome = "João"; //Usando 'Let' para declarar uma variavel
    const idade = 25; //'Const' para uma variavel constante

    //Funções
    function saudacao() {
        console.log("Olá "+ nome);
    }
    //Chamando a função
    saudacao()

    //Estruturas de Controle
    if (idade >=18) {
        console.log("Você é maior de idade.");
}   else {
    console.log("Você é menor de idade.");
}

//Laços de Repetição
for (let i = 0; i < 5; i++) {
    console.log("Numero " + i);
}

//Arrays
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]); // Acessando o primeiro elemento do array

//Objetos
let pessoa = {
    nome: "Carlos",
    idade: 30,
    saudacao: function() {
        console.log("Oi, meu nome é " + this.nome);
    }
};