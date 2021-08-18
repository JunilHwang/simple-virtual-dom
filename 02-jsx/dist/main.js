"use strict";

/** @jsx h */
function h(type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    type: type,
    props: props,
    children: children
  };
}

var vm = h("div", {
  id: "app"
}, h("ul", null, h("li", null, h("input", {
  type: "checkbox",
  "class": "toggle"
}), "todo list item 1", h("button", {
  "class": "remove"
}, "\uC0AD\uC81C")), h("li", {
  "class": "completed"
}, h("input", {
  type: "checkbox",
  "class": "toggle",
  checked: true
}), "todo list item 2", h("button", {
  "class": "remove"
}, "\uC0AD\uC81C"))), h("form", null, h("input", {
  type: "text"
}), h("button", {
  type: "submit"
}, "\uCD94\uAC00")));
var $root = document.body.querySelector('#root');
$root.innerHTML = "\n  <pre>".concat(JSON.stringify(vm, null, 2), "</pre>\n");