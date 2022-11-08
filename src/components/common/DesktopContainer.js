import React from 'react';
import {StyleSheet, View} from 'react-native';

const DesktopContainer = ({children}) => {
  return <View style={[styles.container]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 60,
  },
});

export default DesktopContainer;
