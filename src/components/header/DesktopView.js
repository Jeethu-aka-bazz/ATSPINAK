import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={[styles.headercont]}>
      <Text>this is desktopHeader</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headercont: {
    backgroundColor: '#00174A',
  },
});

export default Header;
