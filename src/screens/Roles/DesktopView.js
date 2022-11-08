import React from 'react';
import {Text, View} from 'react-native';
import DesktopContainer from '../../components/common/DesktopContainer';
import Header from '../../components/header/DesktopView';
import RolesBody from '../../components/Roles/RolesBody';

const DesktopView = ({
  activeTab,
  setActiveTab,
  showAddRole,
  setShowAddRole,
}) => {
  return (
    <View>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <DesktopContainer>
        <RolesBody showAddRole={showAddRole} setShowAddRole={setShowAddRole} />
      </DesktopContainer>
    </View>
  );
};

export default DesktopView;
