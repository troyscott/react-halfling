var React = require('react');
var HelloWorld = require('./hello');

var options = {
  firstName: 'Troy'
};

var element = React.createElement(HelloWorld, options);
ReactDOM.render(element, document.body);
