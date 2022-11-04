import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/header/MobileView';

const MobileView = ({showDrawer, setShowDrawer}) => {
  return (
    <View>
      <Header showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <Text>This is Roles</Text>
    </View>
  );
};

export default MobileView;
