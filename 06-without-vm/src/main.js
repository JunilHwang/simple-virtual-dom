import { updateElement } from "./updateElement.js";

const oldState = [
  { id: 1, completed: false, content: 'todo list item 1' },
  { id: 2, completed: true, content: 'todo list item 2' },
];

const newState = [
  { id: 1, completed: true, content: 'todo list item 1 update' },
  { id: 2, completed: true, content: 'todo list item 2' },
  { id: 3, completed: false, content: 'todo list item 3' },
];

const render = (state) => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div id="app">
      <ul>
        ${ state.map(({ completed, content }) => `
          <li class="${completed ? 'completed' : ''}">
            <input type="checkbox" class="toggle" ${completed ? 'checked' : ''} />
            ${content}
            <button class="remove">삭제</button>
          </li>
        `).join('') }
      </ul>
      <form>
        <input type="text" />
        <button type="submit">추가</button>
      </form>
    </div>
  `.trim();

  return el.firstChild;
}

const oldNode = render(oldState);
const newNode = render(newState);

const $root = document.createElement('div');

document.body.appendChild($root);
updateElement($root, oldNode);
setTimeout(() =>
    updateElement($root, newNode, oldNode),
  1000
); // 1초 뒤에 DOM 변경