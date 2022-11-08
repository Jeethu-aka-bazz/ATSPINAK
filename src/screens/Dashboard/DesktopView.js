import React from 'react';
import {Text} from 'react-native';
import DesktopContainer from '../../components/common/DesktopContainer';
import Header from '../../components/header/DesktopView';

const DesktopView = ({activeTab, setActiveTab}) => {
  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <DesktopContainer>
        <Text>this is Dashboard</Text>
      </DesktopContainer>
    </>
  );
};

export default DesktopView;
