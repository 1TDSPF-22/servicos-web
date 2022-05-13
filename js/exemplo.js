// Função que adiciona atributo ao um elemento
function adicionarAtributo(elemento, valor) {
    const elementoSelecionado = document.querySelector(elemento)
    elementoSelecionado.src = valor
}

// Pega o botão pelo id
const btn = document.getElementById("btn")
const colors = ["red", "green"]
let index = 0

// Evento click e estilização do botão
btn.addEventListener("click", onClick);
btn.innerHTML = "CLICK AQUI"
btn.style.fontWeight = "bold"
btn.style.backgroundColor = "#F5DEB3"

// Função para trocar o img, background-color e a escrita do botão
function onClick(){
    btn.style.backgroundColor = colors[index]
    index = index >= (colors.length - 1) ? 0 : index + 1;
    if (btn.style.backgroundColor = colors[index] == 'green') {
        adicionarAtributo("#img-lampada", "./img/pic_off.gif");
        btn.innerHTML = "DESLIGADO";
    } else {
        adicionarAtributo("#img-lampada", "./img/pic_on.gif");
        btn.innerHTML = "LIGADO"
    }
}

/* index - Cada vez que o botão é clicado, incrementa o valor na variável index 
ou defini de volta para 0.
*/

//Função MATH e suas rotinas
//console.log("ELEVAÇÃO EXPOENTE : " + ( Math.pow(10,3)))
//console.log("Números randômicos : " + (Math.ceil(Math.random()*5)))
//console.log("Números randômicos : " + (Math.round(Math.random()*100)))



function alteraDiv(){
    document.getElementById("quadro-cores").style.backgroundColor = "yellow"
document.getElementById("quadro-cores").style.height = "250px"
document.getElementById("quadro-cores").style.width = "250px"


//Math.round(Math.random()*100)

    //TROCAR DE COR DE FUNDO
    let r = Math.round(math.random()*255)
    let g = Math.round(math.random()*255)
    let b = Math.round(math.random()*255)
    
    //UTILIZANDO CONCATENAÇÃO PARA UNIR VALORES
    
    document.getElementById("quadro-cores").style.backgroundColor =`rgb(${r},${g}.${b})`

}

//setTimeout(alteraDiv, 3000)
setInterval(alteraDiv, 1000)
