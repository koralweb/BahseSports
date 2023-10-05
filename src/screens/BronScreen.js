import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import CheckBron from '../components/CheckBron';

const BronScreen = ({route, navigation}) => {
  const [check, setCheck] = useState(false);
  return (
    <ImageBackground source={require('../images/bg.png')}>
      <Header navigation={navigation} />

      <View style={styles.cont}>
        {route.params ? (
          <>
            <Text style={styles.title}>{route.params.cart}</Text>
          </>
        ) : (
          <Text style={styles.title}>Rezervace stolu</Text>
        )}

        <View style={styles.item}>
          <Text style={styles.text}>Název*</Text>
          {!route.params && <Text style={styles.text}>№*</Text>}
        </View>

        <View style={styles.inner}>
          <TextInput style={styles.nameInp} />
          {!route.params && <TextInput style={styles.numbInp} />}
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>Telefon*</Text>
          <Text style={styles.text}>Datum*</Text>
        </View>

        <View style={styles.inner}>
          <TextInput style={styles.timeInp} />
          <TextInput style={styles.dateInp} />
        </View>
        <View>
          <Text style={styles.comment}>Komentář</Text>
          <TextInput style={styles.commentInp} />
        </View>
        <TouchableOpacity onPress={() => setCheck(true)} style={styles.butten}>
          <Text style={styles.btnText}>
            {route.params ? 'Objednat' : 'Rezervovat'}
          </Text>
        </TouchableOpacity>
      </View>
      {check && <CheckBron navigation={navigation} setCheck={setCheck} />}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  cont: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 20,
    zIndex: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    marginLeft: 40,
    marginBottom: 10,
  },
  inner: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 10,
  },
  nameInp: {
    borderWidth: 1,
    width: '60%',
    height: 40,
    marginRight: 25,
    borderColor: 'silver',
    borderRadius: 10,
    paddingLeft: 20,
  },
  numbInp: {
    borderWidth: 1,
    width: '20%',
    borderColor: 'silver',
    borderRadius: 10,
    paddingLeft: 20,
  },
  timeInp: {
    height: 40,
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 10,
    width: '40%',
    marginRight: 25,
    paddingLeft: 20,
  },
  dateInp: {
    borderWidth: 1,
    width: '40%',
    borderColor: 'silver',
    borderRadius: 10,
    paddingLeft: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  comment: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    paddingLeft: 20,
  },
  commentInp: {
    borderWidth: 1,
    width: '85%',
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    borderColor: 'silver',
    borderRadius: 10,
    paddingLeft: 20,
  },
  butten: {
    zIndex: 6,
    backgroundColor: '#00BDDE',
    alignSelf: 'center',
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  btnText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
  },
});

export default BronScreen;
