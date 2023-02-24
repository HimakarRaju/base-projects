 // javascript calculator

    // upper output is for showing the expression
    let outputTopline = document.querySelector('#upper');
    // lower output is for showing the result
    let outputLowLine = document.querySelector('#lower');

    // function to get number input
    function pressNum(e) {
      if (outputLowLine.innerHTML === '0') {
        outputLowLine.innerHTML = e.innerHTML;
      } else {
        outputLowLine.innerHTML += e.innerHTML;
      }
    }

    // clear all
    function pressAllClear() {
      outputTopline.innerHTML = '';
      outputLowLine.innerHTML = '0';
    }

    // clear one
    function pressClear() {
      outputLowLine.innerHTML = outputLowLine.innerHTML.slice(0, -1);
    }

    // calculate button
    function pressEqual() {
      let exp = outputLowLine.innerHTML;
      outputTopline.innerHTML = exp;
      exp = exp.replace(/×/g, '*').replace(/÷/g, '/');
      let result;
      try {
        result = eval(exp);
        // if decimal number more than 4 decimal places
        if (result.toString().indexOf('.') !== -1) {
          result = result.toFixed(4);
        }
      } catch (e) {
        result = 'Error';
      }
      outputLowLine.innerHTML = result;
    }

    function pressOperator(e) {
      // check last operator
      let lastOperator = outputLowLine.innerHTML.slice(-1);
      if (lastOperator.includes('+', '-', '×', '÷')) {
        outputLowLine.innerHTML = outputLowLine.innerHTML.slice(0, -1) + e.innerHTML;
      } else {
        outputLowLine.innerHTML += e.innerHTML;
      }
    }

    function pressDot() {
      outputLowLine.innerHTML += '.';
    }

    function pressBracket(e) {
      outputLowLine.innerHTML += e.innerHTML;
    }

    // attach keyboard event
    document.addEventListener('keydown', function (e) {
      switch (e.key) {
        case '0':
          pressNum(document.querySelector('button:nth-child(2)'));
          break;
        case '1':
          pressNum(document.querySelector('button:nth-child(5)'));
          break;
        case '2':
          pressNum(document.querySelector('button:nth-child(6)'));
          break;
        case '3':
          pressNum(document.querySelector('button:nth-child(7)'));
          break;
        case '4':
          pressNum(document.querySelector('button:nth-child(9)'));
          break;
        case '5':
          pressNum(document.querySelector('button:nth-child(10)'));
          break;
        case '6':
          pressNum(document.querySelector('button:nth-child(11)'));
          break;
        case '7':
          pressNum(document.querySelector('button:nth-child(13)'));
          break;
        case '8':
          pressNum(document.querySelector('button:nth-child(14)'));
          break;
        case '9':
          pressNum(document.querySelector('button:nth-child(15)'));
          break;
        case '+':
          pressOperator(document.querySelector('button:nth-child(4)'));
          break;
        case '-':
          pressOperator(document.querySelector('button:nth-child(8)'));
          break;
        case '*':
          pressOperator(document.querySelector('button:nth-child(12)'));
          break;
        case '/':
          pressOperator(document.querySelector('button:nth-child(16)'));
          break;
        case '.':
          pressDot();
          break;
        case '(':
          pressBracket(document.querySelector('button:nth-child(18)'));
          break;
        case ')':
          pressBracket(document.querySelector('button:nth-child(19)'));
          break;
        case 'Enter':
          // prevent default action
          e.preventDefault();
          pressEqual();
          break;
        case 'Backspace':
          pressClear();
          break;
        case 'Escape':
          pressAllClear();
          break;
      }
    });
