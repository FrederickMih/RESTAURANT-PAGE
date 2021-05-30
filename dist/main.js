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

/***/ "./src/contact_us.js":
/*!***************************!*\
  !*** ./src/contact_us.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reachUs = () => {\n  const contactUs = document.createElement('main');\n  const homeTitle = document.createElement('h3');\n  const homeNote = document.createElement('h4');\n  const frame = document.createElement('iframe');\n\n  homeTitle.innerText = 'Find Us';\n  homeNote.innerText = 'Tel: +237679260797\\n\\n Email: fredtimermih@gmail.com';\n\n  contactUs.setAttribute('class', 'main');\n  contactUs.setAttribute('id', 'myContacts');\n  homeTitle.setAttribute('class', 'main-title');\n  homeNote.setAttribute('class', 'main-quote');\n  frame.setAttribute('class', 'frame');\n\n  contactUs.style.display = 'none';\n\n  contactUs.appendChild(homeTitle);\n  contactUs.appendChild(homeNote);\n  contactUs.appendChild(frame);\n\n  return contactUs;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reachUs);\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact_us.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayContent = (pageName) => {\n  const content = document.getElementsByClassName('main');\n  for (let i = 0; i < content.length; i += 1) {\n    content[i].style.display = 'none';\n  }\n  document.getElementById(pageName).style.display = 'block';\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayContent);\n\n\n//# sourceURL=webpack://restaurant-page/./src/content.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst myFooter = () => {\n  const footer = document.createElement('footer');\n  const footerTitle = document.createElement('h5');\n  footerTitle.innerText = 'Copyright \\u00A9 Mih Frederick';\n  footer.appendChild(footerTitle);\n  footer.setAttribute('class', 'footer');\n  footerTitle.setAttribute('class', 'fixfooter');\n  return footer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myFooter);\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayHome = () => {\n  const home = document.createElement('main');\n  const homeTitle = document.createElement('h2');\n  const homeNote = document.createElement('h5');\n  const homeImg = document.createElement('img');\n  const homeImg1 = document.createElement('img');\n  const homeImg2 = document.createElement('img');\n\n  homeTitle.innerText = 'A Taste of Africa - Recipes';\n  homeNote.innerText = 'Words are sweet but they can never replace food!';\n\n  home.setAttribute('class', 'main');\n  home.setAttribute('id', 'homePage');\n  homeTitle.setAttribute('class', 'home-title');\n  homeNote.setAttribute('class', 'home-note');\n  homeImg.setAttribute('class', 'home-img');\n\n  homeImg.setAttribute('src', '../assets/images/lauch.jpg');\n\n  home.appendChild(homeTitle);\n  home.appendChild(homeNote);\n  home.appendChild(homeImg);\n  home.appendChild(homeImg1);\n  home.appendChild(homeImg2);\n\n  return home;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigationbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigationbar */ \"./src/navigationbar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menus */ \"./src/menus.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n/* harmony import */ var _contact_us__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact_us */ \"./src/contact_us.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\n\nconst run = () => {\n  const content = document.getElementById('content');\n  content.appendChild((0,_navigationbar__WEBPACK_IMPORTED_MODULE_0__.default)());\n  content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.default)());\n  content.appendChild((0,_menus__WEBPACK_IMPORTED_MODULE_2__.default)());\n  content.appendChild((0,_contact_us__WEBPACK_IMPORTED_MODULE_4__.default)());\n\n  content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_5__.default)());\n\n  document.getElementById('home-link').onclick = () => {\n    (0,_content__WEBPACK_IMPORTED_MODULE_3__.default)('homePage');\n  };\n  document.getElementById('menu-link').onclick = () => {\n    (0,_content__WEBPACK_IMPORTED_MODULE_3__.default)('myMenu');\n  };\n  document.getElementById('contact-link').onclick = () => {\n    (0,_content__WEBPACK_IMPORTED_MODULE_3__.default)('myContacts');\n  };\n};\n\nrun();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menus.js":
