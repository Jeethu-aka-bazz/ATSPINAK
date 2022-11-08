import React, {useState} from 'react';
import {View} from 'react-native';
import Header from '../../components/header/MobileView';
import RolesBody from '../../components/Roles/RolesBody';

// const [formsubmit, setFormsubmit] = useState(false);
const MobileView = ({
  showDrawer,
  setShowDrawer,
  showAddRole,
  setShowAddRole,
  year,
  setYear,
  noofreq,
  setNoofreq,
  formsubmit,
  setFormsubmit,
}) => {
  const [rolename, setRolename] = useState('');
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
        year={year}
        setYear={setYear}
        formsubmit={formsubmit}
        setFormsubmit={setFormsubmit}
      />
    </View>
  );
};

export default MobileView;
