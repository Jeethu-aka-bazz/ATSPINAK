import React from 'react';
import {DatePickerModal} from 'react-native-paper-dates';
import {formateDate} from '../../data/formateDate';

const WebDatePicker = ({
  currentDate,
  setCurrentDate,
  showDatePicker,
  setShowDatePicker,
}) => {
  return (
    <DatePickerModal
      mode="single"
      visible={showDatePicker}
      onDismiss={() => {
        setShowDatePicker(false);
      }}
      date={currentDate}
      onConfirm={e => {
        setShowDatePicker(false);
        setCurrentDate(formateDate(e.date));
      }}
      closeIcon=""
      editIcon=""
      calendarIcon=""
    />
  );
};

export default WebDatePicker;
