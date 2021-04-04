const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const openUrl = require('openurl');

const config = require('./webpack.dev.config');
const host = process.env.NODE_HOST || 'localhost';
const port = process.env.NODE_PORT || 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
}).listen(port, host, function (error) {
  if (error) {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  }

  const url = `http://${host}:${port}/demo/dist/index.html`;

  console.log('Demo is ready at ' + url); // eslint-disable-line no-console

  openUrl.open(url);
});
