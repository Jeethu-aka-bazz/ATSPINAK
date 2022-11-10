import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import font from '../../assets/fonts/font';

const DateBox = ({
  label,
  labelstyle,
  boxstyle,
  showDatePicker = false,
  setShowDatePicker = () => {},
  value,
}) => {
  return (
    <>
      <Text
        style={[
          {...font.fontstyle3, marginBottom: 6, color: '#252525'},
          labelstyle,
        ]}>
        {label}
      </Text>
      <TouchableOpacity
        style={[styles.inputbox, boxstyle]}
        onPress={() => {
          setShowDatePicker(!showDatePicker);
        }}>
        <Text style={[{...font.fontstyle4, color: '#252525'}]}>{value}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  inputbox: {
    backgroundColor: '#F1F1F1',
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});

export default DateBox;
