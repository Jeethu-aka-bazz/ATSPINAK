/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

const DesktopFormContainer = ({children}) => {
  return (
    <View
      style={{
        backgroundColor: '#F3F9FD',
        paddingHorizontal: '5%',
      }}>
      <View style={{position: 'relative', top: -35}}>{children}</View>
    </View>
  );
};

export default DesktopFormContainer;
