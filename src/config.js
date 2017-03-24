const key = {
  ESC: 27,
  ENTER: 13,
  DIV: 111,
  MULT: 106,
  PERIOD: 110,
  MINUS: 109,
  PLUS: 107,
  DEL: 8,
  SQRT: 86 // v letter
};

export const operationMap = {
  [key.ESC]: 'AC',
  [key.ENTER]: '=',
  [key.DIV]: '\u00F7',
  [key.MULT]: '*',
  [key.PERIOD]: '.',
  [key.MINUS]: '-',
  [key.PLUS]: '+',
  [key.DEL]: 'DEL',
  [key.SQRT]: '\u221A',
  96: '0',
  97: 1,
  98: 2,
  99: 3,
  100: 4,
  101: 5,
  102: 6,
  103: 7,
  104: 8,
  105: 9
};