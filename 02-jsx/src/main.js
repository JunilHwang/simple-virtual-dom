/** @jsx h */
function h(type, props, ...children) {
  return { type, props, children }
}

const vm = (
  <div id="app">
    <ul>
      <li>
        <input type="checkbox" class="toggle"/>
        todo list item 1
        <button class="remove">삭제</button>
      </li>
      <li class="completed">
        <input type="checkbox" class="toggle" checked/>
        todo list item 2
        <button class="remove">삭제</button>
      </li>
    </ul>
    <form>
      <input type="text"/>
      <button type="submit">추가</button>
    </form>
  </div>
);

const $root = document.body.querySelector('#root');

$root.innerHTML = `
  <pre>${JSON.stringify(vm, null, 2)}</pre>
`
