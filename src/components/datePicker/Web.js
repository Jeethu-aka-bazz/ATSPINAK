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
              setCurrentDate(
                formateTime({
                  getHours: () => e.hours,
                  getMinutes: () => e.minutes,
                }),
              );
            }}
            hours={new Date().getHours()}
            minutes={new Date().getMinutes()}
            label="Select time"
            uppercase={false}
            cancelLabel="Cancel"
            confirmLabel="Ok"
            animationType="fade"
            locale="en"
            keyboardIcon=""
            clockIcon=""
          />
        ))}
    </>
  );
};

export default WebDatePicker;
