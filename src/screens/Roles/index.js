import React, {useState} from 'react';
import {SafeAreaView, Text, useWindowDimensions, View} from 'react-native';
import DesktopView from './DesktopView';
import MobileView from './MobileView';
import TabDrawer from '../../components/common/TabDrawer';
import {screens} from '../../data/screens';
import {breakpoint} from '../../data/breakpoint';

const Roles = ({activeTab, setActiveTab}) => {
  const windowWidth = useWindowDimensions().width;
  const [showDrawer, setShowDrawer] = useState(false);
  const [showAddRole, setShowAddRole] = useState(false);
  return (
    <>
      <SafeAreaView>
        {windowWidth >= breakpoint ? (
          <DesktopView
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setShowAddRole={setShowAddRole}
            showAddRole={showAddRole}
          />
        ) : showDrawer ? (
          <TabDrawer
            screens={screens}
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ) : (
          <MobileView
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
            showAddRole={showAddRole}
            setShowAddRole={setShowAddRole}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default Roles;
