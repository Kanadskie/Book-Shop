/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/base/base.css":
/*!*******************************!*\
  !*** ./src/css/base/base.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://book-shop/./src/css/base/base.css?");

/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://book-shop/./src/css/normalize.css?");

/***/ }),

/***/ "./src/js/arrow.js":
/*!*************************!*\
  !*** ./src/js/arrow.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Arrow\": () => (/* binding */ Arrow)\n/* harmony export */ });\nclass Arrow {\n\n    toTop() {\n\n        let top = document.createElement('div')\n        \n        top.classList.add('arrow-btn')\n\n        document.querySelector('.container').insertAdjacentElement('beforeend', top)\n\n        window.addEventListener('scroll', () => {\n\n            let windowHeight = window.pageYOffset\n\n            let header = document.querySelector('.header').offsetHeight\n    \n            let slider = document.querySelector('.slider').offsetHeight\n\n            if ((header + slider) < windowHeight) {\n\n                top.classList.add('arrow-btn--active')\n    \n            } else {\n    \n                top.classList.remove('arrow-btn--active')\n    \n            }\n        })\n\n        top.addEventListener('click', () => {\n\n            document.querySelector('.header').scrollIntoView(true)\n\n            let scrollToElement = document.querySelector('.header')\n            \n            window.scrollTo({ top: scrollToElement, behavior: 'smooth'})\n\n            top.classList.remove('arrow-btn--active')\n\n        })\n\n    }\n\n}\n\n//# sourceURL=webpack://book-shop/./src/js/arrow.js?");

/***/ }),

