export * from './config';
import { initMap, addBoxToMap } from './map';
import { render } from "./renderer";
import { addTicker } from "./ticker";
import { intervalTimer } from "./utils";
import { hitBottomBorder, hitBottomBox } from "./hit";
import { createBox } from './Box';
import { eliminate } from "./eliminate";

export function startGame(map) {
  initMap(map);

  let activeBox = createBox();

  const isDownMove = intervalTimer();
  const interval = 1000;

  function handlerTicker(time) {
    render(activeBox, map);

    if (isDownMove(time, interval)) {

      // 判断是否触碰到底部

      if (hitBottomBorder(activeBox) || hitBottomBox(activeBox, map)) {

        addBoxToMap(activeBox, map)
        eliminate(map)
        activeBox = createBox()

        console.log('触底了。。。')
        return
      }


      activeBox.y++;
    }
  }



  addTicker(handlerTicker)

  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'ArrowDown':
        if (hitBottomBorder(activeBox) || hitBottomBox(activeBox, map)) {

          addBoxToMap(activeBox, map)
          eliminate(map)
          activeBox = createBox()

          console.log('触底了。。。')
          return
        }
        activeBox.y++;
        break;
      case 'ArrowRight':
        activeBox.x++;
        break;
      case 'ArrowLeft':
        activeBox.x--;
        break;
      case 'ArrowUp':
        activeBox.rotate();
        break;
    }
  })

}



