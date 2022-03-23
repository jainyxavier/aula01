var btnCalcMedia = document.querySelector('#btn-calc')
var mediaAluno = document.querySelector('#media-aluno')
var statusAluno = document.querySelector('#status-aluno')

btnCalcMedia.addEventListener('click', function(){
    var notaPrimeiroBimestre = parseInt(document.querySelector('#nota1').value)
    var notaSegundoBimestre = parseInt(document.querySelector('#nota2').value) 
    var notaTerceiroBimestre = parseInt(document.querySelector('#nota3').value) 
    var notaQuartoBimestre = parseInt(document.querySelector('#nota4').value)

    var soma = notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre

    var notaFinal = soma / 4

    var notaFixada = notaFinal.toFixed(1)

    console.log(notaFixada)

    if (notaFixada >= 6){
        mediaAluno.innerHTML = 'Média anual do aluno: ' + notaFixada
        statusAluno.innerHTML = 'Resultado: Aprovado'
    }else{
        mediaAluno.innerHTML = 'Média anual do aluno: ' + notaFixada
        statusAluno.innerHTML = 'Resultado: Reprovado'
    }

})