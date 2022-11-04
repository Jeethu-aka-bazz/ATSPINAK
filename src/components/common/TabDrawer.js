import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../header/MobileView';
import theme from '../../assets/themes/themes';
import RowBox from './RowBox';
import font from '../../assets/fonts/font';
import {useNavigation} from '@react-navigation/native';

const TabDrawer = ({
  showDrawer,
  setShowDrawer,
  screens,
  setActiveTab,
  activeTab,
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.drawerCont]}>
      <Header showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      {screens.map(screen => (
        <TouchableOpacity
          style={[styles.drawerbody(activeTab === screen.name)]}
          onPress={() => {
            setActiveTab(screen.name);
            navigation.navigate(activeTab);
            setShowDrawer(!showDrawer);
          }}>
          <RowBox>
            <Image source={screen.img} style={[styles.drawericon]} />
            <Text style={[styles.drawertext]}>{screen.name}</Text>
          </RowBox>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  drawerCont: {
    backgroundColor: theme.headerTabbackground,
    height: Platform.OS === 'web' ? '100vh' : '103%',
  },
  drawerbody: isActiveTab => ({
    opacity: isActiveTab ? 1 : 0.3,
    paddingVertical: 24,
    paddingHorizontal: 48,
  }),
  drawertext: {
    color: theme.headerText,
    marginVertical: 3,
    marginHorizontal: 15,
    ...font.drawrttab,
  },
  drawericon: {
    width: 30,
    height: 29,
  },
});

export default TabDrawer;
