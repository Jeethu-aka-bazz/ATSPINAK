import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/header/DesktopView';
import RolesBody from '../../components/Roles/RolesBody';

const DesktopView = ({activeTab, setActiveTab}) => {
  return (
    <View>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <View style={{paddingLeft: 60}}>
        <RolesBody />
      </View>
    </View>
  );
};

export default DesktopView;
