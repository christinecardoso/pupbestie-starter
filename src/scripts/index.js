import Alpine from 'alpinejs';
import flatpickr from 'flatpickr';

window.Alpine = Alpine;

Alpine.start();

const env = document.querySelector('body').dataset.env;

// Check that service workers are supported
if ('serviceWorker' in navigator && env === 'production') {
  // use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    try {
      navigator.serviceWorker.register('/sw.js');
    } catch (error) {
      console.error('Service worker registration failed: ', error);
    }
  });
}

flatpickr('#flatpickr', {
  mode: 'multiple',
  // dateFormat: "Y-m-d",
  // defaultDate: ["2021-07-20", "2021-07-23"],
  enableTime: true,
  altInput: true,
  altFormat: 'F j @ H:i',
  dateFormat: 'm-d-Y H:i',
  minDate: 'today',
  maxDate: new Date().fp_incr(90), // 14 days from now
});
