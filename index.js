// 本番サーバー起動スクリプト

const express = require('express');
const next = require('next');
const util = require('util');
const childProcess = require('child_process');
const exec = util.promisify(childProcess.exec);

(async () => {
  // サーバーを開ける前にビルドする
  await exec('npx next build');

  const dev = false;
  const app = next({ dev });
  const handle = app.getRequestHandler();
  const port = process.env.PORT || 7777;

  app.prepare().then(() => {
    const server = express({});

    server.use(sslRedirect());

    server.all('*', (req, res) => {
      return handle(req, res);
    });
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(
        `ポート ${port} で開始しました。`
      );
    });
  });
})();

const sslRedirect = (environments = ['production'], status = 302) => {
  const currentEnv = process.env.NODE_ENV;
  const isCurrentEnv = environments.includes(currentEnv);
  return (req, res, next) => {
    if (isCurrentEnv && req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect(status, 'https://' + req.hostname + req.originalUrl);
    }
    else {
      next();
    }
  };
};
