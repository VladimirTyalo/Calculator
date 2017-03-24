import calc from './calculator';
import inputStack from './inputStack.js';

let input = new inputStack();
let lastButton = 'value';

export const buttonClicks = (button, currentValue, lastOperation) => {

  button = `${button}`; // convert to string;
  currentValue = `${currentValue}`; // convert to string;

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
      if (currentValue.length >= 20) return { val: currentValue, op: undefined };
      const res = currentValue === '0' || lastOperation || currentValue === 'error'
        ? `${button}`
        : `${currentValue}${button}`;
      lastButton = 'value';
      return { val: res, op: undefined };
    }
    case '.': {
      const res = currentValue.indexOf('.') >= 0
        || currentValue === 'error'
        ? currentValue
        : `${currentValue}.`;
      lastButton = 'value';
      return { val: res, op: undefined };
    }
    case 'AC': {
      lastButton = 'value';
      return { val: 0, op: undefined };
    }
    case 'DEL': {
      lastButton = 'value';
      if (currentValue === 'error') return { val: 0, op: undefined };

      return { val: currentValue.slice(0, -1) || 0, op: lastOperation };
    }
    case '=': {
      lastButton = 'value';
      const value = invalidate(currentValue);
      if (value === 'error') return { val: 'error', op: undefined };
      input.value(calc.val(value));

      let res;
      // to deal with zero division use try catch
      try {
        res = invalidate(input.equal());
      } catch (error) {
        res = 'error';
      }
      input = new inputStack();

      return { val: res, op: undefined };
    }
    case '*': {
      const value = invalidate(currentValue);
      if (value === 'error') return { val: 'error', op: undefined };
      if (lastButton === 'operation') {
        input.pop();
      }
      input.value(calc.val(value));
      input.operation(calc.multiply);
      lastButton = 'operation';
      return { val: currentValue, op: "*" };
    }
    case '\u00F7': { // division
      const value = invalidate(currentValue);
      if (value === 'error') return { val: 'error', op: undefined };
      if (lastButton === 'operation') {
        input.pop();
      }
      input.value(calc.val(value));
      input.operation(calc.divide);
      lastButton = 'operation';
      return { val: currentValue, op: '\u00F7' };
    }
    case '+': {
      const value = invalidate(currentValue);
      if (lastButton === 'operation') {
        input.pop();
      }
      input.value(calc.val(value));
      input.operation(calc.add);
      lastButton = 'operation';
      return { val: currentValue, op: '+' };
    }
    case '-': {
      const value = invalidate(currentValue);
      if (value === 'error') return { val: 'error', op: undefined };
      if (lastButton === 'operation') {
        input.pop();
      }
      input.value(calc.val(value));
      input.operation(calc.subtract);
      lastButton = 'operation';
      return { val: currentValue, op: '-' };
    }
    case '\u221A': { // square root
      const res = currentValue >= 0 ? Math.sqrt(currentValue) : "error";
      lastButton = 'value';
      return { val: res, op: lastOperation };
    }
    case '+/-': {
      lastButton = 'value';
      return { val: -Number(currentValue), op: lastOperation };
    }
    default: return { val: '0', op: undefined };
  }
};

function invalidate(val) {
  const res = Number(val);
  return Number.isNaN(res) || res === Infinity || res === -Infinity ? 'error' : res;
}
