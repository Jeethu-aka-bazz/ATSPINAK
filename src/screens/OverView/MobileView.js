import React from 'react';
import {Text} from 'react-native';
import Header from '../../components/header/MobileView';

const MobileView = ({showDrawer, setShowDrawer}) => {
  return (
    <>
      <Header showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <Text>This is OverView</Text>
    </>
  );
};

export default MobileView;
