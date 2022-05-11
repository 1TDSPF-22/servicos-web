//console.log('MSg gerada no arquivo JS')

//declarando variaveis com var 
//utilizamso o var para criar um esco´po global
//var nome = "Alê"

//declarando variaveis com let
//utilizamos o let para criar um escopo local



//function exemploEscopoLocal(){
   // let sobrenome = 'Carlos'
    //return sobrenome 
//}

//console.log("Nome completo : " + nome + " " + exemploEscopoLocal)

//criando constantes
// para criar constantes utilizamos a palavra chave const
//utilizamos a função querySelector para selecionar o elemento HTML com seletores css

//const elementoInput = document.querySelector("button")


//Acessando o elemento  e alterado o texto
//elemento.innerHTMML = "Alterado o texto"

//utilizamos a função querySelectorAll para selecionar todos os elementos do HTML com seletores css
//const elemento = document.quertSelectorAll("a")

//Acessando um elemento especifico da lista de elementos 
//const elemento2 = elementos[3]

//Alterando o texto do elemento
//elemento[3].innerHTML = "Alterado o texto do elemento"

//Acessando o valor do atributo href do elemento
//console.log(elemento2.getAttributo("href"))
//console.table(elementos)

//VETORES / ARRAYS
//var frutas =["Bannas", "Maçã", "Uva"]

//Acessando um elemento específico do vetor
//console.log(frutas[1])

//Adicionando um elemento no vetor
//frutas.push("Melão")

//Acessando um elemento no vetor que foi adicionado
//console.log(frutas[3])

//Acessando o tamanho do vetor 
//console.log(frutas.length)

//Removendo um elemento do vetor 
//frutas.pop()

//Acessando o tamanho do vetor 
//console.log(frutas.length)

//Removendo um elemento  inicio do vetor
//frutas.shift()
//console.log(frutas[0])

//Imprimindo todos os elementos do vetor
//console.log(frutas)

//console.table imprime o vetor como uma tabela
//console.table(frutas)

//Loop for para percorrer o vetor
//for(let i = 0;  i < frutas.length; i++){
   // console.log("Valor de i: " + frutas[i])
//}
//var carros = ["Fusca", "Gol", "Palio", "Uno"]
//Loop forof para percorrer o vetor
//O for of recebe um objeto e percorre os elementos do objeto
//O for of retorna o valor do elemento
//for(let carro of carros){
    //console.log("Valor de carro: " + carro)
//}

//Loop forin para pencorrer o vetor
//O for in retornará o indice do vetor 
//var verduras = ["Batatas", "Cenouras", "Cebola"]
//for(let verdura in verduras){
    //console.log("Indice dos produtos de verdura: " + verduras[verdura])
//}

//atrelando um evento de mouse ao elemento, utilizando um EventListener
//seria algo como um escutador de eventos
//ele recebe como parâmetros(Evento.função)
//elementoInput.addEventListener("click", function(){

   // alert('TESTE')
//})


//Exemplo de uma função básica
//function soma(numero1, numero2){
    //Declarando variaveis
     //let resultado = (parseInt(numero1) + parseInt(numero2))
    //console.log(resultado)
    //Selecionando um elemento HTML e alterado o texto
    //document.querySelector(".font-google").innerHTML = resultado
//}

//soma(5, 5)

//Exemplo de uma função com parâmetros
//function soma(numero1, numero2){
    //Declarando variaveis
    //let resultado = (parseInt(numero1) + parseInt(numero2))
    //console.log(resultado)

    //selecionando um elemento HTML e akterando o texto
    //com querySelectorAll
    //const links = document.querySelectorAll("a")
    //console.log(links[2])
//}

//soma("15", "15")

//Exemplo de uma função com parâmetros
//function processandoElemento(elemento,cor){
    //Declarando constantes
    //const elementoSelecionado = document.querySelectorAll(elemento)

    //Alterando o estilo dos elementos
   // for(let i = o; i < elementoSelecionado.length; i++){
       // elementoSelecionado[i].style.backgroundColor = cor
   // }


    //Imprimindo o elemento selecionado com console.log
   // console.log(elementoSelecionado)
//}
//Executa a função com o parâmetro precessandoElemento
//Passando o parâmeto para a função
//procecssandoElemento("div ul li", "#ffffff")

//Exemplo de uma função que adiciona atributos a um elemento
//function adicionarAtributo(elemento, atributo, valor){
    //Declarando constgantge
    //const elementoSelecionado = document.querySelectorAll(elemento)
    //for(let i = 0; i < elementoSelecionado.length; i++)
    
    //console.log(Math.round(Math.random()))
    
   // {
       // elementoSelecionado[Math,random()].src = valor
   // }
//}

//Executa a função com o parâmetro adiconarAtrinuto
//Passando o parâmetro para a função
//adicionarAtributo("div ul li img",  "./img/email.png")

//Exercício da Lâmpada
//Crie um programa que simule a luz de uma lâmpada.
/*
    1. Crie 2 botões, um para ligar e outro para desligar a lâmpada.
    2. Crie uma div e adicione um elemento img com o id "img-lampada"
    3. Crie um evento para o botão ligar, que adicione o atributo src da imagem com o valor "img/lampada-acesa.png"
    4. Crie um evento para o botão desligar, que adicione o atributo src da imagem com o valor "img/lampada-apagada.png"
*/

function ligar(){
    document.getElementById('lamp').src='pic_on.gif'
}

function desligar(){
    document.getElementById('lamp').src='pic_off.gif'
}

