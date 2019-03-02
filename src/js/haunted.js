import { html } from '../lib/lit-html/lit-html.js'
import { component, useState, useEffect } from '../lib/haunted/web.js'
//import ready from '../../node_modules/document-ready'

// 元件一
function Counter() {
  const [count, setCount] = useState(0)

  return html`
    <div id="count">元件1：${count}</div>
    <button type="button" @click=${() => setCount(count + 1)}>Increment</button>
  `
}

// 元件二
function Counter2() {
  const [count, setCount] = useState(0)

  useEffect(_ => {
    throw document.querySelector('#count2') //元件仍未准备好，可能跟lit-html为虚拟dom有关
  }, [])

  return html`
    <div id="count2">元件2：${count}</div>
    <button type="button" @click=${() => setCount(count + 1)}>Increment</button>
  `
}

// Main
function Main(){
  return html /*syntax:html*/`
    <div>
      ${Counter()}
      ${Counter2()}
    </div>
  `
}
customElements.define('my-app', component(Counter))
