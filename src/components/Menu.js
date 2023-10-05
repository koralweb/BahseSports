import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';

const Menu = ({navigation, setPress}) => {
  const screenName = useState(useRoute().name)[0];
  return (
    <View style={styles.cont}>
      {screenName !== 'Home' && (
        <TouchableOpacity style={styles.close} onPress={() => setPress(false)}>
          <FontAwesomeIcon color={'white'} size={30} icon={'close'} />
        </TouchableOpacity>
      )}
      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.push('Home')}>
          <Text style={styles.text}>Domov</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Catalog')}>
          <Text style={styles.text}>Katalog</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Bron')}>
          <Text style={styles.text}>Rezervace stolu</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Trans')}>
          <Text style={styles.text}>Vysílání</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../images/logoHeader.png')} style={styles.logo} />
      <Image source={require('../images/solid.png')} style={styles.solid} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
    zIndex: 99,
  },
  item: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 50,
    zIndex: 2,
  },
  logo: {
    width: 1113 / 4,
    height: 247 / 4,
    alignSelf: 'center',
    marginBottom: 'auto',
    zIndex: 2,
  },
  solid: {
    position: 'absolute',
    width: 1170 / 3,
    height: 1377 / 3,
    bottom: 0,
    right: 0,
    zIndex: 0,
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    paddingBottom: 10,
  },
  close: {
    top: 40,
    left: 10,
    width: 42,
    height: 42,
    backgroundColor: '#00BDDE',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Menu;
