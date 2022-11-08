import React, {useState} from 'react';
import {Text, View} from 'react-native';
import DesktopContainer from '../../components/common/DesktopContainer';
import Header from '../../components/header/DesktopView';
import RolesBody from '../../components/Roles/RolesBody';

// const [formsubmit, setFormsubmit] = useState(false);
const DesktopView = ({
  activeTab,
  setActiveTab,
  showAddRole,
  setShowAddRole,
  year,
  setYear,
  noofreq,
  setNoofreq,
  formsubmit,
  setFormsubmit,
}) => {
  return (
    <View>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <DesktopContainer>
        <RolesBody
          showAddRole={showAddRole}
          setShowAddRole={setShowAddRole}
          setYear={setYear}
          year={year}
          noofreq={noofreq}
          setNoofreq={setNoofreq}
          formsubmit={formsubmit}
          setFormsubmit={setFormsubmit}
        />
      </DesktopContainer>
    </View>
  );
};

export default DesktopView;
