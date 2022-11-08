import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import font from '../../assets/fonts/font';
import check from '../../assets/images/done.png';
import theme from '../../assets/themes/themes';
import RowBox from './RowBox';

const RadioButton = ({label, contstyle, isActive = ' ', setisActive}) => {
  return (
    <RowBox style={[contstyle, styles.root]}>
      <TouchableOpacity
        style={[styles.checkbox(isActive === label || isActive === true)]}
        onPress={() => {
          isActive === false || isActive === true
            ? setisActive(!isActive)
            : setisActive(label);
        }}>
        <Image source={check} style={[styles.img]} />
      </TouchableOpacity>
      <Text style={[styles.label]}>{label}</Text>
    </RowBox>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 15,
    height: 10,
  },
  checkbox: active => ({
    backgroundColor: active ? theme.radiobtnactive : '#FFF',
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.radiobtnactive,
    borderRadius: 4,
  }),
  label: {
    ...font.fontstyle3,
    color: theme.roletext,
    marginLeft: 10,
  },
  root: {
    alignItems: 'center',
  },
});

export default RadioButton;
