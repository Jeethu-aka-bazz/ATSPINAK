import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import logo from '../../assets/images/logo.png';
import {screens} from '../../data/screens';

const Header = ({activeTab, setActiveTab}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.headercont]}>
      <Image source={logo} style={[styles.headerlogo]} />
      {screens.map((screen, i) => (
        <TouchableOpacity
          key={i}
          style={styles.tabs(activeTab === screen.name)}
          onPress={() => {
            setActiveTab(screen.name);
            navigation.navigate(activeTab);
          }}>
          <Image source={screen.img} style={[styles.tabimg]} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  headercont: {
    backgroundColor: '#002169',
    width: 66,
    height: '100vh',
    position: 'fixed',
    zIndex: 10000,
  },
  tabs: isActive => ({
    padding: 20,
    opacity: isActive ? 1 : 0.2,
    backgroundColor: isActive && 'rgba(0, 0, 0, 0.15)',
  }),
  headerlogo: {
    margin: 16,
    width: 38,
    height: 38,
  },
  tabimg: {
    width: 24,
    height: 23,
  },
});

export default Header;
