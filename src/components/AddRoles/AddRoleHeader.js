import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import font from '../../assets/fonts/font';
import theme from '../../assets/themes/themes';
import RowBox from '../common/RowBox';
import close from '../../assets/images/closeicon2.png';

const AddRoleHeader = ({
  closeModal,
  active,
  isDesktop,
  setFormsubmit = () => {},
  setActive = () => {},
  restoreStates,
  heading,
  subheading,
  saveRole,
  formsubmit,
}) => {
  const tabs = ['Role details', 'Create JD'];
  return (
    <View style={[styles.headertopcont]}>
      <RowBox style={[styles.headercont]}>
        <Text style={[styles.headertext1]}>{heading || 'Create new role'}</Text>
        <TouchableOpacity
          style={{marginTop: isDesktop ? -50 : 0}}
          onPress={() => {
            formsubmit && saveRole();
            closeModal(false);
            setFormsubmit(false);
            restoreStates();
          }}>
          <Image source={close} style={[styles.closeimg]} />
        </TouchableOpacity>
      </RowBox>
      <RowBox style={{justifyContent: 'space-between'}}>
        {isDesktop && (
          <Text style={{...font.fontstyle3, color: '#FFF'}}>
            {subheading || 'Enter role description & hiring team details'}
          </Text>
        )}
        <RowBox>
          {tabs.map((tab, i) => (
            <RowBox key={i} style={[styles.progressbox(active === tab)]}>
              <View style={[styles.circle]} />
              <Text style={[styles.headersubtext]}>{tab}</Text>
            </RowBox>
          ))}
        </RowBox>
      </RowBox>
    </View>
  );
};

const styles = StyleSheet.create({
  headertopcont: {
    backgroundColor: theme.createroleheader,
    paddingHorizontal: '5%',
    paddingBottom: '4%',
    paddingVertical: 30,
  },
  headercont: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headertext1: {
    ...font.fontstyle5,
    color: '#FFF',
    marginVertical: 21,
  },
  closeimg: {
    width: 40,
    height: 40,
  },
  progressbox: isactive => ({
    alignItems: 'center',
    opacity: isactive ? 1 : 0.4,
  }),
  circle: {
    backgroundColor: '#FFF',
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  headersubtext: {
    ...font.fontstyle3,
    color: '#FFF',
    marginRight: 17,
  },
});

export default AddRoleHeader;
