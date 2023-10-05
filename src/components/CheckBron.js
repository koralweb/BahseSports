import React, {useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import products from '../mobx/products';

const CheckBron = ({navigation}) => {
  useEffect(() => {
    products.clearCart();
  }, []);

  return (
    <View style={styles.cont}>
      <Text style={styles.title}>Vaše objednávka byla zaznamenána!</Text>
      <TouchableOpacity
        style={styles.butten}
        onPress={() => navigation.push('Home')}>
        <Text style={styles.btn}>Na hlavní</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  title: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  butten: {
    backgroundColor: '#11AFDB',
    width: '60%',
    alignSelf: 'center',
    height: 50,
    borderRadius: 20,
    marginTop: 40,
  },
  btn: {
    textAlign: 'center',
    paddingTop: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default CheckBron;
