function mensagemPersonalizada(nome){
    alert('Parabéns '+ nome);
}
function exibirSituacao(nota, media){
    if(nota >= media){
        alert('Aprovado');
    }else{
        alert('Reprovado');
    }
}
function retornarSituacao(nota, media){
    
    if(nota >= media){
        return 'aprovado';
    }else{
        return 'Reprovado';
    }
}
function metade(num){
    return num/2;
}
function dividir(num1, num2){
    return num1/num2
}
function pedirComida(){
    document.write(comida, '<br>')
}