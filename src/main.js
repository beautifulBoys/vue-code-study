
import Vue from './config/vue';
import header from './components/header';
import footer from './components/footer';

var route = [
  {commponent: header, active: true},
  {path: '/header', commponent: header},
  {path: '/footer', commponent: footer}
];

var vue = new Vue({
  route
});

console.log(vue);
