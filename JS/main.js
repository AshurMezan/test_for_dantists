// main.js
import { initModalEvents } from './modal.js';
import { initFormHandler } from './formHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  initModalEvents();
  initFormHandler();
});
