import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CarInfo from '../CarInfo/CarInfo';

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <View style={styles.nm_img}>
        <Text style={styles.carName}>{props.carName}</Text>
        <Image resizeMode='cover' source={props.carImage} style={styles.img}/>
      </View>
        <CarInfo sieges={props.sieges} portes={props.portes}/>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    //alignItems: 'center',
    //flexDirection: 'row',
  },
  img: {
    width:'100%',
    height:'70%',
    padding: 20
  },
  carName:{
    fontSize: 30,
    fontWeight:'bold'
  },
  nm_img : {
    flexDirection: 'column',
  }
});

export default listItem;
