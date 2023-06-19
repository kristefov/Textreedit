/* These lines of code are importing modules and stylesheets into the JavaScript file. */
import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

/* These lines of code are selecting the HTML element with the ID "main" and setting its innerHTML to
an empty string. This is likely done to clear any existing content in the "main" element before
adding new content to it. */
const main = document.querySelector('#main');
main.innerHTML = '';

/**
 * The function creates and appends a spinner element to the main container.
 */
const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

/* The code is creating a new instance of the `Editor` class and assigning it to the `editor` constant.
It then checks if the `editor` variable is undefined, and if it is, it calls the `loadSpinner()`
function to display a spinner element on the page. This is likely done to indicate to the user that
the editor is loading and to provide a visual cue that the page is not frozen or unresponsive. */
const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
