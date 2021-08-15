export * from './config';
import { initMap, addBoxToMap } from './map';
import { render } from "./renderer";
import { addTicker, removeTicker } from "./ticker";
import { intervalTimer } from "./utils";
import { hitBottomBorder, hitBottomBox, hitRightBorder, hitRightBox, hitLeftBorder, hitLeftBox } from "./hit";
import { createBox } from './Box';
import { eliminate } from "./eliminate";
import { checkLegalBox } from "./map";
import { rotate } from './matrix'

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

        if (activeBox.y < 0 ) {
          alert('game over')
          removeTicker(handlerTicker)
          return
        }

        activeBox = createBox()

        console.log('hit bottom')
        return
      }


      activeBox.y++;
    }
  }



  addTicker(handlerTicker)

  document.addEventListener('keydown', (e) => {
    if (activeBox.y < 0) return;
    switch (e.code) {
      case 'ArrowDown':
        if (hitBottomBorder(activeBox) || hitBottomBox(activeBox, map)) {

          addBoxToMap(activeBox, map);
          eliminate(map);
          activeBox = createBox();

          console.log('hit bottom');
          return;
        }
        activeBox.y++;
        break;
      case 'ArrowRight':
        if (hitRightBorder(activeBox) || hitRightBox(activeBox, map)) {
          console.log('hit right');
          return;
        }
        activeBox.x++;
        break;
      case 'ArrowLeft':
        if (hitLeftBorder(activeBox) || hitLeftBox(activeBox, map)) {
          console.log('hit left');
          return;
        }
        activeBox.x--;
        break;
      case 'ArrowUp':
        const rotateBox = {
          x: activeBox.x,
          y: activeBox.y,
          shape: rotate(activeBox.shape)
        }
        if (checkLegalBox(rotateBox, map)) {
          activeBox.rotate();
        }
        break;
    }
  })

}



