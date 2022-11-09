import React from 'react';
import {View} from 'react-native';
import DesktopContainer from '../../components/common/DesktopContainer';
import Header from '../../components/header/DesktopView';
import Addrole from '../../components/Roles/AddRole';
import RolesBody from '../../components/Roles/RolesBody';

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
  isFlexiable,
  setIsFlexiable,
  activeWorkplace,
  rolename,
  setRolename,
  setActiveWorkplace,
  activeJobType,
  setActiveJobType,
  priority,
  setPriority,
  closeDate,
  setCloseDate,
  openDate,
  setOpenDate,
  hiringmanager,
  sethiringmanager,
  noofRound,
  setNoofRound,
  setRoundsDetails,
}) => {
  return (
    <View>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <DesktopContainer>
        <RolesBody setShowAddRole={setShowAddRole} />
        <Addrole
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
          isFlexiable={isFlexiable}
          setIsFlexiable={setIsFlexiable}
          activeWorkplace={activeWorkplace}
          setActiveWorkplace={setActiveWorkplace}
          activeJobType={activeJobType}
          setActiveJobType={setActiveJobType}
          priority={priority}
          setPriority={setPriority}
          closeDate={closeDate}
          setCloseDate={setCloseDate}
          openDate={openDate}
          setOpenDate={setOpenDate}
          hiringmanager={hiringmanager}
          sethiringmanager={sethiringmanager}
          noofRound={noofRound}
          setNoofRound={setNoofRound}
          setRoundsDetails={setRoundsDetails}
        />
      </DesktopContainer>
    </View>
  );
};

export default DesktopView;
