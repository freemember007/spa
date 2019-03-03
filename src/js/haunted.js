import { html } from '../lib/lit-html/lit-html.js'
import { component, useState, useEffect } from '../lib/haunted/web.js'

// 元件一
function Counter() {
  const [count, setCount] = useState(0)

  return html /*syntax:html*/`
    <div id="count" class="border">元件1：${count}</div>
    <button type="button" @click=${() => setCount(count + 1)}>Increment</button>
  `
}

// 元件二
function Counter2() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({})

  useEffect(_ => {
    setTimeout(_ => setUser({ name: 'xjp2' }), 500)
  }, [])

  function onClick () {
    document.querySelector('#count2').innerText = 'hi man!'
  }

  return html /*syntax:html*/`
    <div id="count2" class="hightlight" @click="${onClick}">
      元件2：${count}
    </div>
    <button type="button" @click=${() => setCount(count + 1)}>
      Increment
    </button>
    ${user.name}
    <style>
      .hightlight {
        color: white;
        background: red;
      }
    </style>
  `
}

// Main
function Main(){
  return html`
    ${Counter()}
    ${Counter2()}
  `
}
customElements.define('my-app', component(Main, HTMLElement, {useShadowDOM: false}))
