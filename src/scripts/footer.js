import flatpickr from 'flatpickr';

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
