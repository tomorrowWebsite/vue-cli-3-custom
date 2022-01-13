import Vue from "vue";

// String To Uppercase

Vue.filter("uppercase", function (v) {
  return v.toUpperCase();
});

// Make String Reversing
Vue.filter("reversing", function (v) {
  return v.split("").reverse().join("");
});

// Make String Reversing

// Vue.filter("shortenText", function (v) {
//   return `${v.substring(0, 50)} ...`;
// });

// Vue.filter("shortenText", function (v, textLength) {
//   return `${v.substring(0, textLength)} ...`;
// });

// shortenText(50,'...')
Vue.filter("shortenText", function (v, textLength, lestText) {
  return `${v.substring(0, textLength)} ${lestText}`;
});
