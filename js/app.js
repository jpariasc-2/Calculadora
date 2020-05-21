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

    if (this.resultadoEnPant){
      display.innerHTML = tecla;
      this.resultadoEnPant = false;
    } else {
      if (longitud < 8) {
        if (display.innerHTML == "0") {
          display.innerHTML = tecla;
        } else {
          display.append(tecla);
        }
      }
    }
  },

  actualizarDisplay: function (tecla){
    switch (tecla) {
      case "on":
        if (this.enop) {
          display.innerHTML = "0";
          this.b = 0.0;
        } else {
          display.innerHTML = "0";
          this.b = 0.0;
          this.a = 0.0;
          this.operacion = "";
          this.enop = false;
          this.encadenar = false;
          this.resultadoEnPant = false;
        }
        break;

      case "sign":
        if (display.innerHTML != "0") {
          if (display.innerHTML.indexOf("-") == 0){
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
      if (display.innerHTML == "") {
        display.append("0.");
      } else if (!display.innerHTML.includes(".") && display.innerHTML.length<8) {
        display.append(".");
      }
        break;
      case "mas":
        this.ejecutandoOp("suma");
        break;
      case "menos":
        this.ejecutandoOp("resta");
        break;
      case "por":
        this.ejecutandoOp("multiplicacion");
        break;
      case "dividido":
        this.ejecutandoOp("division");
        break;
      case "igual":
        if (this.enop == true && display.innerHTML != "") {
          this.b = Number(display.innerHTML);
          this.ejecutarOperacion(this.a, this.b, this.operacion);
          this.enop = false;
          this.encadenar = true;
          this.resultadoEnPant = true;
        } else if (this.encadenar) {
          this.ejecutarOperacion(Number(display.innerHTML), this.b, this.operacion);
          this.resultadoEnPant = true;
        }
        break;
      default:
      console.log("tecla no valida");
    }
  },

ejecutandoOp: function (op){
  if (this.enop == false ) {
    this.a = Number(display.innerHTML);
    this.enop = true;
    this.operacion = op;
    display.innerHTML = "";
    this.encadenar = false;
    this.resultadoEnPant = false;
  }
},

ejecutarOperacion: function (operando1, operando2, operador){
  switch (operador) {
    case "suma":
      display.innerHTML = this.controlarDigitosResultado(operando1 + operando2);
      break;
    case "resta":
      display.innerHTML = this.controlarDigitosResultado(operando1 - operando2);
      break;
    case "multiplicacion":
      display.innerHTML = this.controlarDigitosResultado(operando1 * operando2);
      break;
    case "division":
      display.innerHTML = this.controlarDigitosResultado((operando1 / operando2));
      break;
    default:
      console.log("operacion no valida");
  }
},

controlarDigitosResultado: function(numero){
  var longitudMax = 8;
  if (numero.toString().includes("-")) { longitudMax++;}
  if (numero.toString().includes(".")) { longitudMax++;}
  if ( numero.toString().length > longitudMax){
      return numero.toString().substr(0,longitudMax);
  } else {
    return numero;
  }
  //revisar metodo toPrecision()--sirve pero daña formato grafico, usar notación exp.
},

//variables para operaciones
a : 0.0,
b : 0.0,
//indicadores de estodo para operaciones
enop : false,
encadenar: false,
operacion : "",
resultadoEnPant: false
//fin del módulo
};

Calculadora.init(document);
