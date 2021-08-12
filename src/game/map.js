
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
      if (box.shape[i][j] > 0) {
        map[y][x] = -box.shape[i][j]
      }
    }
  }
}