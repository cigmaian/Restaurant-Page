/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact() {
  var contact = document.createElement('div');
  contact.classList.add('contact');
  var phoneNumber = document.createElement('p');
  phoneNumber.textContent = '📞 123 456 789';
  var address = document.createElement('p');
  address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA';
  var restaurantLocation = document.createElement('img');
  restaurantLocation.src = 'images/restaurant-location.png';
  restaurantLocation.alt = 'Mozzafiato restaurant location';
  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);
  return contact;
}

function loadContact() {
  var main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome() {
  var home = document.createElement("div");
  home.classList.add("home");
  var chefImage = document.createElement("img");
  chefImage.src = "images/chef.png";
  chefImage.alt = "Chef";
  home.appendChild(createParagraph("Best pizza in your country"));
  home.appendChild(createParagraph("Made with passion since 1908"));
  home.appendChild(chefImage);
  home.appendChild(createParagraph("Order online or visit us!"));
  return home;
}

function createParagraph(text) {
  var paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  var main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
  var menu = document.createElement("div");
  menu.classList.add("menu");
  menu.appendChild(createMenuItem("Salsiccia", "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"));
  menu.appendChild(createMenuItem("Gamberi", "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"));
  menu.appendChild(createMenuItem("Pepe", "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"));
  menu.appendChild(createMenuItem("Disgustoso", "Tomato sauce, Bacon, Pineapple, Olives, Basil"));
  menu.appendChild(createMenuItem("Colorato", "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"));
  menu.appendChild(createMenuItem("Pomodoro", "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"));
  menu.appendChild(createMenuItem("Crema", "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"));
  menu.appendChild(createMenuItem("Carne", "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"));
  return menu;
}

function createMenuItem(name, description) {
  var menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  var foodName = document.createElement("h2");
  foodName.textContent = name;
  var foodDescription = document.createElement("p");
  foodDescription.textContent = description;
  var foodImage = document.createElement("img");
  foodImage.src = "images/pizzas/".concat(name.toLowerCase(), ".png");
  foodImage.alt = "".concat(name);
  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);
  return menuItem;
}

function loadMenu() {
  var main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





function createHeader() {
  var header = document.createElement("header");
  header.classList.add("header");
  var restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Mozzafiato";
  header.appendChild(restaurantName);
  header.appendChild(createNav());
  return header;
}

function createNav() {
  var nav = document.createElement("nav");
  var homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  var menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
  var contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  return nav;
}

function setActiveButton(button) {
  var _this = this;

  var buttons = document.querySelectorAll(".button-nav");
  buttons.forEach(function (button) {
    if (button !== _this) {
      button.classList.remove("active");
    }
  });
  button.classList.add("active");
}

function createMain() {
  var main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  var footer = document.createElement("footer");
  footer.classList.add("footer");
  var copyright = document.createElement("p");
  copyright.textContent = "Copyright \xA9 ".concat(new Date().getFullYear(), " michalosman");
  var githubLink = document.createElement("a");
  githubLink.href = "https://github.com/michalosman";
  var githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");
  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);
  return footer;
}

