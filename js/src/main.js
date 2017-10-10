// requirejs.config({
//   baseUrl: './js/src',
//   paths: {
//     jquery: '../lib/jquery-3.2.0.min'
//   }
// });

// require([
//   'jquery',
//   'carousel',
//   'goTop',
//   'waterfall'
// ], function ($, Carousel, goTop, WaterFall) {
//   // carousel
//   // var imgSrcList = ['./img/222.jpg', './img/222.jpg', './img/222.jpg']
//   var carousel = new Carousel($('.slide'))

//   // goTop
//   var goTop = new goTop($('body'))

//   // waterfall
//   var waterFall = new WaterFall('.waterfall')
// });
var Carousel = require('./js/src/carousel');
console.log(Carousel);
new Carousel($('.slide'))

var goTop = require('./js/src/goTop')
new goTop($('body'))

var WaterFall = require('./js/src/waterfall')
new WaterFall('.waterfall')