
function carregar (){

    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora <12){
        document.body.style.background = '#cefc4f'
        img.src = 'manha.jpg'
    } else if (hora > 12 && hora <18){
        document.body.style.background = '#4ffcdc'
        img.src = 'tarde.jpg'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background =  '#215b50'
    }

}