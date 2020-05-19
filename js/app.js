var Calculadora = {
  init: function(document) {
    this.eventosMouse()
  },
  //variable global con el estado del display
  display: document.getElementById('display'),

  eventosMouse: function() {
    var self = this
    var teclas = document.getElementsByClassName("tecla");
    for (var i = 0; i < teclas.length; i++) {
      teclas[i].onmousedown = function(e) {
        e.target.style = "transform: scale(0.9)";
        self.actualizarDisplay(e.target.id);
      }
      teclas[i].onmouseup = function(e) {
        e.target.style = "transform: scale(1)";
      }
      teclas[i].onmouseout = function(e) {
        e.target.style = "transform: scale(1)";
      }
      }
  },

  digitarNumero: function (tecla) {
    var longitud = display.innerHTML.length;
    if (display.innerHTML.includes("-")) { longitud--;}
    if (display.innerHTML.includes(".")) { longitud--;}
    if (longitud < 8) {
      if (display.innerHTML == "0") {
        display.innerHTML = tecla;
      } else {
        display.append(tecla);
      }
    }
  },

  actualizarDisplay: function (tecla){
    switch (tecla) {
      case "on":
        display.innerHTML = "0";
        break;

      case "sign":
        if (display.innerHTML != "0") {
          if (display.innerHTML.includes("-")){
            display.innerHTML = display.innerHTML.substr(1);
          }else {
            display.innerHTML = "-" + display.innerHTML;
          }
        }
        break;

      case "0":
        this.digitarNumero("0");
        break;
      case "1":
        this.digitarNumero("1");
        break;
      case "2":
        this.digitarNumero("2");
        break;
      case "3":
        this.digitarNumero("3");
        break;
      case "4":
        this.digitarNumero("4");
        break;
      case "5":
        this.digitarNumero("5");
        break;
      case "6":
        this.digitarNumero("6");
        break;
      case "7":
        this.digitarNumero("7");
        break;
      case "8":
        this.digitarNumero("8");
        break;
      case "9":
        this.digitarNumero("9");
        break;
      case "punto":
          if (!display.innerHTML.includes(".") && display.innerHTML.length<8){
            display.append(".");
          }
        break;
      default:
    }
  }

//fin del módulo
};

Calculadora.init(document);
