/*Javascript file*/
function main() {
    var gui  ={
        b1:document.getElementById('b1'),
        b2:document.getElementById('b2'),
        b3:document.getElementById('b3'),
        b4:document.getElementById('b4'),
        b5:document.getElementById('b5'),
        b6:document.getElementById('b6'),
        b7:document.getElementById('b7'),
        b8:document.getElementById('b8'),
        b9:document.getElementById('b9'),
        b0:document.getElementById('b0'),
        bplus:document.getElementById('b+'),
        bminus:document.getElementById('b-'),
        bdivided:document.getElementById('b/'),
        bby:document.getElementById('bx'),
        bequal:document.getElementById('b='),
        bdel:document.getElementById('bDEL')
    }

    gui.b1.onclick = () => {
       var display = document.getElementById('display');
       display.innerHTML += gui.b1.name;
    }
    gui.b2.onclick = () => {
       var display = document.getElementById('display');
       display.innerHTML += gui.b2.name;
    }
    gui.b3.onclick = () => {
       var display = document.getElementById('display');
       display.innerHTML += gui.b3.name;
    }
    gui.b4.onclick = () => {
       var display = document.getElementById('display');
       display.innerHTML += gui.b4.name;
    }
    gui.b5.onclick = () => {
       var display = document.getElementById('display');
       display.innerHTML += gui.b5.name;
    }
    gui.b6.onclick = () => {
       var display = document.getElementById('display');
       display.innerHTML += gui.b6.name;
    }
    gui.b7.onclick = () => {
       var display = document.getElementById('display');
       display.innerHTML += gui.b7.name;
    }
    gui.b8.onclick = () => {
       var display = document.getElementById('display');
       display.innerHTML += gui.b8.name;
    }
    gui.b9.onclick = () => {
       var display = document.getElementById('display');
       display.innerHTML += gui.b9.name;
    }
    gui.b0.onclick = () => {
       var display = document.getElementById('display');
       display.innerHTML += gui.b0.name;
    }
    gui.bplus.onclick = () => {
       var display = document.getElementById('display');
       display.innerHTML += gui.bplus.name;
    }
    gui.bminus.onclick = () => {
       var display = document.getElementById('display');
       display.innerHTML += gui.bminus.name;
    }
    gui.bdivided.onclick = () => {
       var display = document.getElementById('display');
       display.innerHTML += gui.bdivided.name;
    }
    gui.bdby.onclick = () => {
       var display = document.getElementById('display');
       display.innerHTML += gui.bdby.name;
    }
    gui.bdel.onclick = () => {
       var display = document.getElementById('display');
       display.innerHTML =  "";
     //borrar del display
    }
    gui.bequal.onclick = () => {
       //Llamar a la funcion que calcule
    }
}
