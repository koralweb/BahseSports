import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const EmptyBasket = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <Text style={styles.textBasket}>
        Váš košík je prázdný – přejít do menu?
      </Text>
      <Image style={styles.image} source={require('../images/basket.png')} />
      <TouchableOpacity
        style={styles.butten}
        onPress={() => navigation.push('Home')}>
        <Text style={styles.btn}>Na hlavní</Text>
      </TouchableOpacity>
      <Image style={styles.solid} source={require('../images/solid.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    alignItems: 'center',
  },
  textBasket: {
    color: 'silver',
    fontSize: 30,
    fontWeight: '700',
    alignItems: 'center',
    marginTop: 'auto',
    justifyContent: 'center',
  },

  butten: {
    backgroundColor: '#11AFDB',
    width: '80%',
    alignSelf: 'center',
    height: 50,
    borderRadius: 10,
    marginTop: 'auto',
    marginBottom: 20,
    zIndex: 2,
  },
  btn: {
    textAlign: 'center',
    paddingTop: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  image: {
    width: 398 / 3,
    height: 397 / 3,
    marginTop: 20,
  },
  solid: {
    position: 'absolute',
    width: 1170 / 3,
    height: 1377 / 3,
    bottom: 0,
    zIndex: 0,
  },
});

export default EmptyBasket;
