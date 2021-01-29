(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sandbox"],{

/***/ 0:
/*!*********************************!*\
  !*** multi ./src/js/sandbox.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mat/Sites/static/quote-generator/src/js/sandbox.js */"1WHe");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1WHe":
/*!***************************!*\
  !*** ./src/js/sandbox.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airbnb-browser-shims */ "OuUZ");
/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/helpers */ "w2Aq");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_quotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/quotes */ "v6Y4");
/* eslint-disable dot-notation */

/* eslint-disable no-array-constructor */

/* eslint-disable no-alert */

/* eslint-disable no-unused-vars */
// Import externals
 // Import internals


 // Call new quotes class

var quotes = new _modules_quotes__WEBPACK_IMPORTED_MODULE_2__["default"]();
/**
 * Content Goes Here
 */

if (true) console.log("Let's go!!"); // Capitalize first letter

var capitalize = function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}; // Get HTML


var main = document.getElementsByTagName('main')[0];
var loader = document.querySelector('.loading');
var loaderText = document.querySelector('.loading p');
var quoteContainer = document.querySelector('#quote-container');
var quoteText = quoteContainer.querySelector('#quote-text h1');
var quoteAuthor = quoteContainer.querySelector('#author');
var newQuote = quoteContainer.querySelector('#new-quote');
var tweetBtn = quoteContainer.querySelector('#twitter');
var form = main.querySelector('form');
var select = form.querySelector('#quote-categories'); // Set category value

var category = localStorage.getItem('category') ? localStorage.getItem('category') : 'general'; // Pass the quote to Twitter

var tweetQuote = function tweetQuote() {
  var quote = quoteText.textContent;
  var author = quoteAuthor.textContent;
  var tweet = "https://twitter.com/intent/tweet?text=".concat(quote, " - ").concat(author);
  window.open(tweet, '_blank', 'noopener', 'noreferrer');
}; // Update quote


var updateQuote = function updateQuote() {
  main.classList.remove('opacity-100');
  setTimeout(function () {
    loader.classList.remove('hidden');
    main.classList.add('hidden');
  }, 150);
  quotes.fetchQuotes(category).then(function (data) {
    var getQuotes = data.getQuotes;
    updateUI(getQuotes.quotes);
  }).then(function () {
    setTimeout(function () {
      loader.classList.add('hidden');
      main.classList.remove('hidden');
    }, 100);
    setTimeout(function () {
      main.classList.add('opacity-100');
    }, 450);
  })["catch"](function (error) {
    return console.error(error);
  });
}; // Create UI


var populateUI = function populateUI(data) {
  var getQuotes = data.getQuotes,
      getTags = data.getTags;
  var quotes = getQuotes.quotes;
  var tags = getTags.tags;
  var options = Array.from(select.options);
  updateUI(quotes);
  tags.forEach(function (tag) {
    if (tag.name === category) {
      select.options.add(new Option(capitalize(tag.name), tag.name, true, true));
    } else {
      select.options.add(new Option(capitalize(tag.name), tag.name));
    }
  });
}; // Update UI


var updateUI = function updateUI(data) {
  var author = data[0].author;
  var text = data[0].text; // Generate HTML

  quoteText.textContent = text;
  quoteAuthor.textContent = author;

  if (text.length > 120) {
    quoteText.classList.remove('text-2xl', 'sm:text-clamp-2xl4xl', 'lg:text-4xl');
    quoteText.classList.add('text-xl', 'sm:text-clamp-xl3xl', 'lg:text-3xl');
  } else {
    quoteText.classList.remove('text-xl', 'sm:text-clamp-xl3xl', 'lg:text-3xl');
    quoteText.classList.add('text-2xl', 'sm:text-clamp-2xl4xl', 'lg:text-4xl');
  }
}; // Change quote tag


form.addEventListener('submit', function (e) {
  e.preventDefault();
  category = select.value;
  localStorage.setItem('category', select.value);
  updateQuote();
}); // On load

quotes.fetchQuotes(category).then(function (data) {
  populateUI(data);
}).then(function () {
  setTimeout(function () {
    loader.classList.add('hidden');
    loaderText.classList.add('hidden');
    main.classList.remove('hidden');
  }, 100);
  setTimeout(function () {
    main.classList.add('opacity-100');
  }, 450);
})["catch"](function (error) {
  return console.error(error);
}); // Button events

newQuote.addEventListener('click', function () {
  updateQuote();
});
tweetBtn.addEventListener('click', tweetQuote);

/***/ }),

