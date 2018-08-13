import React from 'react';
import {FlatList} from 'react-native';
import CarItem from '../CarItem/CarItem';

const carslist = (
  <FlatList
  style={styles.}
  data={props.cars}
  renderItem={(info) => (
    <CarItem
      carName={info.item.name}
      carImage={info.item.image}
      onItemPressed={() => props.onItemSelected(info.item.key)}
    />
  )}
/>
);

const styles= StyleSheet.create({

});
