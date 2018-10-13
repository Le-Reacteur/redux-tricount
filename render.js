var ReactDOMServer = require('react-dom/server');
var React = require('react');
var App = require('./src/views/App').App;
var store = require('./src/store').store;
var Provider = require('react-redux').Provider;

console.log(ReactDOMServer.renderToStaticMarkup(React.createElement(Provider, { store }, React.createElement(App))));
