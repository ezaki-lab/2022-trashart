const fs = require('fs');
const target = './.env.local';

// NEXT_PUBLIC_ASSET_PREFIX を ~trashart にする
let text = fs.readFileSync(target, 'utf-8');
text = text.replace('NEXT_PUBLIC_ASSET_PREFIX=', 'NEXT_PUBLIC_ASSET_PREFIX=~trashart');

fs.writeFileSync(target, text, (err) => {
  if (err) throw err;
});
