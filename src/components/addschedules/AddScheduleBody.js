import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import font from '../../assets/fonts/font';
import RowBox from '../common/RowBox';

const AddScheduleBody = () => {
  return (
    <View style={[styles.root]}>
      <RowBox>
        <Boxes text="Shortlisted" color={'#1DB167'} />
        <Boxes
          text="1 st Round"
          color="#174D90"
          boxstyle={{position: 'relative', right: 28, zIndex: 0}}
        />
      </RowBox>
      <Text numberOfLines={1} style={{...font.fontstyle7, color: '#202020'}}>
        Problem solving round ( 20 Candidates available )
      </Text>
    </View>
  );
};

const Boxes = ({text, color, boxstyle}) => {
  return (
    <RowBox style={[boxstyle]}>
      <View style={[styles.trianglebox(color)]}>
        <Text style={{...font.fontstyle4, color: '#FFF'}}>{text}</Text>
      </View>
      <View style={[styles.triangle(color)]} />
    </RowBox>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#F3F9FD',
    padding: 24,
  },
  triangle: color => ({
    borderTopWidth: 15,
    borderRightWidth: 0,
    borderBottomWidth: 15,
    borderLeftWidth: 24,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: color,
    position: 'relative',
    right: 2,
    zIndex: 100,
  }),
  trianglebox: color => ({
    justifyContent: 'center',
    backgroundColor: color,
    paddingHorizontal: 18,
    borderRadius: 4,
  }),
});

export default AddScheduleBody;
