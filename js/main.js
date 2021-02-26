import './util.js';
import './data.js';
import './form.js';
import './filter.js';
import './map.js';
import './card.js';
import {getData} from './api.js';
import {renderCards} from './card.js';

getData((createAnnouncements) => {
  renderCards(createAnnouncements);
});