/***/ "./src/js/cards.js":
/*!*************************!*\
  !*** ./src/js/cards.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cards\": () => (/* binding */ Cards)\n/* harmony export */ });\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ \"./src/js/error.js\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ \"./src/js/loader.js\");\n\n\n\nclass Cards {\n\n  constructor(apiKey, cardsLimit, cardsIncrease, cardsStartIndex, itemInCart) {\n\n    this.apiKey = apiKey\n\n    this.cardsLimit = cardsLimit\n\n    this.cardsIncrease = cardsIncrease\n\n    this.cardsStartIndex = cardsStartIndex\n    \n    this.itemInCart = itemInCart\n\n  }\n\n  request(url) {\n\n    _loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init()\n\n    fetch(url)\n\n    .then(response => { return response.json() })\n\n    .then(data => { \n      \n      this.writeOutput(this.formatOutput(data))\n    \n    })\n\n    .catch((error) => { \n\n      console.error(error)\n\n      _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"].check()\n\n    })\n\n  }\n\n  requestLoadMore(url) {\n\n    _loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init()\n\n    fetch(url)\n\n    .then(response => { return response.json() })\n\n    .then(data => {\n      \n      this.writeOutputLoadMore(this.formatOutput(data))\n\n      _loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hide()\n    \n      })\n\n    .catch((error) => { \n\n      console.error(error)\n\n      _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"].check()\n      \n    })\n\n  }\n\n  defaultRequest() {\n\n    let defaultLink = document.querySelector('[data-category=\"subject:Architecture\"]')\n\n    defaultLink.classList.add('link--active')\n\n    let defaultItem= document.querySelector('.nav-category-list__item').querySelector('.link')\n\n    let defaultSubject = defaultItem.getAttribute('data-category')\n\n    document.querySelector('.cards').setAttribute('data-type', defaultSubject)\n\n    let url = `https://www.googleapis.com/books/v1/volumes?q='${defaultSubject}'&key=${this.apiKey}&printType=books&startIndex=${this.cardsStartIndex}&maxResults=${this.cardsLimit}&langRestrict=en`\n\n    this.request(url)\n\n  }\n\n  currentRequest() {\n\n    let cards = document.querySelector('.cards')\n\n    let links = document.querySelectorAll('.nav-category-list__item')\n\n    links.forEach(item => {\n\n      item.addEventListener('click', (e) => {\n\n        const target = e.target\n\n        links.forEach(item => {\n          \n          item.querySelector('.link').classList.remove('link--active')\n\n        })\n\n        this.cardsLimit = 6\n\n        this.cardsStartIndex = 0\n\n        target.classList.add('link--active')\n\n        let newSubject = target.getAttribute('data-category')\n\n        document.querySelector('.cards').setAttribute('data-type', newSubject)\n\n        let url = `https://www.googleapis.com/books/v1/volumes?q='${newSubject}'&key=${this.apiKey}&printType=books&startIndex=${this.cardsStartIndex}&maxResults=${this.cardsLimit}&langRestrict=en`\n\n        cards.innerHTML = ''\n\n        this.request(url)\n\n      })\n\n    })\n\n  }\n\n  formatOutput(data) {\n\n    let cards = ''\n\n    data.items.forEach(function(item) {\n\n      let thumbnail\n\n      if (item.volumeInfo.hasOwnProperty('imageLinks')) {\n\n        thumbnail = item.volumeInfo.imageLinks.thumbnail\n\n      } else {\n\n        thumbnail = './images/thumbnail.png'\n\n      }\n\n      let authors\n\n      if (item.volumeInfo.hasOwnProperty('authors')) {\n\n        if (item.volumeInfo.authors.length > 1) {\n\n          authors = item.volumeInfo.authors.join(', ')\n\n        } else {\n\n          let authorsFull = item.volumeInfo.authors.join(', ')\n\n          let maxLength = 70\n\n          authors = authorsFull.substring(0, maxLength) + '...'\n\n        }\n\n      } else {\n\n        authors = ''\n        \n      }\n\n      let title\n\n      if (item.volumeInfo.hasOwnProperty('title')) {\n\n        let titleFull = item.volumeInfo.title\n\n        if (titleFull.length > 45) {\n\n          let maxLength = 45\n\n          title = titleFull.substring(0, maxLength) + '...'\n\n        } else {\n\n          title = item.volumeInfo.title\n\n        }\n\n      } else {\n\n        title = ''\n\n      }\n\n      let description\n\n      if (item.volumeInfo.hasOwnProperty('description')) {\n\n        let descriptionFull = item.volumeInfo.description\n\n        let maxLength = 100\n\n        description = descriptionFull.substring(0, maxLength) + '...'\n\n      } else {\n\n        description = ''\n\n      }\n\n      let averageRating = item.volumeInfo.averageRating\n\n      let ratingsCount\n\n      if (item.volumeInfo.hasOwnProperty('ratingsCount')) {\n\n        ratingsCount = item.volumeInfo.ratingsCount\n\n      } else {\n\n        ratingsCount = ''\n\n      }\n\n      let price\n\n      if (item.saleInfo.hasOwnProperty('retailPrice')) {\n\n        let rate = 80\n\n        price = (item.saleInfo.retailPrice.amount / rate).toFixed(2)\n\n      } else {\n\n        price = ''\n\n      }\n\n      let bookId = item.id\n\n      let cardBlock = `\n\n      <div class='cards-item' data-id='${bookId}'>\n\n        <img class='cards-item-img' src='${thumbnail}' alt='Book Image'>\n\n        <div class='cards-item-block'>\n\n            <div class='cards-item-block__authors'>${authors}</div>\n\n            <div class='cards-item-block__title'>${title}</div>\n\n            <div class='cards-item-block__rating'>\n\n                <div class='rating-average'>${averageRating}</div>\n\n                <div class='rating-count'>${ratingsCount} review</div>\n    \n            </div>\n\n            <div class='cards-item-block__description'>${description}</div>\n\n            <div class='cards-item-block__price'>&#36;${price}</div>\n\n            <button class='cards-item-block__btn'>Buy Now</button>\n\n        </div>\n\n      </div>`\n\n      cards += cardBlock\n\n    })\n\n    return cards\n\n  }\n\n  writeOutput(card) {\n      \n    let cards = document.querySelector('.cards')\n  \n    cards.innerHTML = card\n\n    this.formatBooksInformation()\n\n    this.loadMore()\n\n    this.addToCart()\n\n  }\n\n  writeOutputLoadMore(card) {\n      \n    let cards = document.querySelector('.cards')\n\n    // cards.removeChild(document.querySelector('.load'))\n\n    cards.innerHTML += card\n\n    this.formatBooksInformation()\n\n    this.loadMore()\n\n    this.addToCart()\n\n  }\n\n  loadMore() {\n\n    let loadBtn = document.querySelector('.btn-load')\n\n    const increaser = () => {\n\n      let cards = document.querySelector('.cards')\n      \n      cards.removeChild(document.querySelector('.load'))\n    \n      this.cardsStartIndex += this.cardsIncrease\n\n      let currentSubject = document.querySelector('.cards').getAttribute('data-type')\n\n      let url = `https://www.googleapis.com/books/v1/volumes?q='${currentSubject}'&key=${this.apiKey}&printType=books&startIndex=${this.cardsStartIndex}&maxResults=${this.cardsLimit}&langRestrict=en`\n\n      this.requestLoadMore(url)\n\n  }\n\n    loadBtn.addEventListener('click', increaser)\n      \n  }\n\n  addToCart() {\n\n    let bage = document.querySelector('.bage')\n\n    let bageText = document.querySelector('.bage-text')\n\n    let buyBtns = document.querySelectorAll('.cards-item-block__btn')\n\n    let booksDataInCart = []\n\n    buyBtns.forEach(item => {\n\n      item.addEventListener('click', (e) => {\n\n        const target = e.target\n\n        let currentBookItem = {\n\n          id: target.closest('.cards-item').getAttribute('data-id')\n\n        }\n\n        let userIndex = booksDataInCart.findIndex((item) => item.id === currentBookItem.id)\n\n        if (!booksDataInCart.find((item) => item.id === currentBookItem.id)) {\n\n          bage.style.display = 'block'\n\n          target.textContent = 'In the cart'\n\n          this.itemInCart += 1\n\n          localStorage.setItem('booksInCart', this.itemInCart)\n\n          bageText.textContent = this.itemInCart\n\n          target.classList.add('cards-item-block__btn--selected')\n\n          booksDataInCart.push(currentBookItem)\n  \n          localStorage.setItem('booksDataInCart', JSON.stringify(booksDataInCart))\n\n        } else {\n\n          target.textContent = 'Buy now'\n\n          this.itemInCart -= 1\n\n          localStorage.setItem('booksInCart', this.itemInCart)\n\n          target.classList.remove('cards-item-block__btn--selected')\n\n          bageText.textContent = this.itemInCart\n\n          booksDataInCart.splice(userIndex, 1)\n\n          localStorage.setItem('booksDataInCart', JSON.stringify(booksDataInCart))\n\n        }\n\n        if (this.itemInCart === 0) {\n\n          bage.style.display = 'none'\n          \n        }\n\n      })\n\n      if (localStorage.getItem('booksDataInCart') != null) {\n\n        booksDataInCart = JSON.parse(localStorage.getItem('booksDataInCart'))\n\n        let cardsItems = document.querySelectorAll('.cards-item')\n\n        cardsItems.forEach(item => {\n\n          let currentItem = item.getAttribute('data-id')\n\n          if (booksDataInCart.find((item) => item.id === currentItem)) {\n\n            item.querySelector('.cards-item-block__btn').textContent = 'In the cart'\n\n            item.querySelector('.cards-item-block__btn').classList.add('cards-item-block__btn--selected')\n\n          }\n\n        })\n\n      }\n\n    })\n\n    if (localStorage.getItem('booksInCart') != null) {\n\n      bage.style.display = 'block'\n\n      this.itemInCart = Number(localStorage.getItem('booksInCart'))\n\n      bageText.textContent = this.itemInCart\n\n      if (this.itemInCart === 0) {\n\n        bage.style.display = 'none'\n        \n      }\n    \n    }\n\n  }\n\n  formatBooksInformation() {\n\n    let authorRow = document.querySelectorAll('.cards-item-block__authors')\n\n    authorRow.forEach(item => {\n\n      if (item.textContent === '') {\n\n        item.classList.add('hidden')\n\n      }\n\n    })\n\n    let descriptionRow = document.querySelectorAll('.cards-item-block__description')\n\n    descriptionRow.forEach(item => {\n\n      if (item.textContent === '') {\n\n        item.classList.add('hidden')\n\n      }\n\n    })\n\n    let priceRow = document.querySelectorAll('.cards-item-block__price')\n\n    priceRow.forEach(item => {\n\n      if (item.textContent === '$' || item.textContent === '$0') {\n\n        item.classList.add('hidden')\n\n      }\n\n    })\n\n    let averageRatingRow = document.querySelectorAll('.rating-average')\n\n    averageRatingRow.forEach((item) => {\n      \n      const rating = parseFloat(item.textContent)\n      \n      const fullStars = Math.floor(rating)\n\n      const hasHalfStar = rating % 1 !== 0\n\n      const emptyStars = 5 - Math.ceil(rating)\n\n      if (fullStars) {\n\n        item.innerHTML = \"\"\n\n        for (let i = 0; i < fullStars; i++) {\n\n          let starFill = document.createElement(\"img\")\n          \n          starFill.src = \"images/icons/star_fill.svg\"\n          \n          item.appendChild(starFill)\n\n        }\n\n        if (hasHalfStar) {\n        \n          let starHalf = document.createElement(\"img\")\n          \n          starHalf.src = \"images/icons/star_half.svg\"\n          \n          item.appendChild(starHalf)\n        \n        }\n\n        if (emptyStars) {\n\n          for (let i = 0; i < emptyStars; i++) { \n      \n            let star = document.createElement(\"img\")\n            \n            star.src = \"images/icons/star.svg\"\n            \n            item.appendChild(star)\n            \n          }\n\n        }\n\n      }\n\n      if (item.textContent === 'undefined') {\n\n        item.innerHTML = \"\"\n\n        for (let i = 0; i < 5; i++) { \n    \n          let star = document.createElement(\"img\")\n          \n          star.src = \"images/icons/star.svg\"\n          \n          item.appendChild(star)\n          \n        }\n\n      }\n\n    })\n\n    let loadBtn = `<div class='load'><button class='btn-load'>Load More</button></div>`\n\n    let cards = document.querySelector('.cards')\n\n    cards.insertAdjacentHTML('beforeend', loadBtn)\n\n  }\n\n}\n\n//# sourceURL=webpack://book-shop/./src/js/cards.js?");

/***/ }),

