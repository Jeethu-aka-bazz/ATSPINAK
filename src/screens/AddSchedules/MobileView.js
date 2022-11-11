import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import font from '../../assets/fonts/font';
import AddScheduleBody from '../../components/addschedules/AddScheduleBody';
import Footer from '../../components/addschedules/Footer';
import Header from '../../components/addschedules/Header';

const MobileView = ({showDrawer, setShowDrawer, role}) => {
  return (
    <>
      <ScrollView style={[styles.root]}>
        <Header role={role} />
        <AddScheduleBody />
      </ScrollView>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: '#F3F9FD',
  },
});

export default MobileView;