/***/ "v6Y4":
/*!**********************************!*\
  !*** ./src/js/modules/quotes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var Quotes = /*#__PURE__*/function () {
  function Quotes() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Quotes);

    // Add API
    this.api = 'https://goquotes-api.herokuapp.com/api/v1/'; // Set the count

    this.count = 1;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Quotes, [{
    key: "fetchQuotes",
    value: function () {
      var _fetchQuotes = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(tag) {
        var getQuotes, getTags;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getQuotes(tag);

              case 2:
                getQuotes = _context.sent;
                _context.next = 5;
                return this.fetchTags();

              case 5:
                getTags = _context.sent;
                return _context.abrupt("return", {
                  getQuotes: getQuotes,
                  getTags: getTags
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchQuotes(_x) {
        return _fetchQuotes.apply(this, arguments);
      }

      return fetchQuotes;
    }() // Get a random quote

  }, {
    key: "getQuotes",
    value: function () {
      var _getQuotes = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(tag) {
        var query, response, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "random/".concat(this.count, "?type=tag&val=").concat(tag);
                _context2.prev = 1;
                _context2.next = 4;
                return fetch(this.api + query);

              case 4:
                response = _context2.sent;
                _context2.next = 7;
                return response.json();

              case 7:
                data = _context2.sent;

                if (!(data.status !== 200)) {
                  _context2.next = 10;
                  break;
                }

                throw new Error('Cannot fetch the api!');

              case 10:
                return _context2.abrupt("return", data);

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](1);
                console.error('Whoops, no quote!', _context2.t0);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 13]]);
      }));

      function getQuotes(_x2) {
        return _getQuotes.apply(this, arguments);
      }

      return getQuotes;
    }()
  }, {
    key: "fetchTags",
    value: function () {
      var _fetchTags = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return fetch(this.api + 'all/tags');

              case 3:
                response = _context3.sent;
                _context3.next = 6;
                return response.json();

              case 6:
                data = _context3.sent;

                if (!(data.status !== 200)) {
                  _context3.next = 9;
                  break;
                }

                throw new Error('Cannot fetch the api!');

              case 9:
                return _context3.abrupt("return", data);

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](0);
                console.error('Not able to fetch tags', _context3.t0);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 12]]);
      }));

      function fetchTags() {
        return _fetchTags.apply(this, arguments);
      }

      return fetchTags;
    }()
  }]);

  return Quotes;
}();

/* harmony default export */ __webpack_exports__["default"] = (Quotes);

/***/ }),

