import React from 'react';
import  {View, Text, StyleSheet} from 'react-native';

const carInfo= props =>(
  <View style={styles.container}>
    <Text>{props.sieges}</Text>
    <Text>{props.portes}</Text>
  </View>
);

const styles= StyleSheet.create({
  container:{

  }
});
export default carInfo;
