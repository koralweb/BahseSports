import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import BasketProduct from '../components/BasketProduct';
import products from '../mobx/products';
import {observer} from 'mobx-react-lite';
import EmptyBasket from '../components/EmptyBasket';

const BasketScreen = ({navigation}) => {
  const presentProducts = () => {
    return products.list
      .filter(el => el.added)
      .map(prod => {
        return <BasketProduct key={prod.title} prod={prod} />;
      });
  };

  const all = () => {
    const addArr = products.list.filter(el => el.added);
    console.log(addArr);
    let all = 0;
    addArr.forEach(product => {
      all = product.count * product.price + all;
    });
    console.log(all);
    return all;
  };

  return (
    <>
      <View style={styles.cont}>
        <Header navigation={navigation} />
        {products.list.some(el => el.added) ? (
          <>
            <Text style={styles.title}>Vaše objednávka</Text>
            <View style={styles.wrp}>
              <ScrollView>{presentProducts()}</ScrollView>
            </View>
            <View style={styles.item}>
              <View style={styles.list}>
                <Text style={styles.dostavkaText}>Dodávka</Text>
                <Text style={styles.besplText}>Zdarma</Text>
              </View>

              <View style={styles.list}>
                <Text style={styles.sum}>Celkový:</Text>
                <Text style={styles.sumAll}>{all()}Kc</Text>
              </View>
              <View style={styles.list}>
                <TouchableOpacity
                  style={styles.btnWhite}
                  onPress={() => navigation.push('Bron', {cart: 'Самовывоз'})}>
                  <Text style={styles.btnSam}>Vyzvednout</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnBlue}
                  onPress={() => navigation.push('Bron', {cart: 'Доставка'})}>
                  <Text style={styles.btnDost}>Dodávka</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <EmptyBasket navigation={navigation} />
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  cont: {
    backgroundColor: 'white',
    flex: 1,
    alignSelf: 'center',
  },
  wrp: {
    marginTop: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    marginLeft: 40,
    marginBottom: 10,
    marginTop: 10,
  },
  item: {
    marginTop: 'auto',
    backgroundColor: 'white',
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  dostavkaText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  besplText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#11AFDB',
  },
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sum: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    paddingBottom: 10,
  },
  sumAll: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    paddingLeft: 20,
  },

  btnWhite: {
    backgroundColor: 'white',
    width: '40%',
    alignSelf: 'center',
    height: 40,
    borderRadius: 10,
    marginTop: 'auto',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#00BDDE',
  },
  btnBlue: {
    backgroundColor: '#00BDDE',
    width: '40%',
    alignSelf: 'center',
    height: 40,
    borderRadius: 10,
    marginTop: 'auto',
    marginBottom: 20,
  },
  btnSam: {
    textAlign: 'center',
    paddingTop: 5,
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  btnDost: {
    textAlign: 'center',
    paddingTop: 5,
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
export default observer(BasketScreen);
