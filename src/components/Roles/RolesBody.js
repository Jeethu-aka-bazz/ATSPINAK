import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import theme from '../../assets/themes/themes';
import font from '../../assets/fonts/font';

const RolesBody = () => {
  return (
    <View style={[styles.bodycont]}>
      <Text style={[styles.header]}>Roles</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    ...font.bodyheading,
  },
  bodycont: {
    backgroundColor: '#F3F9FD',
    height: Platform.OS === 'web' ? '100vh' : '100%',
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
});

export default RolesBody;
