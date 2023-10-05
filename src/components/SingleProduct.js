import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import products from '../mobx/products';
import Counter from './Counter';

const SingleProduct = ({prod}) => {
  const [press, setPress] = useState(prod.added);

  const addProduct = () => {
    setPress(true);
    products.addProduct(prod.id, 1);
  };

  return (
    <View style={styles.cont}>
      <View style={styles.cart}>
        <Image source={prod.image} style={styles.image} />
        <Text style={styles.title}>{prod.title}</Text>
        <Text style={styles.ingr}>Sloučenina:</Text>
        <View style={styles.wrp}>
          <Text style={styles.desc}>{prod.desc}</Text>
          <Text style={styles.price}>{prod.price}р</Text>
        </View>
      </View>

      {press ? (
        <View style={styles.butten}>
          <Text style={styles.btnText}>Přidal</Text>
        </View>
      ) : (
        <View style={styles.list}>
          <TouchableOpacity onPress={addProduct} style={styles.btn}>
            <Text style={styles.btnText}>Přidat do košíku</Text>
          </TouchableOpacity>
          <Counter />
        </View>
      )}
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
    backgroundColor: '#fff',
    paddingTop: 36,
  },
  cart: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 30,
  },
  wrp: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ingr: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontSize: 17,
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
  },
  desc: {
    width: '80%',
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  btn: {
    width: '60%',
    height: 40,
    backgroundColor: '#00BDDE',
    borderRadius: 10,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  butten: {
    alignSelf: 'center',
    width: '80%',
    height: 40,
    backgroundColor: '#00BDDE',
    marginRight: 20,
    borderRadius: 10,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  btnText: {
    textAlign: 'center',
    paddingTop: 5,
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default SingleProduct;
