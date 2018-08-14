import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends Component {
  state = {
    cars: [],
    selectedCar: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        cars: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri:
              "https://www.beamng.com/attachments/1959_peugeot_403_front_resize-jpg"
          }
        })
      };
    });
  };

  fetch('http://localhost/phpmyadmin/sql.php?db=test&table=users&server=1&target=&token=6866efe72c2d999986e8f2070ee2cea0#PMAURL-9:sql.php?db=covoiturage&table=cars&server=1&target=&token=20e74a0884c548639265bd5daefe8b2f', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    key : id,

    name: name,

    image: image,

    portes: portes

  })

}).then((response) => response.json())
      .then((responseJson) => {

// Showing response message coming from server after inserting records.
        Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      });


  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        cars: prevState.cars.filter(car => {
          return car.key !== prevState.selectedCar.key;
        }),
        selectedCar: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedCar: null
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedCar: prevState.cars.find(car => {
          return car.key === key;
        })
      };
    });
  };

  render() {
    return (
      <View >

        <TextInput

          // Adding hint in Text Input using Place holder.
          placeholder="Enter Name"

          onChangeText={TextInputName => this.setState({TextInputName})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'

          style={styles.TextInputStyleClass}
        />

        <TextInput

          // Adding hint in Text Input using Place holder.
          placeholder="Enter image"

          onChangeText={TextInputEmail => this.setState({TextInputEmail})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'

          style={styles.TextInputStyleClass}
        />

        <TextInput

          // Adding hint in Text Input using Place holder.
          placeholder="Enter Portes"

          onChangeText={TextInputPhoneNumber => this.setState({TextInputPhoneNumber})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'

          style={styles.TextInputStyleClass}
        />

        <Button title="Insert Text Input Data to Server" onPress={this.InsertDataToServer} color="#2196F3" />



</View>

    );
  }
}
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
