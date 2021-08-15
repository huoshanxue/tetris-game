let startTime = Date.now()

function handlerTicker() {
  tickers.forEach((ticker) => {
    ticker(Date.now() - startTime);
  });
  startTime = Date.now()
  requestAnimationFrame(handlerTicker);
}


requestAnimationFrame(handlerTicker);

const tickers = [];

export function addTicker(ticker) {
  tickers.push(ticker);
}

export function removeTicker(ticker) {
  for (let i = 0; i < tickers.length; i++) {
    if (ticker == tickers[i]) {
      tickers.splice(i, 1);
    }
  }
}