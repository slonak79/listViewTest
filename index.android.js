/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

export default class listViewTest extends Component {
  constructor(props){
    super(props);
    var data = ['Event 1', 'Event 2', 'Event 3', 'Event 4'];
    const events = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: events.cloneWithRows(data),
    };
  }

  render() {
    return (
      <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data) => <View><Text style={styles.text}>{data}</Text></View>}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#F5FCFF',
    backgroundColor: '#2c3e50',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: 'notoserif',
    marginLeft: 12,
    color: '#ecf0f1',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

AppRegistry.registerComponent('listViewTest', () => listViewTest);
