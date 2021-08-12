export function eliminate(map) {
  const lines = getEliminateLines(map);
  _eliminate(map, lines)

}

function _eliminate(map, lines) {
  const mapCol = map[0].length;
  console.log('-0-------------', lines)
  lines.reverse().forEach(idx => {
    map.splice(idx, 1);
    map.unshift(new Array(mapCol).fill(0))
    console.log('!!!!!!!')
  });
}

function getEliminateLines(map) {
  // 获取所有满行的索引
  // return map.reduce((res, row, idx) => {
  //   const boo = row.every(item => item < 0);
  //   if (boo) {
  //     res.push(idx);
  //   }
  //   return res;
  // }, [])
  let res = [];
  const row = map.length;
  const col = map[0].length;

  for (let i = row - 1; i >= 0; i--) {
    let hit = true;
    for (let j = 0; j < col; j++) {
      if (map[i][j] >= 0) {
        hit = false;
        break;
      }
    }

    if (hit) {
      res.push(i);
    }
  }

  return res;
}