/***/ "./src/js/error.js":
/*!*************************!*\
  !*** ./src/js/error.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Error\": () => (/* binding */ Error),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Error {\n\n    check() {\n\n        document.querySelector('.main').style.display = 'none'\n\n        let div = document.createElement('div')\n\n        div.classList.add('error')\n\n        document.querySelector('.container').insertAdjacentElement('beforeend', div)\n\n        div.innerHTML = `<span class=\"purple\">Ooops ... </span>something went wrong, check your internet connection and try again &#128556`\n\n    }\n\n}\n\nlet wrong = new Error()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrong);\n\n\n//# sourceURL=webpack://book-shop/./src/js/error.js?");

/***/ }),

/***/ "./src/js/images.js":
/*!**************************!*\
  !*** ./src/js/images.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/icons/arrow.svg */ \"./src/images/icons/arrow.svg\");\n/* harmony import */ var _images_icons_user_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icons/user.svg */ \"./src/images/icons/user.svg\");\n/* harmony import */ var _images_icons_cart_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icons/cart.svg */ \"./src/images/icons/cart.svg\");\n/* harmony import */ var _images_icons_search_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icons/search.svg */ \"./src/images/icons/search.svg\");\n/* harmony import */ var _images_icons_star_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/icons/star.svg */ \"./src/images/icons/star.svg\");\n/* harmony import */ var _images_icons_star_fill_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/icons/star_fill.svg */ \"./src/images/icons/star_fill.svg\");\n/* harmony import */ var _images_icons_star_half_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/icons/star_half.svg */ \"./src/images/icons/star_half.svg\");\n/* harmony import */ var _images_thumbnail_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/thumbnail.png */ \"./src/images/thumbnail.png\");\n/* harmony import */ var _images_slides_slide_1_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/slides/slide_1.jpg */ \"./src/images/slides/slide_1.jpg\");\n/* harmony import */ var _images_slides_slide_2_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/slides/slide_2.jpg */ \"./src/images/slides/slide_2.jpg\");\n/* harmony import */ var _images_slides_slide_3_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/slides/slide_3.jpg */ \"./src/images/slides/slide_3.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst stickerIcon = new Image()\n            \nstickerIcon.src = _images_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_0__\n\n\nconst userIcon = new Image()\n\nuserIcon.src = _images_icons_user_svg__WEBPACK_IMPORTED_MODULE_1__\n\n\nconst cartIcon = new Image()\n\ncartIcon.src = _images_icons_cart_svg__WEBPACK_IMPORTED_MODULE_2__\n\n\nconst searchIcon = new Image()\n\nsearchIcon.src = _images_icons_search_svg__WEBPACK_IMPORTED_MODULE_3__\n\n\nconst starIcon = new Image()\n\nstarIcon.src = _images_icons_star_svg__WEBPACK_IMPORTED_MODULE_4__\n\n\nconst starFillIcon = new Image()\n\nstarFillIcon.src = _images_icons_star_fill_svg__WEBPACK_IMPORTED_MODULE_5__\n\n\nconst starHalfIcon = new Image()\n\nstarHalfIcon.src = _images_icons_star_half_svg__WEBPACK_IMPORTED_MODULE_6__\n\n\nconst thumbnailImg = new Image()\n\nthumbnailImg.src = _images_thumbnail_png__WEBPACK_IMPORTED_MODULE_7__\n\n\nconst oneSlide = new Image()\n\noneSlide.src = _images_slides_slide_1_jpg__WEBPACK_IMPORTED_MODULE_8__\n\n\nconst twoSlide = new Image()\n\ntwoSlide.src = _images_slides_slide_2_jpg__WEBPACK_IMPORTED_MODULE_9__\n\n\nconst threeSlide = new Image()\n\nthreeSlide.src = _images_slides_slide_3_jpg__WEBPACK_IMPORTED_MODULE_10__\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ iconArrow: _images_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_0__, iconUser: _images_icons_user_svg__WEBPACK_IMPORTED_MODULE_1__, iconCart: _images_icons_cart_svg__WEBPACK_IMPORTED_MODULE_2__, iconSearch: _images_icons_search_svg__WEBPACK_IMPORTED_MODULE_3__, iconStar: _images_icons_star_svg__WEBPACK_IMPORTED_MODULE_4__, iconStarFill: _images_icons_star_fill_svg__WEBPACK_IMPORTED_MODULE_5__, iconStarHalf: _images_icons_star_half_svg__WEBPACK_IMPORTED_MODULE_6__, imgThumbnail: _images_thumbnail_png__WEBPACK_IMPORTED_MODULE_7__, slideOne: _images_slides_slide_1_jpg__WEBPACK_IMPORTED_MODULE_8__, slideTwo: _images_slides_slide_2_jpg__WEBPACK_IMPORTED_MODULE_9__, slideThree: _images_slides_slide_3_jpg__WEBPACK_IMPORTED_MODULE_10__ });\n\n//# sourceURL=webpack://book-shop/./src/js/images.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ \"./src/js/cards.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./src/js/slider.js\");\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrow */ \"./src/js/arrow.js\");\n/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile_menu */ \"./src/js/mobile_menu.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images */ \"./src/js/images.js\");\n/* harmony import */ var _css_base_base_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/base/base.css */ \"./src/css/base/base.css\");\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/normalize.css */ \"./src/css/normalize.css\");\n\n\n\n\n\n\n\n\n\n\n\nclass Main {\n\n    init() {\n\n        let books = new _cards__WEBPACK_IMPORTED_MODULE_0__.Cards('AIzaSyCIXE_nRhEppkCCfuAUS3CNKv7cLaGMOC0', 6, 6, 0, 0)\n\n        books.defaultRequest()\n        \n        books.currentRequest()\n\n\n        let slider = new _slider__WEBPACK_IMPORTED_MODULE_1__.Slider(_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], 5000, 0)\n\n        slider.play()\n\n\n        let arrow = new _arrow__WEBPACK_IMPORTED_MODULE_2__.Arrow()\n\n        arrow.toTop()\n\n\n        let mobileMenu = new _mobile_menu__WEBPACK_IMPORTED_MODULE_3__.Menu()\n\n        mobileMenu.init()\n\n    }\n\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    let shop = new Main()\n\n    shop.init()\n\n})\n\n\n\n//# sourceURL=webpack://book-shop/./src/js/index.js?");

