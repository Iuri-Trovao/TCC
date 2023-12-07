var botao1 = document.getElementById('botao1')
var botao2 = document.getElementById('botao2')

botao1.addEventListener('click', function(){
    botao1.style.display = 'none'
    botao2.style.display = 'block'

})

botao2.addEventListener('click', function(){
    botao1.style.transition = '1.2s'
    botao1.style.display = 'block'
    botao2.style.display = 'none'
})

var sumir = document.getElementById("sumir")
