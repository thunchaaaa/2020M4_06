document.getElementById('ok').addEventListener('click', function (e) {
    alert('ok is ok ')
    console.log(e)
}
)
document.getElementById('cancel').addEventListener('click', function (e) {
    alert('ok is cancel ')
    console.log(e)
}
)
document.getElementById('no').addEventListener('click', function (e) {
    alert('ok is no ')
    console.log(e)
}
)
document.getElementById('cancel').addEventListener('mousemove', function (c) {
    var x = c.client;
    var y = c.client;
    console.log('x:' + x + ',' + 'y:' + y)
}
)


document.getElementById('ok').addEventListener('mousemove', function (c) {
    var x = c.client;
    var y = c.client;
    console.log('x:' + x + ',' + 'y:' + y)
}
)

document.getElementById('no').addEventListener('mousemove', function (c) {
    var x = c.client;
    var y = c.client;
    console.log('x:' + x + ',' + 'y:' + y)
}
)
Aa

