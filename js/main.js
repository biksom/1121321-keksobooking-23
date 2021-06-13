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

const NUMBER = []

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
]

const ROOMS = []

const GUESTS = []

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
]

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
]

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
]

const DESCRIPTION = []

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
]

const LAT = [
  '35.65000',
  '35.70000'
]

const LNG = [
  '139.70000',
  '139.80000'
]


const createOffer = () => {
  return {
    autor: {
      avatar: AVATARS[getRandomFloat(0, 9)]
    },
    title: TITLES[getRandomFloat(0, 4)],
    address: ADDRES[getRandomFloat(0, 1)],
    price: NUMBER[getRandomInt()],
    type: TYPES[getRandomFloat(0, 4)],
    rooms: ROOMS[getRandomInt()],
    guests: GUESTS[getRandomInt()],
    checkin: CHECKIN[getRandomFloat(0, 2)],
    checkout: CHECKOUT[getRandomFloat(0, 2)],
    features: FEATURES[getRandomFloat(0, 5)],
    description: DESCRIPTION[()],
    photos: PHOTOS[(0, 2)],
    location: {
      lat: LAT[getRandomFloat(0, 1)],
      lng: LNG[getRandomFloat(0, 1)],
    }
  }
}

const similarAuthors = new Array(10).fill(null).map(() => createAuthor());
console.log(similarAuthors);

const similarTitles = new Array(5).fill(null).map(() => createTitle());
console.log(similarTitles);

const similarAddres = new Array(2).fill(null).map(() => createAddres());
console.log(similarAddres);

const similarNumber = new Array().fill(null).map(() => createNumber());
console.log(similarNumber);

const similarTypes = new Array(5).fill(null).map(() => createTypes());
console.log(similarTypes);

const similarRooms = new Array().fill(null).map(() => createRooms());
console.log(similarRooms);

const similarGuests = new Array().fill(null).map(() => createGuests());
console.log(similarGuests);

const similarCheckin = new Array(3).fill(null).map(() => createCheckin());
console.log(similarCheckin);

const similarCheckout = new Array(3).fill(null).map(() => createCheckout());
console.log(similarCheckout);

const similarPhotos = new Array(3).fill(null).map(() => createPhotos());
console.log(similarPhotos);

const similarPhotos = new Array(3).fill(null).map(() => createPhotos());
console.log(similarPhotos);

const similarLat = new Array(2).fill(null).map(() => createLat());
console.log(similarLat);

const similarLng = new Array(2).fill(null).map(() => createLng());
console.log(similarLng);

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

// }но н
