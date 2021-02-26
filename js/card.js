import {renderOnMap} from './map.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const typeDictionary = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const renderCards = (similarAnnouncements) => {
  similarAnnouncements.forEach(({author, offer, location}) => {
    const cardElement = renderCard(author, offer);
    renderOnMap(location, cardElement);
  });
};

const renderCard = (author, offer) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('img').src = author.avatar;
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').innerHTML = offer.address;
  cardElement.querySelector('.popup__text--price').innerHTML = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = typeDictionary[offer.type];

  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const possibleFeaturesList = cardElement.querySelector('.popup__features');
  const featuresList = offer.features;
  possibleFeaturesList.innerHTML = '';
  featuresList.forEach((feature) => {
    possibleFeaturesList.insertAdjacentHTML('beforeend', `<li class="popup__feature popup__feature--${feature}"></li>`);
  });

  cardElement.querySelector('.popup__description').textContent = offer.description;

  const photoGallery = cardElement.querySelector('.popup__photos');
  const photosList = offer.photos;
  photoGallery.innerText = '';
  photosList.forEach((photo) => {
    photoGallery.insertAdjacentHTML('beforeend',`<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>`);
  });

  return cardElement
};

const clearRenderCard = () => {
  cardTemplate.innerHTML = '';
};

export {renderCards, clearRenderCard};
