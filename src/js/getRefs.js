import { getRefs } from './getRefs';

export function getRefs() {
    return {
      form: document.querySelector('#search-form'),
      gallery: document.querySelector('.gallery'),
      sentinel: document.querySelector('#sentinel'),
      spinner: document.querySelector('.spinner'),
      body: document.querySelector('body'),
    };
  }
  const refs = getRefs();
export function showSpinner() {
  refs.body.classList.add('loading');
}

export function hideSpinner() {
  window.setTimeout(function () {
    refs.body.classList.remove('loading');
    refs.body.classList.add('loaded');
  }, 1500);
}