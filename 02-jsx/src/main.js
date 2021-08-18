function h(type, props, ...children) {
  return { type, props, children }
}

const vm = (
  h('div', { id: 'app' },
    h('ul', null,
      h('li', null,
        h('input', { type: 'checkbox', className: 'toggle' }),
        'todo list item 1',
        h('button', { className: 'remove' }, '삭제')
      ),
      h('li', { className: 'completed' },
        h('input', { type: 'checkbox', className: 'toggle', checked: true }),
        'todo list item 2',
        h('button', { className: 'remove' }, '삭제')
      ),
    ),
    h('form',
      h('input', { type: 'text' }),
      h('button', { type: 'submit' }, '추가'),
    )
  )
);

const $root = document.body.querySelector('#root');

$root.innerHTML = `
  <pre>${JSON.stringify(vm, null, 2)}</pre>
`
