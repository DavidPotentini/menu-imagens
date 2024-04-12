var img = window.document.getElementsByClassName('imagem')
var indice=0

window.onload = function(){
    for(var i=1;i<img.length;i++){
        img[i].style.display = 'none'
    }
}

function proximo(){
    img[indice].style.display = 'none'
    indice=(indice==img.length-1)?0:indice+1
    img[indice].style.display = 'block'
}

function anterior(){
    img[indice].style.display = 'none'
    indice=(indice==0)?img.length-1:indice-1
    img[indice].style.display = 'block'
}