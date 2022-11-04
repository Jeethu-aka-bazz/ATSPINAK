import React from 'react';
import {SafeAreaView, Text, useWindowDimensions, View} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import DesktopView from './DesktopView';
import MobileView from './MobileView';
import TabDrawer from '../../components/common/TabDrawer';

const Roles = () => {
  const windowWidth = useWindowDimensions().width;

  // const Drawer = createDrawerNavigator();

  return (
    // <Drawer.Navigator initialRouteName="Home">
    //   <Drawer.Screen
    //     name="Home"
    //     component={windowWidth >= 520 ? DesktopView : MobileView}
    //   />
    //   <Drawer.Screen name="TabDrawer" component={TabDrawer} />
    // </Drawer.Navigator>
    <>
      <SafeAreaView>
        {windowWidth >= 520 ? <DesktopView /> : <MobileView />}
      </SafeAreaView>
    </>
  );
};

export default Roles;
