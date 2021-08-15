import { rotate } from './matrix';

class Box {
  constructor() {
    this.x = 0
    this.y = -1
    this.shape = [
      [1, 1],
      [1, 1]
    ]
  }
  _rotates = []
  _rotateIndex = 0
  rotate() {
    // this.shape = rotate(this.shape)
    const rotateFn = this._rotates[this._rotateIndex];
    if (!rotateFn) return
    this.shape = rotateFn.call(null, this.shape);
    this._rotateIndex++;
    if (this._rotateIndex >= this._rotates.length) {
      this._rotateIndex = 0;
    }
  }

  setRotatestrategy(v) {
    if (v) {
      this._rotates = v;
    }
  }
}

const boxInfo = {
  1: {
    shape: [
      [1, 1],
      [1, 1]
    ]
  },
  2: {
    shape: [
      [0, 2, 0],
      [2, 2, 0],
      [2, 0, 0]
    ],
    rotatestrategy: [rotate, (m) => rotate(rotate(rotate(m)))]
  },
  3: {
    shape: [
      [3, 3, 0],
      [3, 0, 0],
      [3, 0, 0]
    ],
    rotatestrategy: [rotate, rotate, rotate, rotate]
  },
  4: {
    shape: [
      [0, 4, 0, 0],
      [0, 4, 0, 0],
      [0, 4, 0, 0],
      [0, 4, 0, 0]
    ],
    rotatestrategy: [rotate, (m) => rotate(rotate(rotate(m)))]
  },
  5: {
    shape: [
      [5, 5, 5],
      [0, 5, 0],
      [0, 0, 0],
    ],
    rotatestrategy: [rotate, rotate, rotate, rotate],
  }
}

export function createBox() {
  let box = new Box();
  const { shape, rotatestrategy } = getRandomBoxInfo();
  box.shape = shape;
  box.setRotatestrategy(rotatestrategy)
  return box;
}

function getRandomBoxInfo() {
  const max = Object.keys(boxInfo).length;
  const key = Math.floor(Math.random() * max) + 1;
  // const key = 4;
  return boxInfo[key];
}