export function eliminate(map) {
  const lines = getEliminateLines(map);
  _eliminate(map, lines)

}

function _eliminate(map, lines) {
  const mapCol = map[0].length;
  lines.forEach(idx => {
    map.splice(idx, 1);
    map.unshift(new Array(mapCol).fill(0))
  });
}

function getEliminateLines(map) {
  // 获取所有满行的索引
  return map.reduce((res, col, idx) => {
    const boo = col.every(item => item === -1);
    if (boo) {
      res.push(idx);
    }
    return res;
  }, [])
}