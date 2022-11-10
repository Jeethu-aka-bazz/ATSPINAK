import React from 'react';
import {Text} from 'react-native';
import Header from '../../components/addschedules/Header';
import DesktopContainer from '../../components/common/DesktopContainer';
import DesktopHeader from '../../components/header/DesktopView';

const DesktopView = ({activeTab, setActiveTab, role}) => {
  return (
    <>
      <DesktopHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <DesktopContainer>
        <Header role={role} />
      </DesktopContainer>
    </>
  );
};

export default DesktopView;
