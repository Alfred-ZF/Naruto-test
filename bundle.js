/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

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
var Carousel = __webpack_require__(1);
console.log(Carousel);
new Carousel($('.slide'))

var goTop = __webpack_require__(2)
new goTop($('body'))

var WaterFall = __webpack_require__(3)
new WaterFall('.waterfall')

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var Carousel = (function () {
  function _Carousel(ct) {
    this.ct = ct;
    this.init();
    this.bind();
  }

  _Carousel.prototype.init = function () {
    var _this = this;
    this.preBtn = this.ct.find('.J-pre');
    this.nextBtn = this.ct.find('.J-next');
    this.slideList = this.ct.find('.J-slideList');
    this.item = this.slideList.find('.slide__item');
    this.itemWidth = this.item.first().width();
    this.counts = this.item.length;
    this.navButton = this.ct.find('.J-navigation li');
    this.pageIndex = 0;
    this.isAnimate = false;
    this.slideList.css({
      left: -this.itemWidth
    });
    this.slideList.width((this.counts + 2) * this.itemWidth);
    this.slideList.append(this.item.first().clone());
    console.log(this.item.first().clone());
    this.slideList.prepend(this.item.last().clone());
    setInterval(function () {
      _this.playNext(1);
    }, 3000);
  };

  _Carousel.prototype.bind = function () {
    var _this = this;
    this.navButton.click(function () {
      var navIndex = $(this).index();
      if (navIndex > _this.pageIndex) {
        _this.playNext(navIndex - _this.pageIndex);
      } else if (navIndex < _this.pageIndex) {
        _this.playPre(_this.pageIndex - navIndex);
      }

    });

    this.preBtn.click(function () {
      _this.playPre(1)
    })

    this.nextBtn.click(function () {
      _this.playNext(1)
    })
  };

  _Carousel.prototype.playNext = function (len) {
    var _this = this;
    if (this.isAnimate) return;
    this.isAnimate = true;
    this.slideList.animate({
      left: '-=' + len * _this.itemWidth
    }, function () {
      _this.pageIndex += len;
      if (_this.pageIndex === _this.counts) {
        _this.pageIndex = 0;
        _this.slideList.css({
          left: -_this.itemWidth
        });
      }
      _this.setBullet();
      _this.isAnimate = false;
    });
  };

  _Carousel.prototype.playPre = function (len) {
    var _this = this;
    if (this.isAnimate) return;
    this.isAnimate = true;
    this.slideList.animate({
      left: '+=' + len * _this.itemWidth
    }, function () {
      _this.pageIndex -= len;
      if (_this.pageIndex < 0) {
        _this.pageIndex = _this.counts - 1;
        _this.slideList.css({
          left: -(_this.itemWidth * _this.counts)
        });
      }
      _this.setBullet();
      _this.isAnimate = false;
    })
  };

  _Carousel.prototype.setBullet = function () {
    this.navButton.removeClass('active').eq(this.pageIndex).addClass('active');
  };

  return _Carousel;
})()
module.exports = Carousel;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function goTop(container) {
  this.$container = container
  this.init()
  this.listen()
}

goTop.prototype = {
  init: function () {
    var html = '<span class="goTop"><img src="img/goTop.png" title="回到顶部"></span>'
    this.$container.prepend($(html))
    this.$goTop = $('.goTop')
  },

  listen: function () {
    var _this = this
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 100) {
        _this.$goTop.fadeIn()
      } else {
        _this.$goTop.fadeOut()
      }
    })
    _this.$goTop.on('click', function () {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    })
  }
}

