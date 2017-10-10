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