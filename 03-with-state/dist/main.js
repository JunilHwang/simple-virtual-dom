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

var state = [{
  id: 1,
  completed: false,
  content: 'todo list item 1'
}, {
  id: 2,
  completed: true,
  content: 'todo list item 2'
}];
var vm = h("div", {
  id: "app"
}, h("ul", null, state.map(function (_ref) {
  var completed = _ref.completed,
      content = _ref.content;
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
}, "\uCD94\uAC00")));
var $root = document.body.querySelector('#root');
$root.innerHTML = "\n  <pre>".concat(JSON.stringify(vm, null, 2), "</pre>\n");