//return goTop
module.exports = goTop

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var WaterFall = (function () {


  function _WaterFall(container) {
    if (typeof container === 'string') {
      this.container = document.querySelector(container)
      // 首屏渲染
      this.init()
      this.listen()
    }
  }

  _WaterFall.prototype = {

    init: function () {
      // 请求内容==》每个数据检测load==》load后生成DOM==》布局
      // 分页数
      this.pageIndex = 0
      // add load-more button
      var loadMore = this.loadMore = document.createElement('button')
      loadMore.classList.add('loadMore')
      loadMore.innerHTML = '加载更多'
      this.container.appendChild(loadMore)
      this.requestContent(this.getDom)
    },

    listen: function () {
      var _this = this
      this.loadMore.addEventListener('click', function () {
        if (_this.loading) {
          return
        }
        _this.loadMore.innerHTML = '加载中'
        _this.requestContent.call(_this, _this.getDom)
      })
    },

    requestContent: function (callback) {
      var _this = this
      this.loading = true
      const dataLen = 8
      $.get(
        '/getCard', {
          page: _this.pageIndex
        }
      ).done(function (ret) {
        if (ret && ret.status === 0) {
          // 生成请求数据的DOM结构
          _this.total = ret.data.length
          if (_this.total < dataLen) {
            _this.loadMore.style.display = 'none'
          }
          callback.call(_this, ret.data)
          _this.pageIndex++
            _this.loading = false
          _this.loadMore.innerHTML = '加载更多'
        } else {
          alert('Get data failed')
        }
      }).fail(function (ret) {
        alert('System error')
      })
    },

    getDom: function (data) {
      var _this = this
      this.dataCount = 0

      data.forEach(function (item, index) {
        // get card element
        var card = this.getCardEle(item)
        // check img load
        var img = card.querySelector('img')
        img.onload = this.loadCallback.bind(this, card)
        img.src = item.img
      }, this)
    },

    getCardEle: function (item) {
      var card = document.createElement('div')
      card.className = 'card item'
      card.innerHTML = '<a href="#"><img></a><div><h4>' + item.title + '</h4><p>' + item.brif + '</p></div>'
      return card
    },

    loadCallback: function (card) {
      // append html
      this.container.insertBefore(card, this.loadMore)
      // layout
      this.waterfall(card)
      this.dataCount++
        if (this.dataCount === this.total) {
          this.adjustWaterfall()
        }
    },

    waterfall: function (card) {
      /*
      check数组sortHeight=》N=》firstELe=>_arrangeEl(0,0),i=0
      ==>push到数组firstRow中,top push到sortHeight，
      check数组firstRow=》N=》check space=》Y=》_arrange(i-1,0),i++ => top push到sortHeight
                                        =>N=>排序sortHeight
      */
      var move = this.move,
        col = this.col
      if (!this.colsHeight) {
        if (!this.firstRow) {
          //排列第一个元素
          this.col = 1;
          this.setDefault(card)
        } else {
          if (move * col <= this.widthAll) {
            this.arrangeFirstRow(card)
          } else {
            this.sortHeight()
            this.arrangeSmallestCol(card)
          }
        }
      } else {
        this.arrangeSmallestCol(card)
      }

    },

    setDefault: function (card) {
      this.firstRow = []
      arrangeEl(card, 0, 0)
      this.move = width(card) + margin(card, 'left') + margin(card, 'right')
      this.widthAll = width(this.container)
      this.firstRow.push(card)
      this.col++
        //this.colsHeight.push(height(card))
    },

    arrangeFirstRow: function (card) {
      arrangeEl(card, this.move * (this.col - 1), 0)
      this.firstRow.push(card)
      this.col++
    },

    arrangeSmallestCol: function (card) {
      var colsHeight = this.colsHeight,
        colEle = colsHeight[0],
        minIndex = colEle.col,
        minHeight = colEle.height
      arrangeEl(card, this.move * (minIndex - 1), minHeight)
      this.colsHeight[0].height += height(card)
      sort(this.colsHeight)
    },

    sortHeight: function () {
      this.colsHeight = []
      this.firstRow.forEach(function (item, index) {
        this.colsHeight.push({
          col: index + 1,
          height: height(item)
        })
      }, this)
      sort(this.colsHeight)
    },

    adjustWaterfall: function () {
      var totalHeight = this.colsHeight[this.colsHeight.length - 1].height
      this.container.style.height = px(totalHeight)
    }
  }
  /********************
   * private functions
   ********************/
  function arrangeEl(el, left, top) {
    el.style.position = 'absolute'
    el.style.left = px(left)
    el.style.top = px(top)
  }

  function sort(colsHeight) {
    colsHeight.sort(function (a, b) {
      return a.height - b.height
    })
  }
  /******************
   * helper functions
   ******************/
  function px(num) {
    return parseFloat(num) + 'px'
  }

  function style(el) {
    return window.getComputedStyle(el)
  }

  function margin(el, direction) {
    return parseFloat(style(el)['margin-' + direction]) || 0
  }

  function width(el) {
    return parseInt(style(el).width)
  }

  function height(el) {
    return parseInt(style(el).height) + margin(el, 'left') + margin(el, 'right')
  }

  return _WaterFall;
})()
module.exports = WaterFall;

/***/ })
/******/ ]);