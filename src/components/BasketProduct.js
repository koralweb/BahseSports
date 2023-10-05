import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Counter from './Counter';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import products from '../mobx/products';

const BasketProduct = ({prod}) => {
  return (
    <View style={styles.cont}>
      <Image style={styles.image} source={prod.image} />
      <View style={styles.list}>
        <Text style={styles.title}>{prod.title}</Text>
      </View>
      <View style={styles.wrp}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => products.removeProduct(prod.id)}>
          <FontAwesomeIcon icon={'trash'} color={'red'} />
        </TouchableOpacity>
        <Counter />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    height: 130,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'silver',
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginRight: 10,
  },
  list: {
    flexDirection: 'row',
    width: '45%',
  },
  inner: {
    flexDirection: 'row',
    marginTop: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
    paddingTop: 10,
  },
  price: {
    fontSize: 17,
    fontWeight: '400',
    color: 'black',
  },
  wrp: {
    justifyContent: 'space-around',
  },
  icon: {
    paddingLeft: 40,
  },
});

export default BasketProduct;
