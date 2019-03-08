/*Javascript file*/
function main() {
    var cal ={
      gui: {
        display1:document.getElementById('display1'),
        display2:document.getElementById('display2'),
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
        bdot:document.getElementById('b.')
      },

      add_element: function(input){
        this.gui.display2.innerHTML += input;
      },

      calc_result: function(){
        answer();
        this.gui.display2.innerHTML = "";
      },

      answer: function(){
        var exp = document.getElementById("display2").innerText
        var plus = exp.search('+');
        var minus = exp.search('-');
        var by = exp.search('x');
        var div = exp.search('/');
        this.gui.display1.innerHTML = exp;
      }
    }

    cal.gui.b1.onclick = () => {
       cal.add_element(cal.gui.b1.name);
    }
    cal.gui.b2.onclick = () => {
       cal.add_element(cal.gui.b2.name);
    }
    cal.gui.b3.onclick = () => {
       cal.add_element(cal.gui.b3.name);
    }
    cal.gui.b4.onclick = () => {
       cal.add_element(cal.gui.b4.name);
    }
    cal.gui.b5.onclick = () => {
       cal.add_element(cal.gui.b5.name);
    }
    cal.gui.b6.onclick = () => {
       cal.add_element(cal.gui.b6.name);
    }
    cal.gui.b7.onclick = () => {
       cal.add_element(cal.gui.b7.name);
    }
    cal.gui.b8.onclick = () => {
       cal.add_element(cal.gui.b8.name);
    }
    cal.gui.b9.onclick = () => {
       cal.add_element(cal.gui.b9.name);
    }
    cal.gui.b0.onclick = () => {
       cal.add_element(cal.gui.b0.name);
    }
    cal.gui.bdot.onclick = () => {
       cal.add_element(cal.gui.bdot.name);
   }
    cal.gui.bplus.onclick = () => {
       cal.add_element(cal.gui.bplus.name);
    }
    cal.gui.bminus.onclick = () => {
       cal.add_element(cal.gui.bminus.name);
    }
    cal.gui.bby.onclick = () => {
       cal.add_element(cal.gui.bby.name);
    }
    cal.gui.bdivided.onclick = () => {
       cal.add_element(cal.gui.bdivided.name);
    }
    cal.gui.bequal.onclick = () => {
      cal.calc_result();
    }

}
