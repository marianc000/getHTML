// shared.js

export function attach(host) {
    const shadowRoot = host.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = '<p>Paragraph <slot>default</slot></p>';
    return shadowRoot;
}
 
export function div(n) {
    const el = document.createElement('div');
    if (n) el.innerHTML = n;
    return el;
}
 