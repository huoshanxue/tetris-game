import { gameRow, gameCol } from './config';
import { checkLegalPoints } from './map';

export function render(box, map) {
  // 清除之前的逻辑
  reset(map);
  _render(box, map);
}
function _render(box, map) {
  const row = box.shape.length;
  const col = box.shape[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const y = i + box.y;
      const x = j + box.x;
      if (checkLegalPoints({ offsetX: x, offsetY: y })) {
        if (box.shape[i][j] > 0) {
          map[y][x] = box.shape[i][j]
        }
      }
    }
  }
}

function reset(map) {
  for (let i = 0; i < gameRow; i++) {
    for (let j = 0; j < gameCol; j++) {
      if (map[i][j] > 0) {
        map[i][j] = 0;
      }
    }
  }

}