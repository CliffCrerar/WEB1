/* MAIN JS ENTRY POINT BITCH */

const pug = require('pug');

html = pug.renderFile('./src/page/temp.pug');

$('body').append(html);