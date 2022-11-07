import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {act} from 'react-test-renderer';
import theme from '../../assets/themes/themes';

const Buttons = ({title, active, onPress, buttonstyle, titlestyle}) => {
  return (
    <TouchableOpacity
      style={[styles.button(active), buttonstyle]}
      onPress={onPress}>
      <Text style={[styles.title(active), titlestyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: active => ({
    backgroundColor: active ? theme.buttonactive : 'transparent',
    borderColor: theme.buttonactive,
    borderWidth: 1,
    marginTop: 5,
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 16,
  }),
  title: active => ({
    color: active ? '#fff' : theme.buttonactive,
  }),
});

export default Buttons;
