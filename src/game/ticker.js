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