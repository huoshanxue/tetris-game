import { rotate } from '../game/matrix'

test('测试旋转', () => {

  const matrix = [
    [0, 1, 0],
    [1, 1, 0],
    [1, 0, 0]
  ]

  const newMatrix = rotate(matrix);

  expect(newMatrix).toEqual([
    [0, 0, 0],
    [1, 1, 0],
    [0, 1, 1]
  ])
})