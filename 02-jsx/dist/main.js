"use strict";

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

var vm = h('div', {
  id: 'app'
}, h('ul', null, h('li', null, h('input', {
  type: 'checkbox',
  className: 'toggle'
}), 'todo list item 1', h('button', {
  className: 'remove'
}, '삭제')), h('li', {
  className: 'completed'
}, h('input', {
  type: 'checkbox',
  className: 'toggle',
  checked: true
}), 'todo list item 2', h('button', {
  className: 'remove'
}, '삭제'))), h('form', h('input', {
  type: 'text'
}), h('button', {
  type: 'submit'
}, '추가')));
var $root = document.body.querySelector('#root');
$root.innerHTML = "\n  <pre>".concat(JSON.stringify(vm, null, 2), "</pre>\n");