//Condicionais I

// if e if/else

const bool1 = false;
const bool2 = true;
const bool3 = true;

//exercicio 1
/*if(bool1){
    //entra se for true
    alert("Entrei no if, sou true")
} else {
        //entra se for false
    alert("Entrei no else, sou true")
};*/

//exercicio 2
/*if(bool1 === bool2) {
    alert("1 e 2 são iguais")
} else if (bool2 === bool3) {
    alert("2 e 3 são iguais")
} else if (bool1 === bool3) {
    alert("1 e 3 são iguais")
} else {
    alert("Nenhuma das condições foi atendidas!")
};*/

// if/else if/else (if else encadeado)
//const idade = prompt("DIGITE SUA IDADE"); //idade aleatória
//const idade = 28;
//if(idade >= 60) {
//forma usando else if
//    alert("O voto é facultativo")
//} else if(idade >= 16 && idade < 18) {
//    alert("O voto é facultativo")

/*if(idade >= 60 || idade >= 16 && idade < 18) {
    //forma simplificada
    alert("O voto é facultativo")
}
if(idade >= 18) {
    alert("Pode e deve emitir o título")
} else {
    alert("Não pode emitir o título")
};*/

//Pra guardar na cabeça

//const media = 3; // Média fixa
const media = +prompt("Dígite sua nota"); //Média através do número inserido

//Forma pedida pelo exercício
/*if(media >= 5) {
    alert("Você foi aprovado")
} else if(media >= 3) {
    alert("Recuperação")
} else if(media <= 3){
    alert("Você foi reprovado")
} else {
    alert("Dado inválido")
};*/

//Forma limitando ao uso da média
if (media >= 5 && media <= 10) {
    alert("Você foi aprovado")
} else if (media < 3 && media < 4.9) {
    alert("Recuperação")
} else if (media < 3) {
    alert("Você foi reprovado")
} else {
    alert("Dado inválido")
};