/***/ "w2Aq":
/*!***********************************!*\
  !*** ./src/js/modules/helpers.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Avoid `console` errors in browsers that lack a console.
;

(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length; // eslint-disable-next-line no-multi-assign

  var console = window.console = window.console || {}; // eslint-disable-next-line no-plusplus

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsLmluc3BlY3QgKGlnbm9yZWQpIiwid2VicGFjazovLy8uL3NyYy9qcy9zYW5kYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3F1b3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbInF1b3RlcyIsIlF1b3RlcyIsInByb2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiY2FwaXRhbGl6ZSIsInMiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwibWFpbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsb2FkZXIiLCJxdWVyeVNlbGVjdG9yIiwibG9hZGVyVGV4dCIsInF1b3RlQ29udGFpbmVyIiwicXVvdGVUZXh0IiwicXVvdGVBdXRob3IiLCJuZXdRdW90ZSIsInR3ZWV0QnRuIiwiZm9ybSIsInNlbGVjdCIsImNhdGVnb3J5IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInR3ZWV0UXVvdGUiLCJxdW90ZSIsInRleHRDb250ZW50IiwiYXV0aG9yIiwidHdlZXQiLCJ3aW5kb3ciLCJvcGVuIiwidXBkYXRlUXVvdGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwiYWRkIiwiZmV0Y2hRdW90ZXMiLCJ0aGVuIiwiZGF0YSIsImdldFF1b3RlcyIsInVwZGF0ZVVJIiwiZXJyb3IiLCJwb3B1bGF0ZVVJIiwiZ2V0VGFncyIsInRhZ3MiLCJvcHRpb25zIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsInRhZyIsIm5hbWUiLCJPcHRpb24iLCJ0ZXh0IiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwic2V0SXRlbSIsImFwaSIsImNvdW50IiwiZmV0Y2hUYWdzIiwicXVlcnkiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsInN0YXR1cyIsIkVycm9yIiwibWV0aG9k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YyxFQWFkLEtBYmMsRUFjZCxjQWRjLEVBZWQsU0FmYyxFQWdCZCxZQWhCYyxFQWlCZCxPQWpCYyxFQWtCZCxNQWxCYyxFQW1CZCxTQW5CYyxFQW9CZCxVQXBCYyxFQXFCZCxhQXJCYyxFQXNCZCxXQXRCYyxFQXVCZCxPQXZCYyxFQXdCZCxNQXhCYyxDQUFoQjtBQUhNLE1BNkJBakIsTUE3QkEsR0E2QldpQixPQTdCWCxDQTZCQWpCLE1BN0JBLEVBOEJOOztBQUNBLE1BQU1wRCxPQUFPLEdBQUk0QixNQUFNLENBQUM1QixPQUFQLEdBQWlCNEIsTUFBTSxDQUFDNUIsT0FBUCxJQUFrQixFQUFwRCxDQS9CTSxDQWlDTjs7QUFDQSxTQUFPb0QsTUFBTSxFQUFiLEVBQWlCO0FBQ2ZlLFVBQU0sR0FBR0UsT0FBTyxDQUFDakIsTUFBRCxDQUFoQixDQURlLENBR2Y7O0FBQ0EsUUFBSSxDQUFDcEQsT0FBTyxDQUFDbUUsTUFBRCxDQUFaLEVBQXNCO0FBQ3BCbkUsYUFBTyxDQUFDbUUsTUFBRCxDQUFQLEdBQWtCQyxJQUFsQjtBQUNEO0FBQ0Y7QUFDRixDQTFDQSxJIiwiZmlsZSI6InNhbmRib3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKGlnbm9yZWQpICovIiwiLyogZXNsaW50LWRpc2FibGUgZG90LW5vdGF0aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hcnJheS1jb25zdHJ1Y3RvciAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8vIEltcG9ydCBleHRlcm5hbHNcbmltcG9ydCAnYWlyYm5iLWJyb3dzZXItc2hpbXMnXG5cbi8vIEltcG9ydCBpbnRlcm5hbHNcbmltcG9ydCAnLi9tb2R1bGVzL2hlbHBlcnMnXG5pbXBvcnQgUXVvdGVzIGZyb20gJy4vbW9kdWxlcy9xdW90ZXMnXG5cbi8vIENhbGwgbmV3IHF1b3RlcyBjbGFzc1xuY29uc3QgcXVvdGVzID0gbmV3IFF1b3RlcygpXG5cbi8qKlxuICogQ29udGVudCBHb2VzIEhlcmVcbiAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGNvbnNvbGUubG9nKFwiTGV0J3MgZ28hIVwiKVxuXG4vLyBDYXBpdGFsaXplIGZpcnN0IGxldHRlclxuY29uc3QgY2FwaXRhbGl6ZSA9IHMgPT4ge1xuICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSByZXR1cm4gJydcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpXG59XG5cbi8vIEdldCBIVE1MXG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXVxuY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKVxuY29uc3QgbG9hZGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nIHAnKVxuY29uc3QgcXVvdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVvdGUtY29udGFpbmVyJylcbmNvbnN0IHF1b3RlVGV4dCA9IHF1b3RlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNxdW90ZS10ZXh0IGgxJylcbmNvbnN0IHF1b3RlQXV0aG9yID0gcXVvdGVDb250YWluZXIucXVlcnlTZWxlY3RvcignI2F1dGhvcicpXG5jb25zdCBuZXdRdW90ZSA9IHF1b3RlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNuZXctcXVvdGUnKVxuY29uc3QgdHdlZXRCdG4gPSBxdW90ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjdHdpdHRlcicpXG5jb25zdCBmb3JtID0gbWFpbi5xdWVyeVNlbGVjdG9yKCdmb3JtJylcbmNvbnN0IHNlbGVjdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3F1b3RlLWNhdGVnb3JpZXMnKVxuXG4vLyBTZXQgY2F0ZWdvcnkgdmFsdWVcbmxldCBjYXRlZ29yeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRlZ29yeScpXG4gID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhdGVnb3J5JylcbiAgOiAnZ2VuZXJhbCdcblxuLy8gUGFzcyB0aGUgcXVvdGUgdG8gVHdpdHRlclxuY29uc3QgdHdlZXRRdW90ZSA9ICgpID0+IHtcbiAgY29uc3QgcXVvdGUgPSBxdW90ZVRleHQudGV4dENvbnRlbnRcbiAgY29uc3QgYXV0aG9yID0gcXVvdGVBdXRob3IudGV4dENvbnRlbnRcbiAgY29uc3QgdHdlZXQgPSBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0ke3F1b3RlfSAtICR7YXV0aG9yfWBcbiAgd2luZG93Lm9wZW4odHdlZXQsICdfYmxhbmsnLCAnbm9vcGVuZXInLCAnbm9yZWZlcnJlcicpXG59XG5cbi8vIFVwZGF0ZSBxdW90ZVxuY29uc3QgdXBkYXRlUXVvdGUgPSAoKSA9PiB7XG4gIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eS0xMDAnKVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIH0sIDE1MClcblxuICBxdW90ZXNcbiAgICAuZmV0Y2hRdW90ZXMoY2F0ZWdvcnkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBjb25zdCB7IGdldFF1b3RlcyB9ID0gZGF0YVxuICAgICAgdXBkYXRlVUkoZ2V0UXVvdGVzLnF1b3RlcylcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgfSwgMTAwKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnb3BhY2l0eS0xMDAnKVxuICAgICAgfSwgNDUwKVxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKVxufVxuXG4vLyBDcmVhdGUgVUlcbmNvbnN0IHBvcHVsYXRlVUkgPSBkYXRhID0+IHtcbiAgY29uc3QgeyBnZXRRdW90ZXMsIGdldFRhZ3MgfSA9IGRhdGFcbiAgY29uc3QgcXVvdGVzID0gZ2V0UXVvdGVzLnF1b3Rlc1xuICBjb25zdCB0YWdzID0gZ2V0VGFncy50YWdzXG4gIGNvbnN0IG9wdGlvbnMgPSBBcnJheS5mcm9tKHNlbGVjdC5vcHRpb25zKVxuXG4gIHVwZGF0ZVVJKHF1b3RlcylcblxuICB0YWdzLmZvckVhY2godGFnID0+IHtcbiAgICBpZiAodGFnLm5hbWUgPT09IGNhdGVnb3J5KSB7XG4gICAgICBzZWxlY3Qub3B0aW9ucy5hZGQobmV3IE9wdGlvbihjYXBpdGFsaXplKHRhZy5uYW1lKSwgdGFnLm5hbWUsIHRydWUsIHRydWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3Qub3B0aW9ucy5hZGQobmV3IE9wdGlvbihjYXBpdGFsaXplKHRhZy5uYW1lKSwgdGFnLm5hbWUpKVxuICAgIH1cbiAgfSlcbn1cblxuLy8gVXBkYXRlIFVJXG5jb25zdCB1cGRhdGVVSSA9IGRhdGEgPT4ge1xuICBjb25zdCBhdXRob3IgPSBkYXRhWzBdLmF1dGhvclxuICBjb25zdCB0ZXh0ID0gZGF0YVswXS50ZXh0XG5cbiAgLy8gR2VuZXJhdGUgSFRNTFxuICBxdW90ZVRleHQudGV4dENvbnRlbnQgPSB0ZXh0XG4gIHF1b3RlQXV0aG9yLnRleHRDb250ZW50ID0gYXV0aG9yXG5cbiAgaWYgKHRleHQubGVuZ3RoID4gMTIwKSB7XG4gICAgcXVvdGVUZXh0LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAndGV4dC0yeGwnLFxuICAgICAgJ3NtOnRleHQtY2xhbXAtMnhsNHhsJyxcbiAgICAgICdsZzp0ZXh0LTR4bCdcbiAgICApXG4gICAgcXVvdGVUZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQteGwnLCAnc206dGV4dC1jbGFtcC14bDN4bCcsICdsZzp0ZXh0LTN4bCcpXG4gIH0gZWxzZSB7XG4gICAgcXVvdGVUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQteGwnLCAnc206dGV4dC1jbGFtcC14bDN4bCcsICdsZzp0ZXh0LTN4bCcpXG4gICAgcXVvdGVUZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQtMnhsJywgJ3NtOnRleHQtY2xhbXAtMnhsNHhsJywgJ2xnOnRleHQtNHhsJylcbiAgfVxufVxuXG4vLyBDaGFuZ2UgcXVvdGUgdGFnXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY2F0ZWdvcnkgPSBzZWxlY3QudmFsdWVcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhdGVnb3J5Jywgc2VsZWN0LnZhbHVlKVxuICB1cGRhdGVRdW90ZSgpXG59KVxuXG4vLyBPbiBsb2FkXG5xdW90ZXNcbiAgLmZldGNoUXVvdGVzKGNhdGVnb3J5KVxuICAudGhlbihkYXRhID0+IHtcbiAgICBwb3B1bGF0ZVVJKGRhdGEpXG4gIH0pXG4gIC50aGVuKCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgbG9hZGVyVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIH0sIDEwMClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnb3BhY2l0eS0xMDAnKVxuICAgIH0sIDQ1MClcbiAgfSlcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKVxuXG4vLyBCdXR0b24gZXZlbnRzXG5uZXdRdW90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdXBkYXRlUXVvdGUoKVxufSlcblxudHdlZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0d2VldFF1b3RlKVxuIiwiY2xhc3MgUXVvdGVzIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8vIEFkZCBBUElcbiAgICB0aGlzLmFwaSA9ICdodHRwczovL2dvcXVvdGVzLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS8nXG4gICAgLy8gU2V0IHRoZSBjb3VudFxuICAgIHRoaXMuY291bnQgPSAxXG4gIH1cblxuICBhc3luYyBmZXRjaFF1b3RlcyAodGFnKSB7XG4gICAgY29uc3QgZ2V0UXVvdGVzID0gYXdhaXQgdGhpcy5nZXRRdW90ZXModGFnKVxuICAgIGNvbnN0IGdldFRhZ3MgPSBhd2FpdCB0aGlzLmZldGNoVGFncygpXG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0UXVvdGVzLFxuICAgICAgZ2V0VGFnc1xuICAgIH1cbiAgfVxuXG4gIC8vIEdldCBhIHJhbmRvbSBxdW90ZVxuICBhc3luYyBnZXRRdW90ZXMgKHRhZykge1xuICAgIGNvbnN0IHF1ZXJ5ID0gYHJhbmRvbS8ke3RoaXMuY291bnR9P3R5cGU9dGFnJnZhbD0ke3RhZ31gXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5hcGkgKyBxdWVyeSlcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgICAgaWYgKGRhdGEuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmV0Y2ggdGhlIGFwaSEnKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdXaG9vcHMsIG5vIHF1b3RlIScsIGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZldGNoVGFncyAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5hcGkgKyAnYWxsL3RhZ3MnKVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgICBpZiAoZGF0YS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmZXRjaCB0aGUgYXBpIScpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vdCBhYmxlIHRvIGZldGNoIHRhZ3MnLCBlcnJvcilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVzXG4iLCIvLyBBdm9pZCBgY29uc29sZWAgZXJyb3JzIGluIGJyb3dzZXJzIHRoYXQgbGFjayBhIGNvbnNvbGUuXG47KCgpID0+IHtcbiAgbGV0IG1ldGhvZFxuICBjb25zdCBub29wID0gKCkgPT4ge31cbiAgY29uc3QgbWV0aG9kcyA9IFtcbiAgICAnYXNzZXJ0JyxcbiAgICAnY2xlYXInLFxuICAgICdjb3VudCcsXG4gICAgJ2RlYnVnJyxcbiAgICAnZGlyJyxcbiAgICAnZGlyeG1sJyxcbiAgICAnZXJyb3InLFxuICAgICdleGNlcHRpb24nLFxuICAgICdncm91cCcsXG4gICAgJ2dyb3VwQ29sbGFwc2VkJyxcbiAgICAnZ3JvdXBFbmQnLFxuICAgICdpbmZvJyxcbiAgICAnbG9nJyxcbiAgICAnbWFya1RpbWVsaW5lJyxcbiAgICAncHJvZmlsZScsXG4gICAgJ3Byb2ZpbGVFbmQnLFxuICAgICd0YWJsZScsXG4gICAgJ3RpbWUnLFxuICAgICd0aW1lRW5kJyxcbiAgICAndGltZWxpbmUnLFxuICAgICd0aW1lbGluZUVuZCcsXG4gICAgJ3RpbWVTdGFtcCcsXG4gICAgJ3RyYWNlJyxcbiAgICAnd2FybicsXG4gIF1cbiAgbGV0IHsgbGVuZ3RoIH0gPSBtZXRob2RzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tdWx0aS1hc3NpZ25cbiAgY29uc3QgY29uc29sZSA9ICh3aW5kb3cuY29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHt9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBtZXRob2QgPSBtZXRob2RzW2xlbmd0aF1cblxuICAgIC8vIE9ubHkgc3R1YiB1bmRlZmluZWQgbWV0aG9kcy5cbiAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xuICAgICAgY29uc29sZVttZXRob2RdID0gbm9vcFxuICAgIH1cbiAgfVxufSkoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==