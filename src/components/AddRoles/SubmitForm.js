import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import font from '../../assets/fonts/font';
import jd from '../../assets/images/JD.png';

const SubmitForm = ({
  isDesktop,
  setFormsubmit,
  setActive,
  setShowCreateJD,
  setShowAddRole,
}) => {
  return (
    <View style={[styles.rootcont(isDesktop)]}>
      <View style={[styles.container(isDesktop)]}>
        <Image source={jd} style={[styles.jdimg]} />
        <View>
          <Text style={[styles.header]}>Hello!</Text>
          <Text style={[styles.subheading]}>
            There is already a JD created for similar role, would you like to
            sync that and update
          </Text>
          <View style={{flexDirection: isDesktop ? 'row' : 'column'}}>
            <Button
              label="Yes, let's view "
              onPress={() => {
                setFormsubmit(false);
                setShowCreateJD(true);
                setShowAddRole(false);
              }}
            />
            <Button
              label="No, let's create new"
              onPress={() => {
                setFormsubmit(false);
                setShowCreateJD(true);
                setShowAddRole(false);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const Button = ({label, onPress}) => {
  return (
    <TouchableOpacity style={[styles.buttoncont]} onPress={onPress}>
      <Text style={[styles.buttontext]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rootcont: isDesktop => ({
    backgroundColor: '#FFF',
    borderRadius: 4,
    padding: '6%',
    paddingHorizontal: isDesktop ? '10%' : '6%',
    paddingVertical: isDesktop ? '15%' : '6%',
  }),
  jdimg: {
    width: 117,
    height: 110,
  },
  container: isDesktop => ({
    backgroundColor: '#FFFCED',
    borderRadius: 4,
    paddingVertical: isDesktop ? '15%' : '45%',
    paddingHorizontal: isDesktop ? '6%' : '15%',
    flexDirection: isDesktop ? 'row' : 'column',
    flexWrap: 'wrap',
  }),
  header: {
    ...font.bodyheading,
    color: '#202124',
  },
  subheading: {
    ...font.fontstyle3,
    color: '#202124',
  },
  buttoncont: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 17,
    marginTop: 26,
    marginRight: 20,
    borderRadius: 4,
  },
  buttontext: {
    ...font.fontstyle3,
    color: '#174D90',
  },
});

export default SubmitForm;