/*!**********************!*\
  !*** ./src/menus.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayMenu = () => {\n  const menu = document.createElement('main');\n  const homeNote = document.createElement('h4');\n  const homeImg = document.createElement('img');\n\n  const meals = document.createElement('div');\n  const meal1 = document.createElement('a');\n  const meal2 = document.createElement('a');\n  const meal3 = document.createElement('a');\n  const meal4 = document.createElement('a');\n  const meal5 = document.createElement('a');\n\n  const imgMeal1 = document.createElement('img');\n  const imgMeal2 = document.createElement('img');\n  const imgMeal3 = document.createElement('img');\n  const imgMeal4 = document.createElement('img');\n  const imgMeal5 = document.createElement('img');\n\n  const parMeal1 = document.createElement('p');\n  const parMeal2 = document.createElement('p');\n  const parMeal3 = document.createElement('p');\n  const parMeal4 = document.createElement('p');\n  const parMeal5 = document.createElement('p');\n\n  meals.setAttribute('class', 'meals');\n  meal1.setAttribute('class', 'meal');\n  meal1.setAttribute('href', '#');\n  meal2.setAttribute('class', 'meal');\n  meal2.setAttribute('href', '#');\n  meal3.setAttribute('class', 'meal');\n  meal3.setAttribute('href', '#');\n  meal4.setAttribute('class', 'meal');\n  meal4.setAttribute('href', '#');\n  meal5.setAttribute('class', 'meal');\n  meal5.setAttribute('href', '#');\n\n  imgMeal1.setAttribute('class', 'img-meal');\n  imgMeal1.setAttribute('src', '../assets/images/Ekwang.jpg');\n  imgMeal2.setAttribute('class', 'img-meal');\n  imgMeal2.setAttribute('src', '../assets/images/yellow-soup.jpg');\n  imgMeal3.setAttribute('class', 'img-meal');\n  imgMeal3.setAttribute('src', '../assets/images/Egusi-Pudding-Recipe.jpg');\n  imgMeal4.setAttribute('class', 'img-meal');\n  imgMeal4.setAttribute('src', '../assets/images/eru.jpg');\n  imgMeal5.setAttribute('class', 'img-meal');\n  imgMeal5.setAttribute('src', '../assets/images/eru.jpg');\n\n  parMeal1.setAttribute('class', 'par-meal');\n  parMeal1.innerText = 'Dish One(Ekwang)';\n  parMeal2.setAttribute('class', 'par-meal');\n  parMeal2.innerText = 'Dish Two(Yellow Soup)';\n  parMeal3.setAttribute('class', 'par-meal');\n  parMeal3.innerText = 'Dish Three (Egusi Pudding)';\n  parMeal4.setAttribute('class', 'par-meal');\n  parMeal4.innerText = 'Dish Four';\n  parMeal5.setAttribute('class', 'par-meal');\n  parMeal5.innerText = 'Dish Five';\n\n  homeNote.innerText = 'Find The True Taste Here!';\n\n  menu.setAttribute('class', 'menu, main');\n  menu.setAttribute('id', 'myMenu');\n  homeNote.setAttribute('class', 'main-quote');\n  homeImg.setAttribute('class', 'main-menu-img');\n  homeImg.setAttribute('src', '../assets/images/eru.jpg');\n\n  menu.style.display = 'none';\n\n  menu.appendChild(homeImg);\n  menu.appendChild(homeNote);\n  menu.appendChild(meals);\n  meals.appendChild(meal1);\n  meals.appendChild(meal2);\n  meals.appendChild(meal3);\n  meal1.appendChild(imgMeal1);\n  meal1.appendChild(parMeal1);\n  meal2.appendChild(imgMeal2);\n  meal2.appendChild(parMeal2);\n  meal3.appendChild(imgMeal3);\n  meal3.appendChild(parMeal3);\n  meal4.appendChild(imgMeal4);\n  meal4.appendChild(parMeal4);\n  meal5.appendChild(imgMeal5);\n  meal5.appendChild(parMeal5);\n\n  return menu;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menus.js?");

/***/ }),

/***/ "./src/navigationbar.js":
/*!******************************!*\
  !*** ./src/navigationbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navigationBar = () => {\n  const navBar = document.createElement('nav');\n  const navHeader = document.createElement('h1');\n  const navUlist = document.createElement('ul');\n  const homeLi = document.createElement('li');\n  const menuLi = document.createElement('li');\n  const contactLi = document.createElement('li');\n  const homeLink = document.createElement('a');\n  const menuLink = document.createElement('a');\n  const contactLink = document.createElement('a');\n\n  homeLink.innerText = 'Home';\n  menuLink.innerText = 'Menu';\n  contactLink.innerText = 'Contact';\n\n  navBar.setAttribute('class', 'nav-bar');\n  navHeader.setAttribute('class', 'rest-header');\n  navUlist.setAttribute('class', 'menu-list');\n  homeLi.setAttribute('class', 'menu-item');\n  menuLi.setAttribute('class', 'menu-item');\n  contactLi.setAttribute('class', 'menu-item');\n  homeLink.setAttribute('class', 'menu-link');\n  menuLink.setAttribute('class', 'menu-link');\n  contactLink.setAttribute('class', 'menu-link');\n\n  homeLink.setAttribute('id', 'home-link');\n  menuLink.setAttribute('id', 'menu-link');\n  contactLink.setAttribute('id', 'contact-link');\n\n  homeLink.setAttribute('href', '#');\n  menuLink.setAttribute('href', '#');\n  contactLink.setAttribute('href', '#');\n\n  navBar.appendChild(navHeader);\n  navBar.appendChild(navUlist);\n  navUlist.appendChild(homeLi);\n  navUlist.appendChild(menuLi);\n  navUlist.appendChild(contactLi);\n  homeLi.appendChild(homeLink);\n  menuLi.appendChild(menuLink);\n  contactLi.appendChild(contactLink);\n\n  return navBar;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigationBar);\n\n//# sourceURL=webpack://restaurant-page/./src/navigationbar.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;