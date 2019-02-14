/*Javascript file*/
function main() {
    console.log('Hola gozon');
    var button1 = document.getElementById("1")
    button1.onclick = () => {
       console.log('Hago click');
       var display = document.getElementById('display');
       display.innerHTML = '1';
   }
}
