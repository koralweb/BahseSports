import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import products from '../mobx/products';
import {observer} from 'mobx-react-lite';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Product = ({prod, productClick}) => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity key={prod.name} onPress={() => productClick(prod)}>
        <Image style={styles.image} source={prod.image} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.list} onPress={() => productClick(prod)}>
        <Text style={styles.title}>{prod.title}</Text>

        <Text style={styles.desc}>{prod.desc}</Text>
        <View style={styles.inner}>
          <TouchableOpacity style={styles.btnPrice}>
            <Text style={styles.price}>{prod.price}Kc v jedné porci</Text>
          </TouchableOpacity>
          {prod.added ? (
            <TouchableOpacity onPress={() => products.removeProduct(prod.id)}>
              <FontAwesomeIcon
                style={styles.btnChek}
                icon={'check-square'}
                color="orange"
                size={40}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.butten}
              onPress={() => products.addProduct(prod.id, 1)}>
              <Text style={styles.btn}>+</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 110,
    height: 110,
    alignSelf: 'center',
  },
  list: {
    width: '65%',
    marginLeft: 10,
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
  },
  desc: {
    color: 'black',
  },
  btnPrice: {
    backgroundColor: '#00BDDE',
    width: '70%',
    height: 40,
    marginRight: 15,
    borderRadius: 10,
  },
  price: {
    textAlign: 'center',
    paddingTop: 10,
    color: 'white',
    fontWeight: '700',
  },
  butten: {
    backgroundColor: '#00BDDE',
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 10,
  },
  btn: {
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 23,
    color: 'white',
    fontWeight: '700',
  },
});

export default observer(Product);
