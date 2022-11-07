import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../../components/header/MobileView';
import RolesBody from '../../components/Roles/RolesBody';

const MobileView = ({showDrawer, setShowDrawer}) => {
  return (
    <View>
      <Header showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <RolesBody />
    </View>
  );
};

export default MobileView;
