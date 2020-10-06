
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";

    // console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    //window.open("https://www.terra.com.br/");
    window.location.href = "https://www.terra.com.br/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar Texto!")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui.";
    
}

function load(){
    alert("Página Carregada!");
}

function change(elemento){
    console.log(elemento.value);
}
/* function soma(n1, n2){
    return n1 +n2;
} */

/* function validaIdade(idade){
    var validar = true;
    if(idade >= 18){
        validar=true;
    } else {
        validar=false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade)); */

//alert(soma(5, 10));



/* var d = new Date();
alert(d.getDate());
alert(d.getMonth()+1);
alert(d.getMinutes());
 */

/* for(count=0; count <= 5; count++){
    alert(count);
} */


/* var count = 0;

while(count <5){
    console.log(count);
    alert(count);
    count += 1; 
} */


/* var idade = prompt("Qual a sua idade?")

if (idade >= 18){
    alert("maior de idade");
} else {
    alert ("menor de idade")
}/*

/* var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas[1].nome);
alert(frutas[0].cor); */

/* var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor); */

/* var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" | "));


var nome = "Marcus Vinicius";
var n1 = 5;
var n2 = 3;

var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem idade " + idade + " anos");
//alert(idade+idade2)
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLocaleLowerCase()); */