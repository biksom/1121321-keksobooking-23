import { DEFAULT_PRECISION, AVATARS, TITLES, ADRESS, PRICES, TYPES, ROOMS, GUESTS, CHECKIN, CHECKOUT, FEATURES, DESCRIPTION, PHOTOS, LAT, LNG } from './const';

const createOffer = () => ({
  autor: {
    avatar: getRandomItem(AVATARS),
  },
  title: getRandomItem(TITLES),
  address: getRandomItem(ADRESS),
  price: getRandomItem(PRICES),
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
  },
});

export { createOffer };