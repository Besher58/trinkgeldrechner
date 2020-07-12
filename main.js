
let a = document.getElementById('geld')
let b = document.getElementById('per')
let f = document.getElementById('wie')
let c = document.getElementById('sch')
let d = document.getElementById('ok')
let e = document.getElementById('sup')
let r = document.getElementById('mont')



function schlecht() {
    let x = a.value * 2 / 100
    let y = +x + +a.value
    let z = y / b.value
    if (a.value <= 0) {
        document.getElementById('hier').innerHTML = 'Bitte geben Sie einen gültigen Wert'
        document.getElementById('hier').style.color = 'red'
        document.getElementById('hier1').innerHTML = ''
    } else if (b.value <= 0) {
        document.getElementById('hier1').innerHTML = 'Bitte geben Sie einen gültigen Wert'
        document.getElementById('hier1').style.color = 'red'
        document.getElementById('hier').innerHTML = ''
    } else {
        document.getElementById('trink').innerHTML = 'Das Trinkgeld ist: ' + x + ' €'
        document.getElementById('gesammt').innerHTML = 'Die Gesammtsumme beträgt: ' + y + ' €'
        document.getElementById('preis').innerHTML = 'Der Preis pro Person ist: ' + z.toFixed(2) + ' €'
        document.getElementById('hier').innerHTML = ''
        document.getElementById('hier1').innerHTML = ''
    }
}
function ok() {
    let x1 = a.value * 10 / 100
    let y1 = +x1 + +a.value
    let z1 = y1 / b.value
    if (a.value <= 0) {
        document.getElementById('hier').innerHTML = 'Bitte geben Sie einen gültigen Wert'
        document.getElementById('hier').style.color = 'red'
        document.getElementById('hier1').innerHTML = ''
    } else if (b.value <= 0) {
        document.getElementById('hier1').innerHTML = 'Bitte geben Sie einen gültigen Wert'
        document.getElementById('hier1').style.color = 'red'
        document.getElementById('hier').innerHTML = ''
    } else {
        document.getElementById('trink').innerHTML = 'Das Trinkgeld ist: ' + x1 + ' €'
        document.getElementById('gesammt').innerHTML = 'Die Gesammtsumme beträgt: ' + y1 + ' €'
        document.getElementById('preis').innerHTML = 'Der Preis pro Person ist: ' + z1.toFixed(2) + ' €'
        document.getElementById('hier').innerHTML = ''
        document.getElementById('hier1').innerHTML = ''
    }
}
function supr() {
    let x2 = a.value * 20 / 100
    let y2 = +x2 + +a.value
    let z2 = y2 / b.value
    if (a.value <= 0) {
        document.getElementById('hier').innerHTML = 'Bitte geben Sie einen gültigen Wert'
        document.getElementById('hier').style.color = 'red'
        document.getElementById('hier1').innerHTML = ''
    } else if (b.value <= 0) {
        document.getElementById('hier1').innerHTML = 'Bitte geben Sie einen gültigen Wert'
        document.getElementById('hier1').style.color = 'red'
        document.getElementById('hier').innerHTML = ''
    } else {
        document.getElementById('trink').innerHTML = 'Das Trinkgeld ist: ' + x2 + ' €'
        document.getElementById('gesammt').innerHTML = 'Die Gesammtsumme beträgt: ' + y2 + ' €'
        document.getElementById('preis').innerHTML = 'Der Preis pro Person ist: ' + z2.toFixed(2) + ' €'
        document.getElementById('hier').innerHTML = ''
        document.getElementById('hier1').innerHTML = ''
    }
}
function select() {
    if (a.value <= 0) {
        document.getElementById('hier').innerHTML = 'Bitte geben Sie einen gültigen Wert'
        document.getElementById('hier').style.color = 'red'
        document.getElementById('hier1').innerHTML = ''
    } else if (b.value <= 0) {
        document.getElementById('hier1').innerHTML = 'Bitte geben Sie einen gültigen Wert'
        document.getElementById('hier1').style.color = 'red'
        document.getElementById('hier').innerHTML = ''
    } else if (a.value > 0 && b.value > 0) {
        alert('Sie müssen eingeben, wie der Service war')
        document.getElementById('trink').innerHTML = ''
        document.getElementById('gesammt').innerHTML = ''
        document.getElementById('preis').innerHTML = ''
        document.getElementById('hier').innerHTML = ''
        document.getElementById('hier1').innerHTML = ''
    }
}
function jan() {
    document.getElementById('jan').style.display = 'block'
    document.getElementById('feb').style.display = 'none'
    document.getElementById('mar').style.display = 'none'
    document.getElementById('apr').style.display = 'none'
    document.getElementById('mai').style.display = 'none'
    document.getElementById('jun').style.display = 'none'
    document.getElementById('jul').style.display = 'none'
    document.getElementById('aug').style.display = 'none'
    document.getElementById('sep').style.display = 'none'
    document.getElementById('oct').style.display = 'none'
    document.getElementById('nov').style.display = 'none'
    document.getElementById('dec').style.display = 'none'
}
function feb() {
    document.getElementById('feb').style.display = 'block'
    document.getElementById('jan').style.display = 'none'
    document.getElementById('mar').style.display = 'none'
    document.getElementById('apr').style.display = 'none'
    document.getElementById('mai').style.display = 'none'
    document.getElementById('jun').style.display = 'none'
    document.getElementById('jul').style.display = 'none'
    document.getElementById('aug').style.display = 'none'
    document.getElementById('sep').style.display = 'none'
    document.getElementById('oct').style.display = 'none'
    document.getElementById('nov').style.display = 'none'
    document.getElementById('dec').style.display = 'none'
}
function mar() {
    document.getElementById('mar').style.display = 'block'
    document.getElementById('feb').style.display = 'none'
    document.getElementById('jan').style.display = 'none'
    document.getElementById('apr').style.display = 'none'
    document.getElementById('mai').style.display = 'none'
    document.getElementById('jun').style.display = 'none'
    document.getElementById('jul').style.display = 'none'
    document.getElementById('aug').style.display = 'none'
    document.getElementById('sep').style.display = 'none'
    document.getElementById('oct').style.display = 'none'
    document.getElementById('nov').style.display = 'none'
    document.getElementById('dec').style.display = 'none'
}
function apr() {
    document.getElementById('apr').style.display = 'block'
    document.getElementById('feb').style.display = 'none'
    document.getElementById('mar').style.display = 'none'
    document.getElementById('jan').style.display = 'none'
    document.getElementById('mai').style.display = 'none'
    document.getElementById('jun').style.display = 'none'
    document.getElementById('jul').style.display = 'none'
    document.getElementById('aug').style.display = 'none'
    document.getElementById('sep').style.display = 'none'
    document.getElementById('oct').style.display = 'none'
    document.getElementById('nov').style.display = 'none'
    document.getElementById('dec').style.display = 'none'
}
function mai() {
    document.getElementById('mai').style.display = 'block'
    document.getElementById('feb').style.display = 'none'
    document.getElementById('mar').style.display = 'none'
    document.getElementById('apr').style.display = 'none'
    document.getElementById('jan').style.display = 'none'
    document.getElementById('jun').style.display = 'none'
    document.getElementById('jul').style.display = 'none'
    document.getElementById('aug').style.display = 'none'
    document.getElementById('sep').style.display = 'none'
    document.getElementById('oct').style.display = 'none'
    document.getElementById('nov').style.display = 'none'
    document.getElementById('dec').style.display = 'none'
}
function jun() {
    document.getElementById('jun').style.display = 'block'
    document.getElementById('feb').style.display = 'none'
    document.getElementById('mar').style.display = 'none'
    document.getElementById('apr').style.display = 'none'
    document.getElementById('mai').style.display = 'none'
    document.getElementById('jan').style.display = 'none'
    document.getElementById('jul').style.display = 'none'
    document.getElementById('aug').style.display = 'none'
    document.getElementById('sep').style.display = 'none'
    document.getElementById('oct').style.display = 'none'
    document.getElementById('nov').style.display = 'none'
    document.getElementById('dec').style.display = 'none'
}
function jul() {
    document.getElementById('jul').style.display = 'block'
    document.getElementById('feb').style.display = 'none'
    document.getElementById('mar').style.display = 'none'
    document.getElementById('apr').style.display = 'none'
    document.getElementById('mai').style.display = 'none'
    document.getElementById('jun').style.display = 'none'
    document.getElementById('jan').style.display = 'none'
    document.getElementById('aug').style.display = 'none'
    document.getElementById('sep').style.display = 'none'
    document.getElementById('oct').style.display = 'none'
    document.getElementById('nov').style.display = 'none'
    document.getElementById('dec').style.display = 'none'
}
function aug() {
    document.getElementById('aug').style.display = 'block'
    document.getElementById('feb').style.display = 'none'
    document.getElementById('mar').style.display = 'none'
    document.getElementById('apr').style.display = 'none'
    document.getElementById('mai').style.display = 'none'
    document.getElementById('jun').style.display = 'none'
    document.getElementById('jul').style.display = 'none'
    document.getElementById('jan').style.display = 'none'
    document.getElementById('sep').style.display = 'none'
    document.getElementById('oct').style.display = 'none'
    document.getElementById('nov').style.display = 'none'
    document.getElementById('dec').style.display = 'none'
}
function sep() {
    document.getElementById('sep').style.display = 'block'
    document.getElementById('feb').style.display = 'none'
    document.getElementById('mar').style.display = 'none'
    document.getElementById('apr').style.display = 'none'
    document.getElementById('mai').style.display = 'none'
    document.getElementById('jun').style.display = 'none'
    document.getElementById('jul').style.display = 'none'
    document.getElementById('aug').style.display = 'none'
    document.getElementById('jan').style.display = 'none'
    document.getElementById('oct').style.display = 'none'
    document.getElementById('nov').style.display = 'none'
    document.getElementById('dec').style.display = 'none'
}
function oct() {
    document.getElementById('oct').style.display = 'block'
    document.getElementById('feb').style.display = 'none'
    document.getElementById('mar').style.display = 'none'
    document.getElementById('apr').style.display = 'none'
    document.getElementById('mai').style.display = 'none'
    document.getElementById('jun').style.display = 'none'
    document.getElementById('jul').style.display = 'none'
    document.getElementById('aug').style.display = 'none'
    document.getElementById('sep').style.display = 'none'
    document.getElementById('jan').style.display = 'none'
    document.getElementById('nov').style.display = 'none'
    document.getElementById('dec').style.display = 'none'
}
function nov() {
    document.getElementById('nov').style.display = 'block'
    document.getElementById('feb').style.display = 'none'
    document.getElementById('mar').style.display = 'none'
    document.getElementById('apr').style.display = 'none'
    document.getElementById('mai').style.display = 'none'
    document.getElementById('jun').style.display = 'none'
    document.getElementById('jul').style.display = 'none'
    document.getElementById('aug').style.display = 'none'
    document.getElementById('sep').style.display = 'none'
    document.getElementById('oct').style.display = 'none'
    document.getElementById('jan').style.display = 'none'
    document.getElementById('dec').style.display = 'none'
}
function dec() {
    document.getElementById('dec').style.display = 'block'
    document.getElementById('feb').style.display = 'none'
    document.getElementById('mar').style.display = 'none'
    document.getElementById('apr').style.display = 'none'
    document.getElementById('mai').style.display = 'none'
    document.getElementById('jun').style.display = 'none'
    document.getElementById('jul').style.display = 'none'
    document.getElementById('aug').style.display = 'none'
    document.getElementById('sep').style.display = 'none'
    document.getElementById('oct').style.display = 'none'
    document.getElementById('nov').style.display = 'none'
    document.getElementById('jan').style.display = 'none'
}
function rech() {
    if (f.selected == true) {
        select()
    } else if (c.selected == true && r.value == 'jan') {
        schlecht()
        jan()
        document.getElementById('war').innerHTML = ''
    } else if (c.selected == true && r.value == 'feb') {
        schlecht()
        feb()
        document.getElementById('war').innerHTML = ''
    } else if (c.selected == true && r.value == 'mar') {
        schlecht()
        mar()
        document.getElementById('war').innerHTML = ''
    } else if (c.selected == true && r.value == 'apr') {
        schlecht()
        apr()
        document.getElementById('war').innerHTML = ''
    } else if (c.selected == true && r.value == 'mai') {
        schlecht()
        mai()
        document.getElementById('war').innerHTML = ''
    } else if (c.selected == true && r.value == 'jun') {
        schlecht()
        jun()
        document.getElementById('war').innerHTML = ''
    } else if (c.selected == true && r.value == 'jul') {
        schlecht()
        jul()
        document.getElementById('war').innerHTML = ''
    } else if (c.selected == true && r.value == 'aug') {
        schlecht()
        aug()
        document.getElementById('war').innerHTML = ''
    } else if (c.selected == true && r.value == 'sep') {
        schlecht()
        sep()
        document.getElementById('war').innerHTML = ''
    } else if (c.selected == true && r.value == 'oct') {
        schlecht()
        oct()
        document.getElementById('war').innerHTML = ''
    } else if (c.selected == true && r.value == 'nov') {
        schlecht()
        nov()
        document.getElementById('war').innerHTML = ''
    } else if (c.selected == true && r.value == 'dec') {
        schlecht()
        dec()
        document.getElementById('war').innerHTML = ''
    } else if (d.selected == true && r.value == 'jan') {
        ok()
        jan()
        document.getElementById('war').innerHTML = ''
    } else if (d.selected == true && r.value == 'feb') {
        ok()
        feb()
        document.getElementById('war').innerHTML = ''
    } else if (d.selected == true && r.value == 'mar') {
        ok()
        mar()
        document.getElementById('war').innerHTML = ''
    } else if (d.selected == true && r.value == 'apr') {
        ok()
        apr()
        document.getElementById('war').innerHTML = ''
    } else if (d.selected == true && r.value == 'mai') {
        ok()
        mai()
        document.getElementById('war').innerHTML = ''
    } else if (d.selected == true && r.value == 'jun') {
        ok()
        jun()
        document.getElementById('war').innerHTML = ''
    } else if (d.selected == true && r.value == 'jul') {
        ok()
        jul()
        document.getElementById('war').innerHTML = ''
    } else if (d.selected == true && r.value == 'aug') {
        ok()
        aug()
        document.getElementById('war').innerHTML = ''
    } else if (d.selected == true && r.value == 'sep') {
        ok()
        sep()
        document.getElementById('war').innerHTML = ''
    } else if (d.selected == true && r.value == 'oct') {
        ok()
        oct()
        document.getElementById('war').innerHTML = ''
    } else if (d.selected == true && r.value == 'nov') {
        ok()
        nov()
        document.getElementById('war').innerHTML = ''
    } else if (d.selected == true && r.value == 'dec') {
        ok()
        dec()
        document.getElementById('war').innerHTML = ''
    } else if (e.selected == true && r.value == 'jan') {
        supr()
        jan()
        document.getElementById('war').innerHTML = ''
    } else if (e.selected == true && r.value == 'feb') {
        supr()
        feb()
        document.getElementById('war').innerHTML = ''
    } else if (e.selected == true && r.value == 'mar') {
        supr()
        mar()
        document.getElementById('war').innerHTML = ''
    } else if (e.selected == true && r.value == 'apr') {
        supr()
        apr()
        document.getElementById('war').innerHTML = ''
    } else if (e.selected == true && r.value == 'mai') {
        supr()
        mai()
        document.getElementById('war').innerHTML = ''
    } else if (e.selected == true && r.value == 'jun') {
        supr()
        jun()
        document.getElementById('war').innerHTML = ''
    } else if (e.selected == true && r.value == 'jul') {
        supr()
        jul()
        document.getElementById('war').innerHTML = ''
    } else if (e.selected == true && r.value == 'aug') {
        supr()
        aug()
        document.getElementById('war').innerHTML = ''
    } else if (e.selected == true && r.value == 'sep') {
        supr()
        sep()
        document.getElementById('war').innerHTML = ''
    } else if (e.selected == true && r.value == 'oct') {
        supr()
        oct()
        document.getElementById('war').innerHTML = ''
    } else if (e.selected == true && r.value == 'nov') {
        supr()
        nov()
        document.getElementById('war').innerHTML = ''
    } else if (e.selected == true && r.value == 'dec') {
        supr()
        dec()
        document.getElementById('war').innerHTML = ''
    } else {
        document.getElementById('war').innerHTML = 'geht nicht'
        document.getElementById('war').style.color = 'red'
    }
}

function res() {
    document.getElementById('jan').style.display = 'none'
    document.getElementById('trink').innerHTML = ''
    document.getElementById('gesammt').innerHTML = ''
    document.getElementById('preis').innerHTML = ''
    document.getElementById('hier').innerHTML = ''
    document.getElementById('hier1').innerHTML = ''
    document.getElementById('war').innerHTML = ''
    document.getElementById('dec').style.display = 'none'
    document.getElementById('feb').style.display = 'none'
    document.getElementById('mar').style.display = 'none'
    document.getElementById('apr').style.display = 'none'
    document.getElementById('mai').style.display = 'none'
    document.getElementById('jun').style.display = 'none'
    document.getElementById('jul').style.display = 'none'
    document.getElementById('aug').style.display = 'none'
    document.getElementById('sep').style.display = 'none'
    document.getElementById('oct').style.display = 'none'
    document.getElementById('nov').style.display = 'none'
    document.getElementById('jan').style.display = 'none'
}


