import React, {useState} from 'react';
import {SafeAreaView, Text, useWindowDimensions, View} from 'react-native';
import DesktopView from './DesktopView';
import MobileView from './MobileView';
import TabDrawer from '../../components/common/TabDrawer';
import {screens} from '../../data/screens';

const Roles = ({activeTab, setActiveTab}) => {
  const windowWidth = useWindowDimensions().width;
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      <SafeAreaView>
        {windowWidth >= 520 ? (
          <DesktopView />
        ) : showDrawer ? (
          <TabDrawer
            screens={screens}
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ) : (
          <MobileView showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
        )}
      </SafeAreaView>
    </>
  );
};

export default Roles;
