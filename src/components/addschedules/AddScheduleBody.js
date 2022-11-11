import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import font from '../../assets/fonts/font';
import {breakpoint} from '../../data/breakpoint';
import {store} from '../../store/store';
import RowBox from '../common/RowBox';
import DatePicker from '../datePicker';

const AddScheduleBody = () => {
  const windowWidth = useWindowDimensions().width;
  const isDesktop = windowWidth >= breakpoint;
  const schedules = store.getState().schedule;
  return (
    <View style={[styles.root]}>
      <Text numberOfLines={1} style={{...font.fontstyle7, color: '#202020'}}>
        {`Problem solving round ( ${schedules.length} Candidates available )`}
      </Text>
      {schedules.map(scheduleDetails => (
        <Schedules scheduleDetails={scheduleDetails} isDesktop={isDesktop} />
      ))}
    </View>
  );
};

const Schedules = ({scheduleDetails, isDesktop}) => {
  const {name, age, profileMatch, schedule, interViewer} = scheduleDetails;
  const [fromDate, setFromDate] = useState(schedule);
  const [toDate, setToDate] = useState(fromDate);
  return (
    <View style={[styles.schedulecard(isDesktop)]}>
      <Text style={[styles.schedulecardhead]}>{`${name}, ${age}`}</Text>
      <Text style={[styles.label]}>Profile matching</Text>
      <RowBox style={{marginBottom: 8}}>
        <View style={[styles.progressbarcont]}>
          <View style={[styles.progressbar(profileMatch)]} />
        </View>
        <Text style={[styles.profilematchtext]}>{profileMatch}</Text>
      </RowBox>
      <Text style={[styles.label]}>Schedule</Text>
      {fromDate === '' ? (
        <DatePicker type="datetime" onChange={setFromDate} value={new Date()} />
      ) : toDate === '' ? (
        <RowBox>
          <Text style={[styles.scheduledate(true)]}>{fromDate}</Text>
          <DatePicker type="time" onChange={setToDate} value={new Date()} />
        </RowBox>
      ) : (
        <Text>{fromDate + '-' + toDate}</Text>
      )}
      <Text style={[styles.label]}>Interview by</Text>
      <Text style={[styles.interviewer]}>{interViewer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
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
  schedulecard: isDesktop => ({
    backgroundColor: '#FFF',
    marginVertical: 12,
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 4,
    flexDirection: isDesktop ? 'row' : 'column',
    alignItems: isDesktop ? 'center' : null,
  }),
  schedulecardhead: {
    ...font.drawrttab,
    color: '#252525',
    marginBottom: 8,
  },
  progressbarcont: {
    width: '75%',
    height: 15,
    borderWidth: 1,
    borderColor: '#6DA9DD',
  },
  progressbar: percentage => ({
    width: percentage,
    backgroundColor: '#6DA9DD',
    height: 15,
  }),
  profilematchtext: {
    ...font.fontstyle3,
    color: '#252525',
    marginLeft: 11,
  },
  label: {
    ...font.department,
    color: '#252525',
    opacity: 0.5,
    marginVertical: 8,
  },
  scheduledate: isScheduled => ({
    ...font.fontstyle3,
    color: isScheduled ? '#202020' : '#EEBC1F',
  }),
  interviewer: {
    ...font.fontstyle3,
    color: '#202020',
  },
});

export default AddScheduleBody;
