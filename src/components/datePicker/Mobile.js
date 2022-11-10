import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {formateDate} from '../../data/formateDate';

export {DateTimePickerModal};

const MobileDatePicker = ({showDatePicker, onChange, setShowDatePicker}) => {
  return (
    <DateTimePickerModal
      isVisible={showDatePicker}
      mode="date"
      onConfirm={e => {
        onChange(formateDate(e));
        setShowDatePicker(false);
      }}
      onCancel={() => {
        setShowDatePicker(false);
      }}
    />
  );
};

export default MobileDatePicker;
