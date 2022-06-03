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
  const port = process.env.PORT || 3000;

  app.prepare().then(() => {
    const server = express({});

    server.all("*", (req, res) => {
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