/***/ }),

/***/ "./src/js/loader.js":
/*!**************************!*\
  !*** ./src/js/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Loader\": () => (/* binding */ Loader),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Loader {\n\n    init() {\n\n        let cards = document.querySelector('.cards')\n\n        let loader = `<div class=\"loader\"><div></div><div></div><div></div><div></div></div>`\n    \n        cards.insertAdjacentHTML('beforeend', loader)\n\n    }\n\n    hide() {\n\n        let cards = document.querySelector('.cards')\n\n        cards.removeChild(document.querySelector('.loader'))\n\n    }\n\n}\n\nlet loading = new Loader()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loading);\n\n//# sourceURL=webpack://book-shop/./src/js/loader.js?");

/***/ }),

/***/ "./src/js/mobile_menu.js":
/*!*******************************!*\
  !*** ./src/js/mobile_menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": () => (/* binding */ Menu)\n/* harmony export */ });\nclass Menu {\n\n    init() {\n\n        let navCategory = document.querySelector('.nav-category')\n\n        let navCategoryList = document.querySelector('.nav-category-list')\n\n        let switcherBody = document.querySelector('.switcher-body')\n\n        let switcherBtn = document.querySelector('.switcher-body__btn')\n    \n        switcherBody.addEventListener('click', () => {\n\n            navCategory.classList.toggle('nav-category--open')\n\n            navCategoryList.classList.toggle('nav-category-list--open')\n\n            switcherBody.classList.toggle('switcher-body--dark')\n\n            switcherBtn.classList.toggle('switcher-body__btn--dark')\n\n        })\n\n        window.addEventListener('resize', () => {\n\n            navCategory.classList.remove('nav-category--open')\n\n            navCategoryList.classList.remove('nav-category-list--open')\n\n            switcherBody.classList.remove('switcher-body--dark')\n\n            switcherBtn.classList.remove('switcher-body__btn--dark')\n\n        }, true)\n\n    }\n    \n}\n\n//# sourceURL=webpack://book-shop/./src/js/mobile_menu.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": () => (/* binding */ Slider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Slider {\n\n  constructor(slides, changeTime, intervalId) {\n    this.slides = slides\n    this.changeTime = changeTime\n    this.intervalId = intervalId\n  }\n\n  initSlider() {\n\n    if (!this.slides || !this.slides.length) return\n\n  }\n\n  initImages() {\n\n    let sliderImages = document.querySelector('.slider-images')\n\n    this.slides.forEach((item, index) => {\n\n      item = `<img class='slider-images__item n${index} ${index === 0? 'active-image' : ''}' src=\"${this.slides[index].url}\" data-index='${index}'></div>`\n      \n      sliderImages.innerHTML += item\n\n    })\n\n  }\n\n  initDots() {\n\n    let sliderDots = document.querySelector('.slider-dots')\n\n    this.slides.forEach((item, index) => {\n\n      item = `<div class='slider-dots__item n${index} ${index === 0? 'active-dot' : ''}' data-index='${index}'></div>`\n  \n      sliderDots.innerHTML += item\n  \n    })\n  \n    sliderDots.querySelectorAll('.slider-dots__item').forEach(dot => {\n  \n      dot.addEventListener('click', () => {\n\n        this.moveSlider(dot.dataset.index)\n\n        this.initAutoPlay()\n\n      })\n      \n    })\n\n  }\n\n  initAutoPlay() {\n\n    let sliderImages = document.querySelector('.slider-images')\n\n    clearInterval(this.intervalId)\n\n    this.intervalId = setInterval(() => {\n  \n      let curNumber = +sliderImages.querySelector('.active-image').dataset.index\n  \n      let nextNumber = curNumber === this.slides.length - 1? 0 : curNumber + 1\n  \n      this.moveSlider(nextNumber)\n  \n    }, this.changeTime)\n\n  }\n\n  moveSlider(num) {\n\n    let sliderImages = document.querySelector('.slider-images')\n\n    sliderImages.querySelector('.active-image').classList.remove('active-image')\n    \n    sliderImages.querySelector('.n' + num).classList.add('active-image')\n\n    let sliderDots = document.querySelector('.slider-dots')\n  \n    sliderDots.querySelector('.active-dot').classList.remove('active-dot')\n  \n    sliderDots.querySelector('.n' + num).classList.add('active-dot')\n  \n  }\n\n\n  play() {\n\n    this.initSlider()\n\n    this.initImages()\n\n    this.initDots()\n    \n    this.initAutoPlay()\n    \n  }\n\n}\n\nlet slides = [\n\n  { url: 'images/slide_1.jpg' },\n  { url: 'images/slide_2.jpg' },\n  { url: 'images/slide_3.jpg' }\n\n]\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slides);\n\n\n//# sourceURL=webpack://book-shop/./src/js/slider.js?");

