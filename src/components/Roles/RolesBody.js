import React from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import Rowbox from '../common/RowBox';
import theme from '../../assets/themes/themes';
import font from '../../assets/fonts/font';
import Buttons from '../common/Buttons';
import Role from './Role';
import store from '../../store/store';

const RolesBody = () => {
  const roles = store.getState().roles;
  return (
    <View style={[styles.bodycont]}>
      <Text style={[styles.header]}>Roles</Text>
      <Rowbox>
        <Buttons
          title="Open roles - 32"
          active
          buttonstyle={[styles.buttonstyle]}
        />
        <Buttons title="Closed roles - 188" />
      </Rowbox>
      <View style={[styles.rolecont]}>
        {roles.map(role => (
          <Role role={role} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    ...font.bodyheading,
    color: theme.header,
  },
  bodycont: {
    backgroundColor: theme.bodyBackground,
    paddingLeft: '4%',
    paddingRight: '6%',
    paddingVertical: 13,
    marginBottom: Platform.OS !== 'web' && 100,
  },
  buttonstyle: {
    marginRight: 16,
  },
  rolecont: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 35,
  },
});

export default RolesBody;
