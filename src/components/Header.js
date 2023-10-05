import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import Menu from './Menu';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';

const Header = ({navigation}) => {
  const [press, setPress] = useState(useRoute().name === 'Home');

  return (
    <View style={styles.wrp}>
      {press && <Menu navigation={navigation} setPress={setPress} />}
      <View style={styles.cont}>
        <TouchableOpacity style={styles.bars} onPress={() => setPress(true)}>
          <FontAwesomeIcon icon={'bars'} size={20} color={'white'} />
        </TouchableOpacity>
        <Image
          source={require('../images/logoHeader.png')}
          style={styles.logo}
        />
        <TouchableOpacity onPress={() => navigation.push('Basket')}>
          <Image
            source={require('../images/basketLogo.png')}
            style={styles.basket}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.solid} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrp: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: 100,
    backgroundColor: 'white',
    zIndex: 100,
  },
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: 40,
  },
  bars: {
    width: 42,
    height: 42,
    backgroundColor: '#00BDDE',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 1113 / 7,
    height: 247 / 7,
    alignSelf: 'center',
  },
  basket: {
    width: 131 / 3,
    height: 131 / 3,
  },
  solid: {
    height: 6,
    backgroundColor: 'silver',
    top: 55,
  },
});

export default Header;
