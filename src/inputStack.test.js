import InputStack from './inputStack';
import calc from './calculator';


describe('input', () => {
  let input;
  beforeEach(() => {
    input = new InputStack();
  });

  it('should exist', () => {
    expect(input).toBeDefined();
  });

  describe('equal', () => {
    
    it('should add to numbers', () => {
      const two = calc.val(2);
      const three = calc.val(3);
      
      const expected = calc.add(two, three).eval();

      // sequence of user input
      input.value(two);
      input.operation(calc.add);
      input.value(three);

      expect(input.equal()).toEqual(expected);
      
    });

    it('should calculate complicated example like 2 + 20 * 5 - 11  * 2 === 80', () => {
       const expected = 80;
       // sequence of inputs 
       input.value(calc.val(2));
       input.operation(calc.add);
       input.value(calc.val(20));
       input.operation(calc.multiply);
       input.value(calc.val(5));
       input.operation(calc.subtract);
       input.value(calc.val(11));
       input.operation(calc.multiply);
       input.value(calc.val(2));
       expect(input.equal()).toEqual(expected);
    });
  

  });
});