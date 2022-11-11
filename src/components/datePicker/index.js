import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import font from '../../assets/fonts/font';
import DateBox from './DateBox';
import MobileDatePicker from './Mobile';
import WebDatePicker from './Web';

const DatePicker = ({
  label,
  labelstyle,
  boxstyle,
  type = 'date',
  value,
  onChange,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    <View style={{marginRight: '20%'}}>
      {type === 'date' ? (
        <DateBox
          label={label}
          labelstyle={labelstyle}
          boxstyle={boxstyle}
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
          value={value}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            setShowDatePicker(true);
          }}>
          <Text style={[styles.scheduledate]}>Select Schudle</Text>
        </TouchableOpacity>
      )}
      {Platform.OS !== 'web' ? (
        <MobileDatePicker
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
          onChange={onChange}
          mode={type}
        />
      ) : (
        <WebDatePicker
          type={type}
          currentDate={new Date()}
          setCurrentDate={onChange}
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  scheduledate: {
    ...font.fontstyle3,
    color: '#EEBC1F',
  },
});

export default DatePicker;
