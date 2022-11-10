import React, {useState} from 'react';
import {SafeAreaView, useWindowDimensions} from 'react-native';
import {breakpoint} from '../../data/breakpoint';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

const AddSchedules = ({activeTab, setActiveTab, route}) => {
  const windowWidth = useWindowDimensions().width;
  const role = route?.params?.role;
  return (
    <>
      <SafeAreaView>
        {windowWidth >= breakpoint ? (
          <DesktopView
            role={role}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ) : (
          <MobileView role={role} />
        )}
      </SafeAreaView>
    </>
  );
};

export default AddSchedules;
