
// //Exemplo de criação Objeto em Javascript
// var pessoa = {}
// console.log(pessoa)

//Exemplo de criação Objeto em Javascript
// var pessoa = {
//     nome:"Igor",
//     idade:19,
//     interesses:['futebol','musica','carros'],
//     geral: function(){
//         console.log(`${this.nome} tem ${this.idade} anos de idade. Ele gosta de ${this.interesses[0]}, ${this.interesses[1]} e ${this.interesses[2]} .`)
//     },
//     saudacao:function(){
//         alert(`Oi eu sou ${this.nome}`)
//     }
// }


// //Imprimindo o objeto
// //console.log(pessoa)

// //Acessando um atributo
// // console.log(pessoa.nome)
// console.log(pessoa["nome"])

// //Executando métodos do objeto
// pessoa.geral()
// pessoa.saudacao()

//INTANCIAR UM OBJETO
var pessoa = {
    nome:"",
    email:""
}

//RECUPERANDO OS CAMPOS E POPULANDO UM NOVO OBJETO

const botaoSubmit = document.getElementById("btnCadCli")

//Atrelar listen ao evento de botão para que eu possa
// recuperar os dados dos inputs(campos) assim que ele(botão) for clicado
botaoSubmit.addEventListener("click", ()=>{
    //Recuperando todos os inputs com querySelectorAll
    const todosInputs = document.querySelectorAll("input")
    pessoa.nome  = todosInputs[0].value
    pessoa.email = todosInputs[1].value
    console.log("NOME  : " + pessoa.nome)
    console.log("EMAIL : " + pessoa.email)
})

//IMPRIMINDO O OBJETO COM OS DADOS RECUPERADOS!!


