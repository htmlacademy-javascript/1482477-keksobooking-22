import {activateForm, address} from './form.js';
import {activateFilter} from './filter.js';

/* global L:readonly */

const INITIAL_COORDINATES = {
  lat: '35.68951',
  lng: '139.69201',
};

const map = L.map('map-canvas')
  .on('load', () => {
    activateFilter();
    activateForm();
    address.value = `${INITIAL_COORDINATES.lat}, ${INITIAL_COORDINATES.lng}`;
  })
  .setView({
    lat: INITIAL_COORDINATES.lat,
    lng: INITIAL_COORDINATES.lng,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

/*Добавление главного маркера*/

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: INITIAL_COORDINATES.lat,
    lng: INITIAL_COORDINATES.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

/*Добавление вспомогательные метки*/

const ponyPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderOnMap = ({lat, lng}, popup) => {
  const ponyPin = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: ponyPinIcon ,
    },
  );

  ponyPin
    .addTo(map)
    .bindPopup(popup);
}

export {renderOnMap};
