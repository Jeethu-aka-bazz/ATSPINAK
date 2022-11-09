import React from 'react';
import {View} from 'react-native';
import Header from '../../components/header/MobileView';
import Addrole from '../../components/AddRoles/AddRole';
import RolesBody from '../../components/Roles/RolesBody';
import {breakpoint} from '../../data/breakpoint';
import AddJD from '../../components/addJD/AddJD';

const MobileView = props => {
  return (
    <View>
      {props.windowWidth <= breakpoint && (
        <Header
          showDrawer={props.showDrawer}
          setShowDrawer={props.setShowDrawer}
        />
      )}
      <RolesBody setShowAddRole={props.setShowAddRole} />
      <Addrole {...props} />
      <AddJD {...props} />
    </View>
  );
};

export default MobileView;
