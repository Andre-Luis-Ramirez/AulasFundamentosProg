function preencherVetor(q){
    var vet=[];
    for(var i=0; i<q; i++){
        vet[i]= Number(prompt('Informe o valor: '));

        while(isNaN(vet[i])){
        alert('Digite um valor numérico!');
        vet[i]= Number(prompt('Informe o valor: '));
        }
    }
    return vet;

}
function exibirVetor(n, vet){
    for(var i=0; i<n; i++){
        document.write('vetor[',i,']= ',vet[i], '<br>');
    }
}
function somarDoisVetores(n, vet1,vet2){
    var vetSoma=[];
    for(var i=0; i<n; i++){
        vetSoma[i] = vet1[i] + vet2[i];
    }
    return vetSoma;
}
function somarVetor(vet){
    var soma=0;
    for(var i=0; i<vet.length; i++){
        soma = soma + vet[i];
    }
    return soma;
}
function contarPares(vet){
    var qtd=0;
    for(var i=0; i<vet.length; i++){
        if(vet[i] % 2 == 0){
            qtd++;
        }
    }
    return qtd;
}
function contarImpares(vet){
    var qtd=0;
    for(var i=0; i<vet.length; i++){
        if(vet[i] % 2 != 0){
            qtd++;
        }
    }
    return qtd;
}