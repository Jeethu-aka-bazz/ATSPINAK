import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {formateDate} from '../../data/formateDate';
import {formateDateTime} from '../../data/formateDateTime';
import {formateTime} from '../../data/formateTime';

export {DateTimePickerModal};

const MobileDatePicker = ({
  showDatePicker,
  onChange,
  setShowDatePicker,
  mode,
}) => {
  return (
    <DateTimePickerModal
      isVisible={showDatePicker}
      mode={mode}
      onConfirm={e => {
        mode === 'date' && onChange(formateDate(e));
        mode === 'datetime' && onChange(formateDateTime(e));
        mode === 'time' && onChange(formateTime(e));
        setShowDatePicker(false);
      }}
      onCancel={() => {
        setShowDatePicker(false);
      }}
    />
  );
};

export default MobileDatePicker;
