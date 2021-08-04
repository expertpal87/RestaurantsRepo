import React, {useState} from 'react';

/*--------import react native components----------- */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';

//=----------- helpers css ------//
import styles from './styles';

//=----------- main component ------//
const RestaurantDetail = ({navigation, onPress, route}) => {
  const {item} = route.params;
  const [time, setTime] = useState();
  const [reviews, setReviews] = useState();

  const ShowTiming = () => {
    setTime(!time);
  };

  const ShowReview = () => {
    setReviews(!reviews);
  };

  //=----------- review ------//
  const ReviewList = ({item}) => {
    return (
      <View style={styles.reviewContainer}>
        <Text style={styles.reviewText}>
          Name: <Text style={styles.desc}>{item.name}</Text>
        </Text>
        <Text style={styles.reviewText}>
          Date: <Text style={styles.desc}>{item.date}</Text>
        </Text>
        <Text style={styles.reviewText}>
          Rating: <Text style={styles.desc}>{item.rating}</Text>
        </Text>
        <Text style={styles.reviewText}>
          Comments: <Text style={styles.desc}>{item.comments}</Text>
        </Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.mainComponent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={{
                uri: 'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/39-512.png',
              }}
              style={styles.backLogo}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Restaurant Detail</Text>
        </View>

        <Text style={styles.title}>{item.name}</Text>
        <Image source={{uri: item.photograph}} style={styles.image} />
        <Text style={styles.address}>
          {' '}
          Address:
          <Text style={{fontWeight: '500', color: '#F44336'}}>
            {' '}
            {item.address}
          </Text>
        </Text>
        <Text style={styles.near}>
          {' '}
          Near:
          <Text style={{fontWeight: '500', color: '#E57373'}}>
            {' '}
            {item.neighborhood}
          </Text>
        </Text>
        <Text style={styles.causineType}>
          Causine Type = {item.cuisine_type}
        </Text>
        <TouchableOpacity onPress={() => ShowTiming()}>
          <View style={styles.operatingHours}>
            <Text style={styles.opening}>Press for Check Opening Time</Text>
            <Image
              source={{
                uri: 'https://static.thenounproject.com/png/551749-200.png',
              }}
              style={styles.logo}
            />
          </View>
        </TouchableOpacity>
        {time && (
          <View style={styles.timing}>
            <Text style={styles.time}>
              Monday: {item.operating_hours.Monday}
            </Text>
            <Text style={styles.time}>
              Tuesday:
              {item.operating_hours.Tuesday}
            </Text>
            <Text style={styles.time}>
              Wednesday: {item.operating_hours.Wednesday}
            </Text>
            <Text style={styles.time}>
              Thursday: {item.operating_hours.Thursday}
            </Text>
            <Text style={styles.time}>
              Friday: {item.operating_hours.Friday}
            </Text>
            <Text style={styles.time}>
              {' '}
              Saturday: {item.operating_hours.Saturday}
            </Text>
            <Text style={styles.time}>
              {' '}
              Sunday: {item.operating_hours.Sunday}
            </Text>
          </View>
        )}

        <TouchableOpacity onPress={() => ShowReview()}>
          <View style={styles.operatingHours}>
            <Text style={styles.opening}>Reviews</Text>
            <Image
              source={{
                uri: 'https://static.thenounproject.com/png/551749-200.png',
              }}
              style={styles.logo}
            />
          </View>
        </TouchableOpacity>
        {reviews && (
          <View style={styles.timing}>
            <FlatList
              data={item.reviews}
              keyExtractor={(item, index) => index.toString()}
              renderItem={ReviewList}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

//=----------- export component ------//
export default RestaurantDetail;
