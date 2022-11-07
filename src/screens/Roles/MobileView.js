import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../../components/header/MobileView';
import RolesBody from '../../components/Roles/RolesBody';

const MobileView = ({showDrawer, setShowDrawer}) => {
  const [rolename, setRolename] = useState('');
  const [showAddRole, setShowAddRole] = useState(false);
  const [noofreq, setNoofreq] = useState(1);
  return (
    <View>
      <Header showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <RolesBody
        rolename={rolename}
        setRolename={setRolename}
        showAddRole={showAddRole}
        setShowAddRole={setShowAddRole}
        noofreq={noofreq}
        setNoofreq={setNoofreq}
      />
    </View>
  );
};

export default MobileView;
