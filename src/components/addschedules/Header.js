import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import font from '../../assets/fonts/font';
import RowBox from '../common/RowBox';
import theme from '../../assets/themes/themes';

const Header = ({role}) => {
  return (
    <View style={[styles.root]}>
      <RowBox>
        <Text style={[styles.toptext1]}>Open positions</Text>
        <Text style={[styles.toptext2]}>{` > ${role.name}`}</Text>
      </RowBox>
      <Text style={[styles.heading]}>{role.name}</Text>
      <View
        style={[
          styles.prioritycont(
            (role.priority === 'Medium' && theme.mediunpriority) ||
              (role.priority === 'High' && theme.highpriority) ||
              (role.priority === 'Low' && theme.lowpriority),
          ),
        ]}>
        <Text
          style={[
            {
              ...font.rolesPriority,
            },
            styles.prioritytext(role.priority === 'High' ? '#fff' : '#000'),
          ]}>{`Priority - ${role.priority}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toptext1: {
    ...font.department,
    color: 'rgba(255,255,255,0.5)',
  },
  root: {
    backgroundColor: '#3384C3',
    paddingHorizontal: 24,
    paddingVertical: 26,
  },
  toptext2: {
    ...font.department,
    color: '#FFF',
  },
  heading: {
    ...font.fontstyle5,
    color: '#FFF',
  },
  prioritycont: backgroundcolor => ({
    backgroundColor: backgroundcolor,
    paddingVertical: 2,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    borderRadius: 3,
    marginTop: 12,
  }),

  prioritytext: color => ({
    ...font.department,
    color: color,
  }),
});

export default Header;
