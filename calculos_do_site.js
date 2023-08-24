var button = document.getElementById('calcular')

button.addEventListener('click',calculo)

function calculo(){
    var a = parseFloat(document.getElementById('a').value)
    var b = parseFloat(document.getElementById('b').value)
    var c = parseFloat(document.getElementById('c').value)
    var delta = (b**2) - (4*a*c)

    document.getElementById('delta').innerHTML = 'Delta  = ' + delta

    if (delta > 0 ){
        var raiz1 = (-b + Math.sqrt(delta)) / (2*a)

        var raiz2 = (-b - Math.sqrt(delta)) / (2*a)

        document.getElementById('res1').innerHTML = 'Resultado 1 = ' + raiz1 
        document.getElementById('res2').innerHTML = 'Resultado 2 = ' + raiz2 
    } else if (delta === 0){
        var raiz = (-b ) / (2*a)

        document.getElementById('res1').innerHTML = 'Resultado  = ' + raiz
        document.getElementById('res2').innerHTML = ''
    } else if (delta < 0){
        document.getElementById('res1').innerHTML = 'Delta < 0, não exitem raízes reias.'
        document.getElementById('res2').innerHTML = ''
    }


}