/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Pools = require('./components/Pools');
var Animation = require('./components/Animation');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Laugar = React.createClass({
  render: function() {
    return (
      <Pools />
    );
  }
});

AppRegistry.registerComponent('Laugar', () => Laugar);
