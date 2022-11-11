import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import font from '../../assets/fonts/font';
import theme from '../../assets/themes/themes';

const Footer = () => {
  return (
    <View style={[styles.footercont]}>
      <TouchableOpacity style={[styles.footerbtn]} onPress={() => {}}>
        <Text style={[styles.footerbtntext]}>Allocate schedule</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footercont: {
    shadowColor: 'rgba(0, 0, 0, 0.08);',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.8,
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginTop: -55,
  },
  footerbtn: {
    backgroundColor: theme.addrolebackground,
    padding: 13,
    alignSelf: 'flex-end',
    borderRadius: 4,
  },
  footerbtntext: {
    ...font.fontstyle4,
    color: '#FFF',
  },
});

export default Footer;
