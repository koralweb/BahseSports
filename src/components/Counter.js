import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Counter = () => {
  const [cnt, setCnt] = useState(1);

  const inc = () => {
    setCnt(cnt + 1);
  };

  const dec = () => {
    if (cnt === 1) {
      return;
    }
    setCnt(cnt - 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={dec}>
        <Text style={styles.minus}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{cnt}</Text>
      <TouchableOpacity onPress={inc}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 10,
    width: 50,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    paddingLeft: 10,
    paddingRight: 10,
  },
  plus: {
    width: 30,
    height: 30,
    backgroundColor: '#00BDDE',
    fontSize: 20,
    color: 'white',
    borderRadius: 30,
    textAlign: 'center',
  },
  minus: {
    borderColor: '#00BDDE',
    borderWidth: 3,
    fontSize: 20,
    textAlign: 'center',
    color: '#00BDDE',
    width: 30,
    height: 30,
    borderRadius: 30,
  },
});

export default Counter;
