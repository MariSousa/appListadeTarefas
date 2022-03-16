var bttLista = document.getElementById('bttLista')
bttLista.focus()

var bttLimpar = document.getElementById('bttLimpar')

var tarefasDiarias = []

function adicionarTarefas(){
    var adicionarLista = document.getElementById('adicionarLista')

    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = 'tarefas'
    checkbox.value = 'value'
    checkbox.id = 'tarefas'

    var label = document.createElement('label')

    //label.htmlFor = 'tarefas'

    label.appendChild(document.createTextNode(bttLista.value))

    adicionarLista.appendChild(checkbox)
    adicionarLista.appendChild(label)
   

    tarefasDiarias.push(bttLista.value)
    console.log(tarefasDiarias)

    bttLista.value = ''
    bttLista.focus()

 
}

bttLimpar.addEventListener('click', function(){
    adicionarLista.innerHTML = ''
    bttLista.value = ''
    bttLista.focus()
})

//Dia atual
var bttDia = document.getElementById('bttDia')
var dataAtual = new Date()
dataDiaHoje = dataAtual.getDate()
dataMesAtual = dataAtual.getMonth()+1
dataAnoAtual = dataAtual.getFullYear()
bttDia.innerHTML = `Hoje: ${dataDiaHoje}/${dataMesAtual}/${dataAnoAtual} <br> O que temos para fazer?`

