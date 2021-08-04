//=----------- helpers css ------//
import {StyleSheet} from 'react-native';

//=----------- helpers stylesheet ------//
export default StyleSheet.create({
  mainComponent: {
    flex: 1,
    marginHorizontal: '6%',
  },
  headerText: {
    fontSize: 24,
    marginLeft: 30,
    color: '#F44336',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  backLogo: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    marginTop: 20,
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
  logo: {
    height: 25,
    width: 25,
    alignSelf: 'center',
    marginRight: 10,
  },
  operatingHours: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFCDD2',
    marginTop: 15,
  },
  opening: {
    fontSize: 18,
    fontWeight: '500',
    padding: 15,
  },
  timing: {},
  time: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: '500',
  },
  causineType: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  reviewText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 16,
    fontWeight: '500',
  },
  reviewContainer: {
    marginTop: 15,
  },
});
