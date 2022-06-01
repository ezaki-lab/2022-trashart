const fs = require('fs');
const target = './next.config.js';

// basePathを /~trashart に変更する
let text = fs.readFileSync(target, 'utf-8');
text = text.replace('// basePath: \'/\'', 'basePath: \'/~trashart\'');

fs.writeFileSync(target, text, (err) => {
  if (err) throw err;
});