/***/ }),

/***/ "./src/images/icons/arrow.svg":
/*!************************************!*\
  !*** ./src/images/icons/arrow.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/icons/arrow.svg\";\n\n//# sourceURL=webpack://book-shop/./src/images/icons/arrow.svg?");

/***/ }),

/***/ "./src/images/icons/cart.svg":
/*!***********************************!*\
  !*** ./src/images/icons/cart.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/icons/cart.svg\";\n\n//# sourceURL=webpack://book-shop/./src/images/icons/cart.svg?");

/***/ }),

/***/ "./src/images/icons/search.svg":
/*!*************************************!*\
  !*** ./src/images/icons/search.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/icons/search.svg\";\n\n//# sourceURL=webpack://book-shop/./src/images/icons/search.svg?");

/***/ }),

/***/ "./src/images/icons/star.svg":
/*!***********************************!*\
  !*** ./src/images/icons/star.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/icons/star.svg\";\n\n//# sourceURL=webpack://book-shop/./src/images/icons/star.svg?");

/***/ }),

/***/ "./src/images/icons/star_fill.svg":
/*!****************************************!*\
  !*** ./src/images/icons/star_fill.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/icons/star_fill.svg\";\n\n//# sourceURL=webpack://book-shop/./src/images/icons/star_fill.svg?");

/***/ }),

