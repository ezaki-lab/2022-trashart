const fs = require('fs');
const target = './next.config.js';

// コメントアウトを解除する
let text = fs.readFileSync(target, 'utf-8');
text = text.replace('// ', '');

fs.writeFileSync(target, text, (err) => {
  if (err) throw err;
});
