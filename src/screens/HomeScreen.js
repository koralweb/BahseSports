import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({});

export default HomeScreen;
