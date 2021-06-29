
function getRandomFloat(min, max, precision = DEFAULT_PRECISION) {
  const minValue = Math.min(min, max);
  const maxValue = Math.max(min, max);
  const randomValue = minValue + (Math.random() * (maxValue - minValue));
  return Number(randomValue.toFixed(precision));
}

function getRandomInt(min, max) {
  return getRandomFloat(min, max);
}
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomItem = (items) => {
  const randomItex = getRandomInt(0, items.length - 1);
  const randomItem = items[randomItex];
  return randomItem;
};

export { getRandomItem };