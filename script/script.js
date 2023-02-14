function inserir(num) {
    document.getElementById('result').innerHTML += num;
}

function clean () {
    document.getElementById('result').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    var resul = document.getElementById('result').innerHTML;
    if(resul){
    document.getElementById('result').innerHTML = eval(resul)
    } else {
        document.getElementById('result').innerHTML = 'nada..'
    }
}