/***/ "./src/images/icons/star_half.svg":
/*!****************************************!*\
  !*** ./src/images/icons/star_half.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/icons/star_half.svg\";\n\n//# sourceURL=webpack://book-shop/./src/images/icons/star_half.svg?");

/***/ }),

/***/ "./src/images/icons/user.svg":
/*!***********************************!*\
  !*** ./src/images/icons/user.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/icons/user.svg\";\n\n//# sourceURL=webpack://book-shop/./src/images/icons/user.svg?");

/***/ }),

/***/ "./src/images/slides/slide_1.jpg":
/*!***************************************!*\
  !*** ./src/images/slides/slide_1.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/slide_1.jpg\";\n\n//# sourceURL=webpack://book-shop/./src/images/slides/slide_1.jpg?");

/***/ }),

/***/ "./src/images/slides/slide_2.jpg":
/*!***************************************!*\
  !*** ./src/images/slides/slide_2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/slide_2.jpg\";\n\n//# sourceURL=webpack://book-shop/./src/images/slides/slide_2.jpg?");

/***/ }),

/***/ "./src/images/slides/slide_3.jpg":
/*!***************************************!*\
  !*** ./src/images/slides/slide_3.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/slide_3.jpg\";\n\n//# sourceURL=webpack://book-shop/./src/images/slides/slide_3.jpg?");

/***/ }),

/***/ "./src/images/thumbnail.png":
/*!**********************************!*\
  !*** ./src/images/thumbnail.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/thumbnail.png\";\n\n//# sourceURL=webpack://book-shop/./src/images/thumbnail.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;