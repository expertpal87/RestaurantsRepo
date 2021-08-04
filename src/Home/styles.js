//=----------- helpers css ------//
import {StyleSheet} from 'react-native';

//=----------- helpers stylesheet ------//
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    marginTop: 20,
    marginHorizontal: '7%',
  },
  searchLogo: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginLeft: 20,
  },
  isearchText: {
    color: 'gray',
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  listContainer: {
    marginHorizontal: '8%',
  },
  restaurent: {
    color: '#F44E3B',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },

  //=----------- helpers stylesheet list ------//

  title: {
    marginTop: 20,
    fontSize: 22,
    color: '#221F1F',
    fontWeight: 'bold',
  },
  address: {
    marginTop: 10,
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: '100%',
    marginTop: 10,
    borderRadius: 20,
  },
  near: {
    marginTop: 5,
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
  },
});
