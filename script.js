function contar() {
    var ini = document.getElementById('txt1')
    var fim = document.getElementById('txt2')
    var pas = document.getElementById('txt3')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
        window.alert('[ERRO] faltam dados')
    }else {
        res.innerHTML = "contando: <br>"
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if(p <= 0){
            window.alert('passo invalido, considerando passo 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F6B6}`
            }
        } else {
            //contagem decrescente.
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F6B6}`
            }

        }
        res.innerHTML += `${c} \u{1F3c1}`
    }
}