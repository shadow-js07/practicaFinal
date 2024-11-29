const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('La página debe contener "Hola mundo DevOps práctica final."', () => {
    const html = fs.readFileSync(path.resolve(__dirname, 'src', 'Final.html'), 'utf8');
    const dom = new JSDOM(html);
    const h1 = dom.window.document.querySelector('h1');
    expect(h1.textContent).toBe('Hola mundo DevOps práctica final.');
});