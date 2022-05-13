function addAtributo(elemento, valor){
    const elementoSelecionado = document.querySelector(elemento)
    elementoSelecionado.src = valor
}

const btn = document.getElementById("btn")
const colors = ["red", "green"]
let index = 0

btn.addEventListener("click", onClick)
btn.innerHTML = "CLICK AQUI"
btn.style.fontWeight = "bold"
btn.style.backgroundColor = "#F5DEB3"

// Função para trocar o img, background-color e a escrita do botão
function onClick(){
    btn.style.backgroundColor = colors[index]
    index = index >= (colors.length - 1) ? 0 : index + 1
    if (btn.style.backgroundColor = colors[index] == 'green') {
        addAtributo("#img-lampada", "./img/pic_off.gif")
        btn.innerHTML = "DESLIGADO"
    } else {
        addAtributo("#img-lampada", "./img/pic_on.gif")
        btn.innerHTML = "LIGADO"
    }
}

//Funções Math
//Random e ceil/
// console.log("Números randômicos: " + (Math.round(Math.random()*5)))
// console.log("Números randômicos: " + (Math.ceil(Math.random()*5)))



function alteraDiv(){
    document.getElementById("quadro-cores").style.backgroundColor = "blue" 
    document.getElementById("quadro-cores").style.height = "250px"
    document.getElementById("quadro-cores").style.width = "250px"


    let r = Math.ceil(Math.random()*255)
    let g = Math.ceil(Math.random()*255)
    let b = Math.ceil(Math.random()*255)
    //document.getElementById("quadro-cores").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
    document.getElementById("quadro-cores").style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

//setTimeout(alteraDiv, 1500)
setInterval(alteraDiv, 1000)