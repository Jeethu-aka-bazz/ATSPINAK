import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import font from '../../assets/fonts/font';
import {breakpoint} from '../../data/breakpoint';
import Buttons from './Buttons';
import RowBox from './RowBox';
import notification from '../../assets/images/notificationWeb.png';
import theme from '../../assets/themes/themes';

const PageBodyHeader = ({windowWidth}) => {
  return (
    <>
      <Text style={[styles.header]}>Roles</Text>
      {windowWidth >= breakpoint && (
        <CreateNewWeb buttontext="+  Create new role" />
      )}
    </>
  );
};

const CreateNewWeb = ({buttontext}) => {
  return (
    <RowBox style={[styles.createNewWebcont]}>
      <View style={[styles.createNewWebbutton]}>
        <Text style={[styles.createNewWebbuttontext]}>{buttontext}</Text>
      </View>
      <View style={[styles.createNewWebimgbackground]}>
        <Image source={notification} style={[styles.createNewWebimg]} />
      </View>
    </RowBox>
  );
};

const styles = StyleSheet.create({
  createNewWebbutton: {
    backgroundColor: '#002169',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'flex-end',
  },
  createNewWebbuttontext: {
    ...font.fontstyle4,
    color: '#FFF',
  },
  createNewWebimgbackground: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#002169',
    borderWidth: 1,
    borderRadius: 20,

    marginLeft: 16,
  },
  createNewWebimg: {
    width: 20,
    height: 24,
  },
  createNewWebcont: {
    position: 'absolute',
    top: '2%',
    right: '3%',
  },
  header: {
    ...font.bodyheading,
    color: theme.header,
  },
});

export default PageBodyHeader;
