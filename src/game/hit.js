import { getBoxBottomPoints } from "../game/matrix";
import { gameRow } from "./config";

export function hitBottomBorder(box) {

  const points = getBoxBottomPoints(box)
  // console.log(points)
  for (let i = 0; i < points.length; i++) {
    if (points[i].y + 1 >= gameRow) {
      return true
    }
  }
  return false
}

export function hitBottomBox(box, map) {
  const points = getBoxBottomPoints(box)
  for (let i = 0; i < points.length; i++) {
    const x = points[i].x
    const y = points[i].y + 1
    if (map[y][x] === -1) {
      return true
    }
  }
  return false
}