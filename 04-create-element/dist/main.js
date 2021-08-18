"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/** @jsx h */
function h(type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    type: type,
    props: props,
    children: children.flat()
  };
}

function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  var $el = document.createElement(node.type);
  Object.entries(node.props || {}).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        value = _ref2[1];

    return value && $el.setAttribute(attr, value);
  });

  try {
    node.children.map(createElement).forEach(function (child) {
      return $el.appendChild(child);
    });
  } catch (e) {
    console.log(node);
    console.error(e);
  }

  return $el;
}

var state = [{
  id: 1,
  completed: false,
  content: 'todo list item 1'
}, {
  id: 2,
  completed: true,
  content: 'todo list item 2'
}];
var el = createElement(h("div", {
  id: "app"
}, h("ul", null, state.map(function (_ref3) {
  var completed = _ref3.completed,
      content = _ref3.content;
  return h("li", {
    className: completed ? 'completed' : null
  }, h("input", {
    type: "checkbox",
    className: "toggle",
    checked: completed
  }), content, h("button", {
    className: "remove"
  }, "\uC0AD\uC81C"));
})), h("form", null, h("input", {
  type: "text"
}), h("button", {
  type: "submit"
}, "\uCD94\uAC00"))));
var $root = document.body.querySelector('#root');
$root.appendChild(el);