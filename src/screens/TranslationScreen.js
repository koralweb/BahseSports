import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import trunslationList from '../data/trunslationList';

const TranslationScreen = ({navigation}) => {
  const showList = () => {
    return trunslationList
      .filter(el => el.date >= new Date().getDate())
      .map(item => (
        <View style={styles.list}>
          <View>
            <Text style={styles.liga}>{item.liga}</Text>
            <Text style={styles.command}>{item.team1}</Text>
            <Text style={styles.command}>{item.team2}</Text>
            <View style={styles.inner}>
              <Text style={styles.date}>{item.date}.09-</Text>
              <Text style={styles.date}>{item.time}</Text>
            </View>
          </View>
          <View>
            <View style={styles.circle} />
          </View>
        </View>
      ));
  };
  return (
    <View>
      <Header navigation={navigation} />
      <Text style={styles.title}>Vysílání</Text>
      <ScrollView>{showList()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    marginLeft: 40,
    marginBottom: 20,
    marginTop: 20,
  },
  list: {
    alignSelf: 'center',
    width: '85%',
    backgroundColor: '#E5E5E5',
    marginBottom: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  liga: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
  inner: {
    flexDirection: 'row',
  },
  date: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  command: {
    fontSize: 15,
    fontWeight: '500',
  },
  circle: {
    width: 15,
    height: 15,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#FFAB24',
    marginTop: 30,
  },
});
export default TranslationScreen;
