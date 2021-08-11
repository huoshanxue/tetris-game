export function getBoxBottomPoints(box) {
  const row = box.shape.length;
  const col = box.shape[0].length;
  let points = [];
  // 遍历列
  // for (let j = 0; j < box.shape[0].length; j++) {
  //   if (box.shape[row - 1][j] > 0) {
  //     points.push({
  //       x: j + box.x,
  //       y: row - 1 + box.y
  //     })
  //   }
  // }

  // 遍历列 再遍历行 获取每列最后一个 > 0 的点
  for (let j = 0; j < col; j++) {
    for (let i = row - 1; i >= 0; i--) {
      if (box.shape[i][j] > 0) {
        points.push({
          x: j + box.x,
          y: i + box.y
        })
      }
    }
  }
  return points
}

// 逆时针旋转
export function rotate(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  const arr = []
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let k = row - 1 - j; //  设置新行
      if (!arr[k]) {
        arr[k] = [];
      }
      arr[k][i] = matrix[i][j];
    }
  }
  // console.log('-----', arr)
  return arr;
}