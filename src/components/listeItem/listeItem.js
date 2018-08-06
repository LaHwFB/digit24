import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const listItem = (props) =>  (
  <TouchableNativeFeedback onPress={props.itempressed}>
    <View style={styles.listItem} >
      <Text>{props.placename}</Text>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
    listItem: {
      width: "100%",
      margin: 5,
      padding: 10,
      backgroundColor: "#eee"
    }
});

export default listItem;
