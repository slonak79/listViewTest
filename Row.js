use 'strict';

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#F5FCFF',
    backgroundColor: '#2c3e50',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'notoserif',
    marginLeft: 12,
    color: '#ecf0f1',
  },

});

const Row = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {`${props.events}`}
    </Text>
  </View>
);

export default Row;
