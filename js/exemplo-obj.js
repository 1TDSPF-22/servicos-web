//Exemplo de criação de Objeto em Javascript
//var pessoa = {}
//console.log(pessoa)

//Exemplo de criação de Objeto em Javascript
var pessoa = {
    nome:"Beatriz",
    idade:24,
    interesses:['musica', 'games', 'pokemon'],
    geral: function(){
        console.log(`${this.nome} tem ${this.idade} anos de idade. Ela gosta de ${this.interesses[0]}, ${this.interesses[1]} e ${this.interesses[2]} .`)
    },
    saudacao:function(){
        alert(`Oi, eu sou ${this.nome}`)
    }
}

//Imprimindo um objeto
console.log(pessoa)

//Acessando um atributo
console.log(pessoa.nome)
//console.log(pessoa["nome"])

//Executando métodos do objeto
pessoa.geral()
pessoa.saudacao()

//Instanciar um objeto
var pessoa = {
    nome:"",
    email:""
}

//Recuperando os campos e populando um novo objeto
const botaoSubmit = document.getElementById("btnCadCli")

//Atrelar listen ao evento de botão para que eu possa
//recuperar os dados dos inputs(campos) assim que ele (botão) for clicado
botaoSubmit.addEventListener("click", ()=>{
    //Recuperando todos os inputs com querySelectorAll
    const todosInputs = document.querySelectorAll("input")
    pessoa.nome = todosInputs[0].value
    pessoa.email = todosInputs[1].value
    console.log("Nome: " + pessoa.nome)
    console.log("E-mail: " + pessoa.email)
})

//Imprimindo o objeto com os dados recuperados
//console.log("Nome: " + pessoa.nome)
//console.log("E-mail: " + pessoa.email)