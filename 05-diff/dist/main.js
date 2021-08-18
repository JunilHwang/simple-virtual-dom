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
  Object.entries(node.props || {}).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        value = _ref2[1];

    return value;
  }).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        attr = _ref4[0],
        value = _ref4[1];

    return $el.setAttribute(attr, value);
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

function updateElement(parent, newNode, oldNode) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (!newNode && oldNode) {
    return parent.removeChild(parent.childNodes[index]);
  }

  if (newNode && !oldNode) {
    return parent.appendChild(createElement(newNode));
  }

  if (typeof newNode === "string" && typeof oldNode === "string") {
    if (newNode === oldNode) return;
    return parent.replaceChild(createElement(newNode), parent.childNodes[index]);
  }

  if (newNode.type !== oldNode.type) {
    return parent.replaceChild(createElement(newNode), parent.childNodes[index]);
  }

  updateAttributes(parent.childNodes[index], newNode.props || {}, oldNode.props || {});
  var maxLength = Math.max(newNode.children.length, oldNode.children.length);

  for (var i = 0; i < maxLength; i++) {
    updateElement(parent.childNodes[index], newNode.children[i], oldNode.children[i], i);
  }
}

function updateAttributes(target, newProps, oldProps) {
  for (var _i2 = 0, _Object$entries = Object.entries(newProps); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        attr = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (oldProps[attr] === newProps[attr]) continue;
    target.setAttribute(attr, value);
  }

  for (var _i3 = 0, _Object$keys = Object.keys(oldProps); _i3 < _Object$keys.length; _i3++) {
    var _attr = _Object$keys[_i3];
    if (newProps[_attr] !== undefined) continue;
    target.removeAttribute(_attr);
  }
}

var oldState = [{
  id: 1,
  completed: false,
  content: 'todo list item 1'
}, {
  id: 2,
  completed: true,
  content: 'todo list item 2'
}];
var newState = [{
  id: 1,
  completed: true,
  content: 'todo list item 1 update'
}, {
  id: 2,
  completed: true,
  content: 'todo list item 2'
}, {
  id: 3,
  completed: false,
  content: 'todo list item 3'
}];

var render = function render(state) {
  return h("div", {
    id: "app"
  }, h("ul", null, state.map(function (_ref5) {
    var completed = _ref5.completed,
        content = _ref5.content;
    return h("li", {
      "class": completed ? 'completed' : null
    }, h("input", {
      type: "checkbox",
      "class": "toggle",
      checked: completed
    }), content, h("button", {
      "class": "remove"
    }, "\uC0AD\uC81C"));
  })), h("form", null, h("input", {
    type: "text"
  }), h("button", {
    type: "submit"
  }, "\uCD94\uAC00")));
};

var oldNode = render(oldState);
var newNode = render(newState);
var $root = document.createElement('div');
document.body.appendChild($root);
updateElement($root, oldNode);
setTimeout(function () {
  return updateElement($root, newNode, oldNode);
}, 1500); // 1초 뒤에 DOM 변경