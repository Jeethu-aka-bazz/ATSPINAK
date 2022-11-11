import React from 'react';
import {DatePickerModal, TimePickerModal} from 'react-native-paper-dates';
import {formateDate} from '../../data/formateDate';
import {formateTime} from '../../data/formateTime';

const WebDatePicker = ({
  currentDate,
  setCurrentDate,
  showDatePicker,
  setShowDatePicker,
  type,
}) => {
  return (
    <>
      {(type === 'dateW' || type === 'date') && (
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
      )}
      {type === 'datetime' ||
        (type === 'time' && (
          <TimePickerModal
            visible={showDatePicker}
            onDismiss={() => {
              setShowDatePicker(false);
            }}
            onConfirm={e => {
              setShowDatePicker(false);
              console.log(e);
              setCurrentDate(
                formateTime({
                  getHours: () => e.hours,
                  getMinutes: () => e.minutes,
                }),
              );
            }}
            hours={new Date().getHours()} // default: current hours
            minutes={new Date().getMinutes()} // default: current minutes
            label="Select time" // optional, default 'Select time'
            uppercase={false} // optional, default is true
            cancelLabel="Cancel" // optional, default: 'Cancel'
            confirmLabel="Ok" // optional, default: 'Ok'
            animationType="fade" // optional, default is 'none'
            locale="en" // optional, default is automically detected by your system
            keyboardIcon="" // optional, default is "keyboard-outline"
            clockIcon="" // optional, default is "clock-outline"
          />
        ))}
    </>
  );
};

{
  /* <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={12} // default: current hours
        minutes={14} // default: current minutes
        label="Select time" // optional, default 'Select time'
        uppercase={false} // optional, default is true
        cancelLabel="Cancel" // optional, default: 'Cancel'
        confirmLabel="Ok" // optional, default: 'Ok'
        animationType="fade" // optional, default is 'none'
        locale="en" // optional, default is automically detected by your system
        // keyboardIcon="keyboard-outline" // optional, default is "keyboard-outline"
        // clockIcon="clock-outline" // optional, default is "clock-outline"
      /> */
}

export default WebDatePicker;
