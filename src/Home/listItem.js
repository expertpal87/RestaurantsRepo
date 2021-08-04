import React, {useState} from 'react';

/*--------import react native components----------- */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

//=----------- helpers css ------//
import styles from './styles';

//=----------- main Component ------//
const ListItem = ({navigation, item, onPress}) => {

  //=----------- main render ------//
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.mainComponent}>
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
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
