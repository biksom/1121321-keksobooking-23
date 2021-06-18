const DEFAULT_PRECISION = 0;


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

const AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

const TITLES = [
  'Заголовок 1',
  'Заголовок 2',
  'Заголовок 3',
  'Заголовок 4',
  'Заголовок 5',
];

const ADRESS = [
  'location.lat',
  'location.lng'
];

const PRICE = [
  '2000',
  '3000',
  '4000',
  '5000',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const ROOMS = [
  '1',
  '2',
  '3',
];

const GUESTS = [
  '1',
  '2',
  '3',
  '4',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Хорошая,чистая',
  'Средней комфортности',
  'Лучше не заезжать',
  'Берите, не пожалеете',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LAT = [
  '35.65000',
  '35.70000',
];

const LNG = [
  '139.70000',
  '139.80000',
];

const getRandomItem = (items) => {
  const randomItex = getRandomInt(0, items.length);
  const randomItem = items[randomItex];
  return randomItem;

}

const createOffer = () => {
  return {
    autor: {
      avatar: getRandomItem(AVATARS),
    },
    title: getRandomItem(TITLES),
    address: getRandomItem(ADRESS),
    price: getRandomItem(PRICE),
    type: getRandomItem(TYPES),
    rooms: getRandomItem(ROOMS),
    guests: getRandomItem(GUESTS),
    checkin: getRandomItem(CHECKIN),
    checkout: getRandomItem(CHECKOUT),
    features: getRandomItem(FEATURES),
    description: getRandomItem(DESCRIPTION),
    photos: getRandomItem(PHOTOS),
    location: {
      lat: getRandomItem(LAT),
      lng: getRandomItem(LNG),
    }
  }
};

debugger
console.log(createOffer());
