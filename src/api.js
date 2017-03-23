import calc from './calculator';
import inputStack from './inputStack.js';

const input = new inputStack();

const buttonClicks = (button, currentValue) => {
  switch (button) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9': {
      const res =  currentValue === '0' ? 0 : `${currentValue}0`;
      return {val: res, op: undefined};
    }
    case '.': {
      const res = currentValue.indexOf('.') >= 0? currentValue : `${currentValue}.`;
      return {val: res, op: undefined};
    }
    case 'AC': {
      return { val: 0, op: undefined };
    }
    case '=': {
      const res = input.equal();
      input = new inputStack();
      return { val: res, op: undefined };
    }
    case '*': {
      const value = invalidate(currentValue);
      input.value(calc.val(value));
      input.operation(calc.multiply);
      return { val: currentValue, op: "*" };
    }
    case '\u00F7': { // division
      return { val: "todo", op: '\u00F7' };
    }
    case '+': {
      return { val: "todo", op: '+' };
    }
    case '-': {
      return { val: "todo", op: '-' };
    }
    case '\u221A': { // square root
      const res = currentValue >= 0 ? Math.sqrt(currentValue) : "error";
      return { val: res, op: '\u221A' };
    }
    case '+/-': {

      return { val: -currentValue, op: undefined };
    }
    default: return { val: '0', op: undefined };
  }
};
