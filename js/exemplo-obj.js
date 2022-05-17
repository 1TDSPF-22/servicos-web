
//Exemplo de Objetos em Javascript
//var pessoa = {}

//console.log(pessoa)

//Exemplo de criação Objeto em Javascript
var pessoa ={
    nome:"Vinícius",
    idade:17,
    interesses:['Aposentar', 'Viajar', 'Carro voador'],
    geral: function(){
        console.log(`${this.nome} tem ${this.idade} anos de idade. Ele tem interesse em ${this.interesses[0]}, ${this.interesses[1]} e ${this.interreses[2]}.`)
    },

    saudacao:function(){
        alert(`Meu nome é ${this.nome}`)
    }
}

//Imprimindo o objeto
//console.log(pessoa)

//Acessando um atributo

//console.log(pessoa.nome)
console.log(pessoa["nome"])

//Executado metodos do objeto
pessoa.geral()
pessoa.saudacao()
