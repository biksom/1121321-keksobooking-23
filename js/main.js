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
  'img/avatars/user10.png'
];

const TITLES = [
  'Заголовок 1',
  'Заголовок 2',
  'Заголовок 3',
  'Заголовок 4',
  'Заголовок 5'
]

const ADRESS = [
  'location.lat',
  'location.lng'
]

const createAuthor = () => {
  return {
    avatar: AVATARS[getRandomFloat(0, 9)]
  }
}

const similarAuthors = new Array(10).fill(null).map(() => createAuthor());
console.log(similarAuthors);

const createOffer = () => {
  return {
    title: TITLES[getRandomFloat(0, 4)]
  }
}

const similarOffers = new Array(5).fill(null).map(() => createOffer());
console.log(similarOffers);


const createOffer = () => {
  return {
    address: ADDRES[getRandomFloat(0, 1)]
  }
}

const similarOffer = new Array(2).fill(null).map(() => createOffer());
console.log(similarOffers);

// const getRandomArrayElement = (elements) => {
//   return elements[_.random(0, elements.length - 1)];
// };

// const createWizard = () => {
//   return {
//     name: getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(SURNAMES),
//     coatColor: getRandomArrayElement(COAT_COLORS),
//     eyesColor: getRandomArrayElement(EYES_COLORS),
//   };
// };

// const similarWizards = new Array(4).fill(null).map(() => createWizard());


// const author = {
//   avatar: 'img/avatars/user.png',

// };

// const offer = {
//   title: 'Заголовок',
//   address: '',
//   price: '',
//   type: 'palace, flat, house, bungalow, hotel',
//   rooms: '',
//   guests: '',
//   checkin: '12:00, 13:00, 14:00',
//   checkout: '12:00, 13:00, 14:00',
//   features: 'wifi, dishwasher, parking, washer, elevator, conditioner',
//   description: 'Сырое,грязное,темное',
//   photos = [
//     'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
//     'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
//     'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
//   ]
// };

// const location = {
//   lat: '',
//   lng: '',

// }
