import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import Product from '../components/Product';
import products from '../mobx/products';
import productsList from '../data/productsList';
import SingleProduct from '../components/SingleProduct';

const classTotal = ['vse'];
productsList.forEach(el => {
  if (!classTotal.includes(el.class)) {
    classTotal.push(el.class);
  }
});

const CatalogScreen = ({navigation}) => {
  const [actualClass, setActualClass] = useState('vse');
  const [singleProduct, setSingleProduct] = useState(false);
  const [oneProduct, setOneProduct] = useState(null);

  const productClick = prod => {
    setSingleProduct(true);
    setOneProduct(prod);
  };

  const closeOneProduct = () => {
    setSingleProduct(false);
    setOneProduct(null);
  };

  const renderProducts = () => {
    return products.list
      .filter(element => {
        if (actualClass === 'vse') {
          return element;
        }
        if (actualClass === element.class) {
          return element;
        }
        return false;
      })
      .map(prod => (
        <Product productClick={productClick} prod={prod} key={prod.title} />
      ));
  };

  function renderClass() {
    return classTotal.map(el => (
      <TouchableOpacity
        key={el}
        onPress={() => {
          setActualClass(el);
        }}>
        <Text style={styles.class}>{el}</Text>
      </TouchableOpacity>
    ));
  }

  return (
    <View style={styles.cont}>
      <Header navigation={navigation} />
      <View style={styles.classList}>{renderClass()}</View>

      <ScrollView style={styles.wrp}>{renderProducts()}</ScrollView>
      {singleProduct && (
        <SingleProduct prod={oneProduct} close={closeOneProduct} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    backgroundColor: 'white',
  },
  wrp: {
    width: '95%',
    alignSelf: 'center',
  },
  classList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 15,
  },
  class: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
});
export default CatalogScreen;
