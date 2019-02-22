/*Javascript file*/
function main() {
    console.log('Hola gozon');
    var b1 = document.getElementById('b1')
    var b2 = document.getElementById('b2')
    var b3 = document.getElementById('b3')
    var b4 = document.getElementById('b4')
    var b5 = document.getElementById('b5')
    var b6 = document.getElementById('b6')
    var b7 = document.getElementById('b7')
    var b8 = document.getElementById('b8')
    var b9 = document.getElementById('b9')
    var b0 = document.getElementById('b0')

    b1.onclick = () => {
       console.log('Hago click');
       var display = document.getElementById('display');
       display.innerHTML += b1.name;
    }
}
