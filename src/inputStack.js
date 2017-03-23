export default class InputStack {
  constructor() {
    this.operations = [];
    this.values = [];
    this.precedStack = [];
  }

  operation(op) {
    this.operations.push(op);
    this.precedStack.push(op.precedence);
  }

  value(val) {
    this.values.push(val);
  }

  equal() {
    // helper function to make partially applied right argument and keep that function in a stack;
    const flipAndCurry = fn => second => first => fn(first, second);
    // helper stack to keep partially applied functions
    const curriedOpStack = [];

    let prevPrecedence = 0; // keep track of precedence value of previous operation

    while (this.values.length > 0) {
      // get last value on the stack;
      const val = this.values.pop();
      // if there are operations remain
      if (this.operations.length > 0) {
        const currPrecedence = this.precedStack.pop() || 0;
        const op = this.operations.pop();

        if (currPrecedence >= prevPrecedence) {
          const curried = flipAndCurry(op)(val);
          curriedOpStack.push(curried);
        } else {
          // if previous operation had higher precedence  evaluate last curred function with
          // current value popped from the stack  curry this value with current operation and 
          // put it on the curried stack;
          const res = curriedOpStack.pop()(val);
          const fn = flipAndCurry(op);
          curriedOpStack.push(fn(res));
        }
        // remember last operation currPrecedence
        prevPrecedence = currPrecedence;
        // if no operations on current stack just apply curried stack functions to remaining value;
      } else if (curriedOpStack.length > 0) {
        // keep applying function from curried stack to remaining value
        const result = curriedOpStack.pop()(val).eval();
        this.values.push(result);
      } else {
        // should be the last iteration. Three out of 4 stacks is empty
        return val;
      }
    }
  }
}
