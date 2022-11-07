import React from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import done from '../../assets/images/done.png';
import department from '../../assets/images/department.png';
import font from '../../assets/fonts/font';
import theme from '../../assets/themes/themes';
import RowBox from '../common/RowBox';
import {mobilebreakpoint} from '../../data/breakpoint';

const Role = ({role}) => {
  const windowWidth = useWindowDimensions().width;
  return (
    <>
      <View style={[styles.rolecont(windowWidth)]}>
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
        <RoleIcon />
        <Text
          style={[styles.centeralign, {...font.drawrttab}, styles.drawrttab]}>
          {role.name}
        </Text>
        <Text style={[styles.centeralign, styles.department]}>
          {role.department}
        </Text>
        <Requirements noofrecruitment={role.noofrecruitment} />
        <RowBox style={[styles.datescont]}>
          <Dates title="Created Date" date={role.createddate} />
          <VerticalLine />
          <Dates title="Closed Date" date={role.closedDate} />
        </RowBox>
        <Progress progress={role.progress} />
      </View>
    </>
  );
};

const Progress = ({progress}) => {
  return (
    <>
      <RowBox style={[styles.progresscont]}>
        <Progressdone showImg={progress.publishedJD} />
        <Progressdone showImg={progress.sourcing} />
        <Progressdone showImg={progress.shortlisting} />
        <Progressdone showImg={progress.hiring} />
      </RowBox>
      <RowBox style={[styles.progressdes]}>
        <Text>Publish JD</Text>
        <Text>Sourcing</Text>
        <Text>Shorlisting</Text>
        <Text>Hiring</Text>
      </RowBox>
    </>
  );
};

const Progressdone = ({showImg}) => {
  return (
    <View style={[styles.progressdonecont(showImg)]}>
      <Image source={done} style={[styles.progressdoneimg]} />
    </View>
  );
};

const RoleIcon = () => {
  return (
    <View style={[styles.iconbackground, styles.centeralign]}>
      <Image source={department} style={[styles.icon]} />
    </View>
  );
};

const Requirements = ({noofrecruitment}) => {
  return (
    <RowBox style={[styles.requirementbox, styles.centeralign]}>
      <Text style={[styles.department]}>No of requirements </Text>
      <Text style={[styles.department, styles.noofrecruitment]}>
        {noofrecruitment}
      </Text>
    </RowBox>
  );
};

const VerticalLine = () => {
  return <View style={[styles.verticalline]} />;
};

const Dates = ({title, date}) => {
  return (
    <View style={[styles.dates]}>
      <Text style={[styles.department]}>{title}</Text>
      <Text>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rolecont: windowWidth => ({
    backgroundColor: theme.rolecardbackground,
    paddingVertical: 16,
    paddingHorizontal: 14,
    marginTop: 12,
    marginHorizontal: 6,
    borderRadius: 4,
    width: windowWidth <= mobilebreakpoint ? '100%' : 330,
  }),
  iconbackground: {
    backgroundColor: theme.iconbackground,
    padding: 13,
    width: 48,
    borderRadius: 30,
  },
  icon: {
    width: 22,
    height: 22,
  },
  centeralign: {
    alignSelf: 'center',
  },
  prioritycont: backgroundcolor => ({
    backgroundColor: backgroundcolor,
    paddingVertical: 2,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    borderRadius: 3,
  }),
  prioritytext: color => ({
    color: color,
  }),
  drawrttab: {
    marginTop: 15,
    color: theme.drawrttab,
  },
  department: {
    color: '#202020',
    ...font.department,
  },
  requirementbox: {
    backgroundColor: 'transparent',
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 16,
    borderColor: theme.requirementborder,
    borderWidth: 1,
    margin: 12,
  },
  noofrecruitment: {
    fontWeight: '500',
    color: '#202124',
  },
  dates: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalline: {
    width: 1,
    height: '100%',
    backgroundColor: '#000',
  },
  datescont: {
    justifyContent: 'space-between',
    marginHorizontal: 55,
  },
  progressdonecont: showImg => ({
    backgroundColor: showImg
      ? theme.progressdonebackground
      : theme.progressnotdonebackground,
    borderWidth: !showImg ? 1 : 0,
    borderColor: !showImg ? theme.progressnotdoneborder : null,
    width: 16,
    height: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  progressdoneimg: {
    width: 13,
    height: 7,
  },
  progresscont: {
    justifyContent: 'space-between',
    backgroundColor: theme.progressindicatorbackground,
    marginTop: 23,
    marginHorizontal: 12,
    paddingHorizontal: 20,
    borderTopColor: theme.progressindicatorborder,
    borderTopWidth: 1,
    borderBottomColor: theme.progressindicatorborder,
    borderBottomWidth: 1,
  },
  progressdes: {
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginVertical: 4,
  },
});

export default Role;
