class Node {
  eval() {
    throw new Error("Should be implemented in subclasses");
  }
}

class Value extends Node {
  constructor(val) {
    super();
    this.val = val;
  }
  toString() { return ` ${this.val} `; }
  eval() { return this.val; }
}


class Operation extends Node {
  constructor(left, right) {
    super();
    // wrap primitives with object Value
    this.left = typeof left === 'number' ? new Value(left) : left;
    this.right = typeof right === 'number' ? new Value(right) : right;
  }

  toString() {
    return ` (${this.left.toString()} ${this.ch} ${this.right.toString()})`;
  }
}

class Add extends Operation {
  constructor(left, right) {
    super(left, right);
    this.ch = '+';
  }
  eval() {
    return this.left.eval() + this.right.eval();
  }
}

class Subtract extends Operation {
  constructor(left, right) {
    super(left, right);
    this.ch = '-';
  }

  eval() {
    return this.left.eval() - this.right.eval();
  }
}

class Multiply extends Operation {
  constructor(left, right) {
    super(left, right);
    this.ch = '*';
  }
  eval() {
    return this.left.eval() * this.right.eval();
  }
}

class Divide extends Operation {
  constructor(left, right) {
    super(left, right);
    this.ch = '/';
  }
  eval() {
    const denominator = this.right.eval();
    if (denominator === 0) throw new Error('Division by zero');
    return this.left.eval() / denominator;
  }
}

const calc = {
  val: (val) => new Value(val),
  add: (left, right) => new Add(left, right),
  subtract: (left, right) => new Subtract(left, right),
  multiply: (left, right) => new Multiply(left, right),
  divide: (left, right) => new Divide(left, right),
};

calc.add.precedence = 1;
calc.subtract.precedence = 1;
calc.multiply.precedence = 2;;
calc.divide.precedence = 2;

export default calc;