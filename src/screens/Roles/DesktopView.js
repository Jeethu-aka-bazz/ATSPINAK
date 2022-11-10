import React from 'react';
import {View} from 'react-native';
import DesktopContainer from '../../components/common/DesktopContainer';
import Header from '../../components/header/DesktopView';
import Addrole from '../../components/addRoles/AddRole';
import RolesBody from '../../components/roles/RolesBody';
import AddJD from '../../components/addJD/AddJD';

const DesktopView = props => {
  return (
    <View>
      <Header activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
      <DesktopContainer>
        <RolesBody setShowAddRole={props.setShowAddRole} />
        <Addrole {...props} />
        <AddJD {...props} />
      </DesktopContainer>
    </View>
  );
};

export default DesktopView;
