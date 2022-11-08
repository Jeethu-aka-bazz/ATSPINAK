import React, {useState} from 'react';
import {SafeAreaView, useWindowDimensions} from 'react-native';
import TabDrawer from '../../components/common/TabDrawer';
import {breakpoint} from '../../data/breakpoint';
import {screens} from '../../data/screens';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

const Schedules = ({activeTab, setActiveTab}) => {
  const windowWidth = useWindowDimensions().width;
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <SafeAreaView>
        {windowWidth >= breakpoint ? (
          <DesktopView activeTab={activeTab} setActiveTab={setActiveTab} />
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

export default Schedules;
