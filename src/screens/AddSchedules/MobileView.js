import React from 'react';
import {ScrollView, Text} from 'react-native';
import AddScheduleBody from '../../components/addschedules/AddScheduleBody';
import Header from '../../components/addschedules/Header';

const MobileView = ({showDrawer, setShowDrawer, role}) => {
  return (
    <>
      <ScrollView>
        <Header role={role} />
        <AddScheduleBody />
      </ScrollView>
    </>
  );
};

export default MobileView;
