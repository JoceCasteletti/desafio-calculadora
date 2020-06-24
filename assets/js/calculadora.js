function init() {
  //declarar variables
  var displayValue = 0;
  var clear = false;
  var operation = null;
  var display = document.getElementById('display');
  var reset = document.getElementById('reset');
  var operations = document.querySelectorAll('.operation');
  var numbers = document.querySelectorAll('.numbers');

  //Inicializar variable display en 0
  display.innerText = '0';

  //Recorrer cada valor y agregarlo en la variable value
  numbers.forEach(x => {
    x.addEventListener('click', function (event) {
      var value = event.target.value;

      //validación: si el valor es distinto a 0, innertext display de resultado(valor en text)
      if (!(value === '0' && display.innerText === '0')) {
        if (display.innerText === '0') {
          display.innerText = value;
        } else {
          //limpiar valor al momento de ingresar un nuevo valor
          if (clear) {
            display.innerText = value;
            clear = false;
          } else {
            display.innerText += value;
          }
        }
      }
    });
  });

  //recorrer cada operacion y agregarla
  operations.forEach(x => {
    x.addEventListener('click', function (event) {
      var value = event.target.value;
      clear = true;
      //entrara en los case si es +-*/, null. El valor anterior, o la primera vez que usa la calculadora entrara en el else 61
      if (operation) {
        switch (operation) {
          case '+':
            displayValue += parseInt(display.innerText);
            break;
          case '-':
            displayValue -= parseInt(display.innerText);
            break;
          case '*':
            displayValue *= parseInt(display.innerText);
            break;
          case '/':
            displayValue /= parseInt(display.innerText);
            break;
          case '=':
            operation = null;
            break;
        }
      } else {
        displayValue = parseInt(display.innerText)
      }
      //igualar valor a texto display
      display.innerText = displayValue
      //cada operation tiene un valor de +-*/
      operation = value;
    })
  });

  //Resetear calculos con boton "C"
  reset.addEventListener('click', function (event) {
    displayValue = 0;
    display.innerText = '0';
    operation = null;
  })
}

