const fs = require('fs');
const target = './next.config.js';

const replaceAll = (str, searchValue, replaceValue) => {
  return str.split(searchValue).join(replaceValue);
};

// コメントアウトを解除する
let text = fs.readFileSync(target, 'utf-8');
text = replaceAll(text, '// ', '');

fs.writeFileSync(target, text, (err) => {
  if (err) throw err;
});
