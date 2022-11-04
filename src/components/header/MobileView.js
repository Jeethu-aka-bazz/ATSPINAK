import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import logo from '../../assets/images/logo.png';
import RowBox from '../common/RowBox';
import hamburgermenu from '../../assets/images/hamburgermenu.png';
import theme from '../../assets/themes/themes';
import font from '../../assets/fonts/font';
import notification from '../../assets/images/notificationMobile.png';
import close from '../../assets/images/close.png';

const Header = ({showDrawer, setShowDrawer}) => {
  const closeDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  return (
    <RowBox style={[styles.headercont]}>
      <TouchableOpacity style={[styles.hambuttonstyle]} onPress={closeDrawer}>
        <Image
          source={showDrawer ? close : hamburgermenu}
          style={[styles.hamburgermenuimg]}
        />
      </TouchableOpacity>
      <RowBox style={[styles.logo]}>
        <Image source={logo} style={[styles.logoimg]} />
        <Text style={[styles.headertext]}>Pinak ATS</Text>
      </RowBox>
      {showDrawer ? (
        <View style={[styles.notificationimg]} />
      ) : (
        <Image source={notification} style={[styles.notificationimg]} />
      )}
    </RowBox>
  );
};

const styles = StyleSheet.create({
  headercont: {
    backgroundColor: theme.headerTabbackground,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  headertext: {
    color: theme.headerText,
    margin: 9,
    ...font.headerlogofont,
  },
  hamburgermenuimg: {
    width: 14,
    height: 9,
  },
  logoimg: {
    width: 25,
    height: 25,
  },
  notificationimg: {
    width: 32,
    height: 32,
  },
  logo: {
    alignItems: 'center',
  },
  hambuttonstyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 12,
    borderRadius: 16,
  },
});

export default Header;
