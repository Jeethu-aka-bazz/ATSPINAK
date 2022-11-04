import React from 'react';
import {StyleSheet, View} from 'react-native';

const RowBox = ({children, style}) => {
  return <View style={[styles.rowbox, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  rowbox: {
    flexDirection: 'row',
  },
});

export default RowBox;
