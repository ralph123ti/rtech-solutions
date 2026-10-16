export interface CodeFiles {
  html: string
  css: string
  js: string
}

export interface CodeExample extends CodeFiles {
  id: string
  title: string
}

export const codeExamples: CodeExample[] = [
  {
    id: 'hello',
    title: 'Hello RTech',
    html: `<div class="card">
  <h1>RTech Solutions</h1>
  <p>Build. Innovate. Grow.</p>
</div>`,
    css: `body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #08111f;
  font-family: system-ui, sans-serif;
}

.card {
  text-align: center;
  padding: 24px 32px;
  border: 1px solid #19e68c;
  border-radius: 12px;
}

h1 { color: #fff; margin: 0 0 8px; }
p { color: #19e68c; margin: 0; }`,
    js: `// Try editing the HTML or CSS tabs and watch the preview update.`,
  },
  {
    id: 'counter',
    title: 'Click Counter',
    html: `<div class="box">
  <p>Count: <strong id="count">0</strong></p>
  <button id="add">Add one</button>
</div>`,
    css: `body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #08111f;
  color: #fff;
  font-family: system-ui, sans-serif;
}

.box { text-align: center; }
strong { color: #19e68c; font-size: 2rem; }

button {
  margin-top: 12px;
  padding: 8px 18px;
  border: 0;
  border-radius: 6px;
  background: #19e68c;
  color: #050b18;
  font-weight: 600;
  cursor: pointer;
}`,
    js: `let count = 0;
const label = document.getElementById('count');
const button = document.getElementById('add');

button.addEventListener('click', () => {
  count += 1;
  label.textContent = count;
});`,
  },
  {
    id: 'greeting',
    title: 'Greeting Form',
    html: `<div class="box">
  <label for="name">Your name</label>
  <input id="name" placeholder="Type a name" />
  <button id="go">Say hello</button>
  <p id="out"></p>
</div>`,
    css: `body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #08111f;
  color: #cbd5e1;
  font-family: system-ui, sans-serif;
}

.box { display: grid; gap: 10px; width: 220px; }

input {
  padding: 8px;
  border: 1px solid #2f8cff;
  border-radius: 6px;
  background: #050b18;
  color: #fff;
}

button {
  padding: 8px;
  border: 0;
  border-radius: 6px;
  background: #2f8cff;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

#out { color: #19e68c; min-height: 1.5em; margin: 0; }`,
    js: `const input = document.getElementById('name');
const out = document.getElementById('out');

document.getElementById('go').addEventListener('click', () => {
  const name = input.value.trim();
  out.textContent = name ? 'Hello, ' + name + '!' : 'Please type a name.';
});`,
  },
]