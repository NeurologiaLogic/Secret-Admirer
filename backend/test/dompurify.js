const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);
const marked = require('marked').marked;
const clean = DOMPurify.sanitize('<img src=x onerror=alert(1)//>');

console.log(DOMPurify.sanitize(marked('**hai**')));

