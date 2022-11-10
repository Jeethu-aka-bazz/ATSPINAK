import React, {useState} from 'react';
import {Platform, View} from 'react-native';
import DateBox from './DateBox';
import MobileDatePicker from './Mobile';
import WebDatePicker from './Web';

const DatePicker = ({
  label,
  labelstyle,
  boxstyle,
  //   showDatePicker,
  //   setShowDatePicker,
  value,
  onChange,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    <View style={{marginRight: '20%'}}>
      <DateBox
        label={label}
        labelstyle={labelstyle}
        boxstyle={boxstyle}
        showDatePicker={showDatePicker}
        setShowDatePicker={setShowDatePicker}
        value={value}
      />
      {Platform.OS !== 'web' ? (
        <MobileDatePicker
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
          onChange={onChange}
        />
      ) : (
        <WebDatePicker
          currentDate={new Date()}
          setCurrentDate={onChange}
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
        />
      )}
    </View>
  );
};

export default DatePicker;
