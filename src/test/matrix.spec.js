import { getBoxBottomPoints } from "../game/matrix";

test('测试到达底部', () => {
    const box = {
      x: 0,
      y: 5,
      shape: [
        [1,1],
        [1,1]
      ]
    }
    const points = getBoxBottomPoints(box)
    expect(points).toEqual([
      { x:0, y: 6},
      { x:1, y: 6}
    ])
})