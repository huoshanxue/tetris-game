import { getBoxBottomPoints, getBoxRightPoints, getBoxLeftPoints } from "../game/matrix";
import { gameRow, gameCol } from "./config";

export function hitBottomBorder(box) {

  const points = getBoxBottomPoints(box);
  
  for (let i = 0; i < points.length; i++) {
    if (points[i].y + 1 >= gameRow) {
      return true;
    }
  }
  return false;
}

export function hitBottomBox(box, map) {
  const points = getBoxBottomPoints(box)
  for (let i = 0; i < points.length; i++) {
    const x = points[i].x;
    const y = points[i].y + 1;
    if (map[y][x] < 0) {
      return true;
    }
  }
  return false;
}

export function hitRightBorder(box) {
  const points = getBoxRightPoints(box);
  // console.log(points)
  for (let i = 0; i < points.length; i++) {
    if (points[i].x + 1 >= gameCol) {
      return true;
    }
  }
  return false;
}

export function hitRightBox(box,map) {
  const points = getBoxRightPoints(box);
  for (let i = 0; i < points.length; i++) {
    const x = points[i].x +1;
    const y = points[i].y;
    if (map[y][x] < 0) {
      return true;
    }
  }
  return false;
}

export function hitLeftBorder(box) {
  const points = getBoxLeftPoints(box);
  // console.log(points)
  for (let i = 0; i < points.length; i++) {
    if (points[i].x - 1 < 0) {
      return true;
    }
  }
  return false
}

export function hitLeftBox(box, map) {
  const points = getBoxLeftPoints(box);
  for (let i = 0; i < points.length; i++) {
    const x = points[i].x - 1;
    const y = points[i].y;
    if (map[y][x] < 0) {
      return true;
    }
  }
  return false;
}