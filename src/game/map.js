
import { gameRow, gameCol } from './config'

// 初始化 map
export function initMap(map) {
  for (let i = 0; i < gameRow; i++) {
    map[i] = []
    for (let j = 0; j < gameCol; j++) {
      map[i][j] = 0
    }
  }
}

// 添加 box 到 map
export function addBoxToMap(box, map) {
  const row = box.shape.length
  const col = box.shape[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const x = box.x + j
      const y = box.y + i
      if (checkLegalPoints({ offsetX: x, offsetY: y })) {
        if (box.shape[i][j] > 0) {
          map[y][x] = -box.shape[i][j]
        }
      }
    }
  }
}


// 检测当前点是否可以渲染 true：可以
export function checkLegalPoints({ offsetX, offsetY }) {
  if (offsetX < 0 || offsetX >= gameCol) return false;
  if (offsetY < 0 || offsetY >= gameRow) {
      console.log(11111111111)
    return false};
  return true;
}

// 盒子是否可以渲染再地图上，true:可以
export function checkLegalBox(box, map) {
  const row = box.shape.length;
  const col = box.shape[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const x = box.x + j;
      const y = box.y + i;
      if (!checkLegalPoints({ offsetX: x, offsetY: y })) return false;
      if (map[y][x] < 0) return false;
    }
  }
  return true;
}