import { initModalEvents } from './modal.js';
import { initFormHandler } from './formHandler.js';
import { initSlider } from './slider.js';

document.addEventListener('DOMContentLoaded', () => {
  initModalEvents();
  initFormHandler();
  initSlider();
});
