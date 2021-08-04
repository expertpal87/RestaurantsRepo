import React, {useState, useEffect} from 'react';

//import all the components we are going to use
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TextInput,
} from 'react-native';

//=----------- library ------//
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {getDistance, getPreciseDistance} from 'geolib';

//=----------- helpers css ------//
import styles from './styles';

//=----------- Component ------//
import ListItem from './listItem';
import {restaurants} from '../restaurants.json';

//=----------- main Component------//
const HomeScreen = ({route, navigation}) => {
  const [restaurantData, setRestaurantData] = useState(restaurants);
  const [loading, setLoading] = useState(false);

  //=----------- autoComplete ------//
  const handleAutoComplete = details => {
    setLoading(true);
    let coordinates = details.geometry.location || {};
    calculateDistance(coordinates);
  };

  //=----------- calculation ------//
  const calculateDistance = coordinates => {
    var newRestaurantList = [];
    restaurantData.map(item => {
      var dis = getDistance(
        {latitude: coordinates.lat, longitude: coordinates.lng},
        {latitude: item.latlng.lat, longitude: item.latlng.lng},
      );
      var distance = dis / 1000;
      if (distance <= 4) {
        newRestaurantList.push(item);
      }
    });
    setRestaurantData(newRestaurantList);
    setLoading(false);
  };

  //=----------- component ------//
  const RenderComponent = ({item}) => {
    return (
      <ListItem
        item={item}
        onPress={() =>
          navigation.navigate('RestaurantDetail', {
            item: item,
          })
        }
      />
    );
  };

  //=----------- main Render View ------//
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <GooglePlacesAutocomplete
            styles={{
              textInput: {
                height: 38,
                color: '#5d5d5d',
                fontSize: 18,
                fontWeight: '500',
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
            fetchDetails={true}
            placeholder="Search"
            onPress={(data, details = null) => {
              handleAutoComplete(details);
            }}
            query={{
              key: 'AIzaSyCuogUSlZJsqisfPAhA4y9ZZVoEOZ3fJ4g',
              language: 'en',
            }}
          />
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.restaurent}>Restaurants</Text>
          <FlatList
            data={restaurantData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={RenderComponent}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

//=----------- export default ------//
export default HomeScreen;
