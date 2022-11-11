import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import AddScheduleBody from '../../components/addschedules/AddScheduleBody';
import Header from '../../components/addschedules/Header';
import DesktopContainer from '../../components/common/DesktopContainer';
import DesktopHeader from '../../components/header/DesktopView';
import Footer from '../../components/addschedules/Footer';

const DesktopView = ({activeTab, setActiveTab, role}) => {
  return (
    <>
      <DesktopHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <DesktopContainer>
        <ScrollView style={[styles.root]}>
          <Header role={role} />
          <AddScheduleBody />
        </ScrollView>
        <Footer />
      </DesktopContainer>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: '#F3F9FD',
  },
});

export default DesktopView;