function initializeWebsite() {
  var content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  setActiveButton(document.querySelector(".button-nav"));
  (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);
/*
import background from './img/background.jpg';

function component() {
  let m = document.createElement('main');
  let p = document.createElement('p');
  let img = document.createElement('img');
  img.classList.add('background');
  m.append(p);
  p.append(img);
  img.src = background;
  img.alt = 'background';
  return m;
}

export default component;



*/

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-color: #eee;\n  --font-color-dark: #aaa;\n  --border-color: #222;\n  --background-light: rgba(0, 0, 0, 0.6);\n  --background-light-hover: rgba(99, 99, 99, 0.4);\n  --background-dark: rgba(0, 0, 0, 0.9);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  line-height: 1.6;\n}\n\nbody {\n  font-family: 'Montserrat', cursive;\n  font-size: 1.6rem;\n  color: var(--font-color);\n  /*background-image: url('images/background.jpg'); */\n  background-attachment: fixed;\n  background-size: cover;\n}\n\nheader {\n  font-size: 2.4rem;\n}\n\nh1,\nh2,\nh3 {\n  line-height: 1.2;\n}\n\na {\n  text-decoration: none;\n  color: var(--font-color);\n}\n\nimg {\n  display: block;\n  width: 100%;\n}\n\nbutton {\n  font-family: inherit;\n  color: inherit;\n  cursor: pointer;\n  border-style: none;\n  outline: none;\n}\n\n/* Content */\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 2rem;\n  background-color: var(--background-dark);\n  border-bottom: 1px solid var(--border-color);\n}\n\n.restaurant-name {\n  margin-bottom: 1rem;\n  font-family: 'Tangerine', cursive;\n  font-size: 10rem;\n}\n\n.button-nav {\n  padding: 2rem;\n  font-size: 2rem;\n  background-color: transparent;\n  border-bottom: 2px solid transparent;\n  transition: transform 0.3s;\n}\n\n.button-nav.active {\n  border-bottom: 2px solid var(--font-color);\n}\n\n.button-nav:hover {\n  transform: translateY(-10%);\n}\n\n/* Main */\n\n.main {\n  max-width: 700px;\n  padding: 4rem;\n  margin: 6rem 0;\n  font-size: 2rem;\n  background-color: var(--background-light);\n  border: 1px solid var(--border-color);\n}\n\n/* Home page */\n\n.home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 525px;\n  width: 618px;\n  animation: fadeIn 1.5s;\n}\n\n.home p {\n  padding: 1rem;\n}\n\n.home img {\n  width: 50%;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  opacity: 90%;\n}\n\n/* Menu page */\n\n.menu {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 4rem;\n  animation: fadeIn 1.5s;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  padding: 4rem;\n  cursor: pointer;\n  background-color: var(--background-light);\n  transition: background-color 0.3s;\n}\n\n.menu-item:hover {\n  background-color: var(--background-light-hover);\n}\n\n.menu-item img {\n  width: 60%;\n}\n\n.menu-item h2 {\n  padding: 2rem;\n}\n\n.menu-item p {\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n/* Contact page */\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 525px;\n  width: 618px;\n  animation: fadeIn 1.5s;\n}\n\n.contact p {\n  width: 100%;\n  padding: 1rem;\n}\n\n.contact img {\n  max-height: 420px;\n  padding: 1rem;\n  opacity: 90%;\n}\n\n/* Footer */\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem;\n  border-top: 1px solid var(--border-color);\n  background-color: var(--background-light);\n}\n\n.fa-github {\n  font-size: 2rem;\n}\n\n.fa-github:hover {\n  color: var(--font-color-dark);\n}\n\n/* Scrollbar */\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background-color: #000;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #222;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: #444;\n}\n\n/* Animations */\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Media queries */\n\n@media (max-width: 700px) {\n  .home,\n  .contact {\n    height: 100%;\n    width: 100%;\n  }\n\n  .menu {\n    grid-template-columns: 1fr;\n  }\n\n  .menu img {\n    width: 50%;\n  }\n}\n\n@media (max-width: 500px) {\n  html {\n    font-size: 57.5%;\n  }\n\n  .home img {\n    width: 80%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --font-color: #eee;\n  --font-color-dark: #aaa;\n  --border-color: #222;\n  --background-light: rgba(0, 0, 0, 0.6);\n  --background-light-hover: rgba(99, 99, 99, 0.4);\n  --background-dark: rgba(0, 0, 0, 0.9);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  line-height: 1.6;\n}\n\nbody {\n  font-family: 'Montserrat', cursive;\n  font-size: 1.6rem;\n  color: var(--font-color);\n  /*background-image: url('images/background.jpg'); */\n  background-attachment: fixed;\n  background-size: cover;\n}\n\nheader {\n  font-size: 2.4rem;\n}\n\nh1,\nh2,\nh3 {\n  line-height: 1.2;\n}\n\na {\n  text-decoration: none;\n  color: var(--font-color);\n}\n\nimg {\n  display: block;\n  width: 100%;\n}\n\nbutton {\n  font-family: inherit;\n  color: inherit;\n  cursor: pointer;\n  border-style: none;\n  outline: none;\n}\n\n/* Content */\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 2rem;\n  background-color: var(--background-dark);\n  border-bottom: 1px solid var(--border-color);\n}\n\n.restaurant-name {\n  margin-bottom: 1rem;\n  font-family: 'Tangerine', cursive;\n  font-size: 10rem;\n}\n\n.button-nav {\n  padding: 2rem;\n  font-size: 2rem;\n  background-color: transparent;\n  border-bottom: 2px solid transparent;\n  transition: transform 0.3s;\n}\n\n.button-nav.active {\n  border-bottom: 2px solid var(--font-color);\n}\n\n.button-nav:hover {\n  transform: translateY(-10%);\n}\n\n/* Main */\n\n.main {\n  max-width: 700px;\n  padding: 4rem;\n  margin: 6rem 0;\n  font-size: 2rem;\n  background-color: var(--background-light);\n  border: 1px solid var(--border-color);\n}\n\n/* Home page */\n\n.home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 525px;\n  width: 618px;\n  animation: fadeIn 1.5s;\n}\n\n.home p {\n  padding: 1rem;\n}\n\n.home img {\n  width: 50%;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  opacity: 90%;\n}\n\n/* Menu page */\n\n.menu {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 4rem;\n  animation: fadeIn 1.5s;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  padding: 4rem;\n  cursor: pointer;\n  background-color: var(--background-light);\n  transition: background-color 0.3s;\n}\n\n.menu-item:hover {\n  background-color: var(--background-light-hover);\n}\n\n.menu-item img {\n  width: 60%;\n}\n\n.menu-item h2 {\n  padding: 2rem;\n}\n\n.menu-item p {\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n/* Contact page */\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 525px;\n  width: 618px;\n  animation: fadeIn 1.5s;\n}\n\n.contact p {\n  width: 100%;\n  padding: 1rem;\n}\n\n.contact img {\n  max-height: 420px;\n  padding: 1rem;\n  opacity: 90%;\n}\n\n/* Footer */\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem;\n  border-top: 1px solid var(--border-color);\n  background-color: var(--background-light);\n}\n\n.fa-github {\n  font-size: 2rem;\n}\n\n.fa-github:hover {\n  color: var(--font-color-dark);\n}\n\n/* Scrollbar */\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background-color: #000;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #222;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: #444;\n}\n\n/* Animations */\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Media queries */\n\n@media (max-width: 700px) {\n  .home,\n  .contact {\n    height: 100%;\n    width: 100%;\n  }\n\n  .menu {\n    grid-template-columns: 1fr;\n  }\n\n  .menu img {\n    width: 50%;\n  }\n}\n\n@media (max-width: 500px) {\n  html {\n    font-size: 57.5%;\n  }\n\n  .home img {\n    width: 80%;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");

(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();
/*
import style from './style.css'
import component from './website';


console.log('buan');

document.body.append(component());
*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQixLQUFLLEdBQUcsT0FBTywrRUFBK0UsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FB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Q2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTEE7QUFFQUEsb0RBQWlCO0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpXG5cbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAn8J+TniAxMjMgNDU2IDc4OSdcblxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSAn8J+PoCBIb2xseXdvb2QgQm91bGV2YXJkIDQyLCBMb3MgQW5nZWxlcywgVVNBJ1xuXG4gIGNvbnN0IHJlc3RhdXJhbnRMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIHJlc3RhdXJhbnRMb2NhdGlvbi5zcmMgPSAnaW1hZ2VzL3Jlc3RhdXJhbnQtbG9jYXRpb24ucG5nJ1xuICByZXN0YXVyYW50TG9jYXRpb24uYWx0ID0gJ01venphZmlhdG8gcmVzdGF1cmFudCBsb2NhdGlvbidcblxuICBjb250YWN0LmFwcGVuZENoaWxkKHBob25lTnVtYmVyKVxuICBjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3MpXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQocmVzdGF1cmFudExvY2F0aW9uKVxuXG4gIHJldHVybiBjb250YWN0XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcbiAgbWFpbi50ZXh0Q29udGVudCA9ICcnXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdCIsIlxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbiAgY29uc3QgY2hlZkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY2hlZkltYWdlLnNyYyA9IFwiaW1hZ2VzL2NoZWYucG5nXCI7XG4gIGNoZWZJbWFnZS5hbHQgPSBcIkNoZWZcIjtcblxuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIkJlc3QgcGl6emEgaW4geW91ciBjb3VudHJ5XCIpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoXCJNYWRlIHdpdGggcGFzc2lvbiBzaW5jZSAxOTA4XCIpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjaGVmSW1hZ2UpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIk9yZGVyIG9ubGluZSBvciB2aXNpdCB1cyFcIikpO1xuXG4gIHJldHVybiBob21lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXJhZ3JhcGgodGV4dCkge1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHBhcmFncmFwaDtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIlNhbHNpY2NpYVwiLFxuICAgICAgXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgVG9tYXRvLCBIb21lbWFkZSBzYXVzYWdlLCBHYXJsaWMsIEJhc2lsXCJcbiAgICApXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIkdhbWJlcmlcIixcbiAgICAgIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFNocmltcHMsIEZldGEgY2hlZXNlLCBPbGl2ZXMsIEJhc2lsXCJcbiAgICApXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIlBlcGVcIixcbiAgICAgIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIENoaWxsaSBmbGFrZXMsIE9saXZlcywgQmFzaWxcIlxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiRGlzZ3VzdG9zb1wiLFxuICAgICAgXCJUb21hdG8gc2F1Y2UsIEJhY29uLCBQaW5lYXBwbGUsIE9saXZlcywgQmFzaWxcIlxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiQ29sb3JhdG9cIixcbiAgICAgIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIE9uaW9uLCBQZXBwZXIsIENoYW1waWdub25zLCBCYXNpbFwiXG4gICAgKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJQb21vZG9yb1wiLFxuICAgICAgXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgVG9tYXRvLCBPbmlvbiwgRmV0YSBjaGVlc2UsIENoaWxsaVwiXG4gICAgKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJDcmVtYVwiLFxuICAgICAgXCJXaGl0ZSBzYXVjZSwgTW96YXJlbGxhLCBTaHJpbXBzLCBTYWxtb24sIFBpbmVhcHBsZSwgT2xpdmVzLCBCYXNpbFwiXG4gICAgKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJDYXJuZVwiLFxuICAgICAgXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgSG9tZW1hZGUgc2F1c2FnZSwgQmFjb24sIEdhcmxpYywgUGVwcGVyLCBDaGlsbGlcIlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuXG4gIGNvbnN0IGZvb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBmb29kTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3QgZm9vZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvb2REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGZvb2RJbWFnZS5zcmMgPSBgaW1hZ2VzL3Bpenphcy8ke25hbWUudG9Mb3dlckNhc2UoKX0ucG5nYDtcbiAgZm9vZEltYWdlLmFsdCA9IGAke25hbWV9YDtcblxuICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kTmFtZSk7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2REZXNjcmlwdGlvbik7XG5cbiAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9tYWluLmNzcyc7XG5cbmltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnQtbmFtZVwiKTtcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIk1venphZmlhdG9cIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW5hdlwiKTtcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XG4gICAgbG9hZEhvbWUoKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1uYXZcIik7XG4gIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdXR0b24pO1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbmF2XCIpO1xuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnV0dG9uKTtcbiAgICBsb2FkQ29udGFjdCgpO1xuICB9KTtcblxuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uLW5hdlwiKTtcblxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBtaWNoYWxvc21hbmA7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWxvc21hblwiO1xuXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFiXCIpO1xuICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1naXRodWJcIik7XG5cbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbmF2XCIpKTtcbiAgbG9hZEhvbWUoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7XG5cbi8qXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuL2ltZy9iYWNrZ3JvdW5kLmpwZyc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgbGV0IG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kJyk7XG4gIG0uYXBwZW5kKHApO1xuICBwLmFwcGVuZChpbWcpO1xuICBpbWcuc3JjID0gYmFja2dyb3VuZDtcbiAgaW1nLmFsdCA9ICdiYWNrZ3JvdW5kJztcbiAgcmV0dXJuIG07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudDtcblxuXG5cbiovIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWZvbnQtY29sb3I6ICNlZWU7XFxuICAtLWZvbnQtY29sb3ItZGFyazogI2FhYTtcXG4gIC0tYm9yZGVyLWNvbG9yOiAjMjIyO1xcbiAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAtLWJhY2tncm91bmQtbGlnaHQtaG92ZXI6IHJnYmEoOTksIDk5LCA5OSwgMC40KTtcXG4gIC0tYmFja2dyb3VuZC1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvYmFja2dyb3VuZC5qcGcnKTsgKi9cXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG5pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBDb250ZW50ICovXFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtbmFtZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG59XFxuXFxuLmJ1dHRvbi1uYXYge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbi5idXR0b24tbmF2LmFjdGl2ZSB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5idXR0b24tbmF2OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcbi5tYWluIHtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgbWFyZ2luOiA2cmVtIDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi8qIEhvbWUgcGFnZSAqL1xcblxcbi5ob21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MjVweDtcXG4gIHdpZHRoOiA2MThweDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxufVxcblxcbi5ob21lIHAge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmhvbWUgaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIG9wYWNpdHk6IDkwJTtcXG59XFxuXFxuLyogTWVudSBwYWdlICovXFxuXFxuLm1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLWdhcDogNHJlbTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQtaG92ZXIpO1xcbn1cXG5cXG4ubWVudS1pdGVtIGltZyB7XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4ubWVudS1pdGVtIGgyIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5tZW51LWl0ZW0gcCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogQ29udGFjdCBwYWdlICovXFxuXFxuLmNvbnRhY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUyNXB4O1xcbiAgd2lkdGg6IDYxOHB4O1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcXG59XFxuXFxuLmNvbnRhY3QgcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jb250YWN0IGltZyB7XFxuICBtYXgtaGVpZ2h0OiA0MjBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBvcGFjaXR5OiA5MCU7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWRhcmspO1xcbn1cXG5cXG4vKiBTY3JvbGxiYXIgKi9cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcbn1cXG5cXG4vKiBBbmltYXRpb25zICovXFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5ob21lLFxcbiAgLmNvbnRhY3Qge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLm1lbnUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG5cXG4gIC5tZW51IGltZyB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTcuNSU7XFxuICB9XFxuXFxuICAuaG9tZSBpbWcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixzQ0FBc0M7RUFDdEMsK0NBQStDO0VBQy9DLHFDQUFxQztBQUN2Qzs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlC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Z0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1mb250LWNvbG9yOiAjZWVlO1xcbiAgLS1mb250LWNvbG9yLWRhcms6ICNhYWE7XFxuICAtLWJvcmRlci1jb2xvcjogIzIyMjtcXG4gIC0tYmFja2dyb3VuZC1saWdodDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgLS1iYWNrZ3JvdW5kLWxpZ2h0LWhvdmVyOiByZ2JhKDk5LCA5OSwgOTksIDAuNCk7XFxuICAtLWJhY2tncm91bmQtZGFyazogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL2JhY2tncm91bmQuanBnJyk7ICovXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogQ29udGVudCAqL1xcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5yZXN0YXVyYW50LW5hbWUge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnVGFuZ2VyaW5lJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxufVxcblxcbi5idXR0b24tbmF2IHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG4uYnV0dG9uLW5hdi5hY3RpdmUge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uYnV0dG9uLW5hdjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG4ubWFpbiB7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIG1hcmdpbjogNnJlbSAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4vKiBIb21lIHBhZ2UgKi9cXG5cXG4uaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogNTI1cHg7XFxuICB3aWR0aDogNjE4cHg7XFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcbn1cXG5cXG4uaG9tZSBwIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5ob21lIGltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICBvcGFjaXR5OiA5MCU7XFxufVxcblxcbi8qIE1lbnUgcGFnZSAqL1xcblxcbi5tZW51IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC1nYXA6IDRyZW07XFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0LWhvdmVyKTtcXG59XFxuXFxuLm1lbnUtaXRlbSBpbWcge1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLm1lbnUtaXRlbSBoMiB7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIENvbnRhY3QgcGFnZSAqL1xcblxcbi5jb250YWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MjVweDtcXG4gIHdpZHRoOiA2MThweDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxufVxcblxcbi5jb250YWN0IHAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY29udGFjdCBpbWcge1xcbiAgbWF4LWhlaWdodDogNDIwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgb3BhY2l0eTogOTAlO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1kYXJrKTtcXG59XFxuXFxuLyogU2Nyb2xsYmFyICovXFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG59XFxuXFxuLyogQW5pbWF0aW9ucyAqL1xcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAuaG9tZSxcXG4gIC5jb250YWN0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5tZW51IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuXFxuICAubWVudSBpbWcge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDU3LjUlO1xcbiAgfVxcblxcbiAgLmhvbWUgaW1nIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL3dlYnNpdGVcIjtcblxuaW5pdGlhbGl6ZVdlYnNpdGUoKTtcblxuLypcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcydcbmltcG9ydCBjb21wb25lbnQgZnJvbSAnLi93ZWJzaXRlJztcblxuXG5jb25zb2xlLmxvZygnYnVhbicpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZChjb21wb25lbnQoKSk7XG4qLyJdLCJuYW1lcyI6WyJjcmVhdGVDb250YWN0IiwiY29udGFjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInBob25lTnVtYmVyIiwidGV4dENvbnRlbnQiLCJhZGRyZXNzIiwicmVzdGF1cmFudExvY2F0aW9uIiwic3JjIiwiYWx0IiwiYXBwZW5kQ2hpbGQiLCJsb2FkQ29udGFjdCIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUhvbWUiLCJob21lIiwiY2hlZkltYWdlIiwiY3JlYXRlUGFyYWdyYXBoIiwidGV4dCIsInBhcmFncmFwaCIsImxvYWRIb21lIiwiY3JlYXRlTWVudSIsIm1lbnUiLCJjcmVhdGVNZW51SXRlbSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm1lbnVJdGVtIiwiZm9vZE5hbWUiLCJmb29kRGVzY3JpcHRpb24iLCJmb29kSW1hZ2UiLCJ0b0xvd2VyQ2FzZSIsImxvYWRNZW51Iiwic3R5bGUiLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXIiLCJyZXN0YXVyYW50TmFtZSIsImNyZWF0ZU5hdiIsIm5hdiIsImhvbWVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNvbnRhaW5zIiwic2V0QWN0aXZlQnV0dG9uIiwibWVudUJ1dHRvbiIsImNvbnRhY3RCdXR0b24iLCJidXR0b24iLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyZW1vdmUiLCJjcmVhdGVNYWluIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlRm9vdGVyIiwiZm9vdGVyIiwiY29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2l0aHViTGluayIsImhyZWYiLCJnaXRodWJJY29uIiwiaW5pdGlhbGl6ZVdlYnNpdGUiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=