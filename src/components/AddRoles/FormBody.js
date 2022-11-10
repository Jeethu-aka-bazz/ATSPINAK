/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import font from '../../assets/fonts/font';
import RowBox from '../common/RowBox';
import Input from './Input';
import dropdown2 from '../../assets/images/dropdown2.png';
import {Slider} from '@miblanchard/react-native-slider';
import RadioButton from '../common/RadioButton';
import DatePicker from '../datePicker';

const FormBody = ({
  setRolename,
  rolename,
  noofreq,
  setNoofreq,
  year,
  setYear,
  isDesktop,
  isFlexiable,
  setIsFlexiable,
  activeWorkplace,
  setActiveWorkplace,
  activeJobType,
  setActiveJobType,
  priority,
  setPriority,
  closeDate,
  setCloseDate,
  openDate,
  setOpenDate,
  hiringmanager,
  sethiringmanager,
  noofRound,
  setNoofRound,
  setRoundsDetails,
  requestedRoleType,
  setRequestedRoleType,
}) => {
  return (
    <View style={{backgroundColor: '#FFF', borderRadius: 4}}>
      <Container isDesktop={isDesktop}>
        <Heading
          heading="Role info"
          subheading="Enter your required role description."
          isDesktop={isDesktop}
        />
        <View
          style={{
            padding: isDesktop ? 56 : 0,
            marginTop: !isDesktop ? 16 : 0,
            width: isDesktop ? '60%' : '100%',
          }}>
          <RoleName
            rolename={rolename}
            setRolename={setRolename}
            noofreq={noofreq}
            setNoofreq={setNoofreq}
          />
          <Expirence
            year={year}
            setYear={setYear}
            isFlexiable={isFlexiable}
            setIsFlexiable={setIsFlexiable}
          />
          <Jobtype
            activeJobType={activeJobType}
            setActiveJobType={setActiveJobType}
          />
          <Workplace
            activeWorkplace={activeWorkplace}
            setActiveWorkplace={setActiveWorkplace}
          />
          <Location />
        </View>
      </Container>
      <View style={[styles.hrline]} />

      <Container isDesktop={isDesktop}>
        <Heading
          heading="Interview info"
          subheading="Enter the details of hiring team and interview process"
          isDesktop={isDesktop}
        />
        <View
          style={{
            padding: isDesktop ? 56 : 0,
            marginTop: !isDesktop ? 16 : 0,
            width: isDesktop ? '60%' : '100%',
          }}>
          <RowBox>
            <DatePicker
              label="Open date"
              value={openDate}
              boxstyle={{width: '130%'}}
              onChange={setOpenDate}
            />

            <DatePicker
              label="Closing date"
              type="date"
              value={closeDate}
              boxstyle={{width: '130%'}}
              onChange={setCloseDate}
            />
          </RowBox>
          <Input
            label="Priority"
            value={priority}
            changeDropdown={setPriority}
            boxstyle={{width: '47%'}}
            labelstyle={{marginTop: 24}}
            type="dropdown"
            dropdownlistItems={['High', 'Medium', 'Low']}
          />
          <Input
            label="Hiring Manager"
            value={hiringmanager}
            labelstyle={{marginTop: 24}}
            type="dropdown"
            changeDropdown={sethiringmanager}
            dropdownlistItems={[
              'HighLeanne Simpson',
              'Saga Lindén',
              'Wan Gengxin',
              'Adam Smith',
            ]}
          />
          <Input
            label="Number of rounds"
            value={noofRound === 0 ? '-' : noofRound}
            changeDropdown={setNoofRound}
            labelstyle={{marginTop: 24}}
            type="dropdown"
            dropdownlistItems={[1, 2, 3]}
          />
        </View>
      </Container>
      <View style={[styles.hrline]} />
      <Container isDesktop={isDesktop} style={{marginBottom: 46}}>
        <Heading
          heading="Other info"
          subheading="Enter details of requested team and budget"
          isDesktop={isDesktop}
        />
        <View
          style={{
            padding: isDesktop ? 56 : 0,
            marginTop: !isDesktop ? 16 : 0,
            width: isDesktop ? '60%' : '100%',
          }}>
          <Input
            label="Team required for"
            value={"Hustler's Development Team"}
            changeDropdown={() => {}}
            labelstyle={{marginTop: 24}}
            type="dropdown"
            dropdownlistItems={[1, 2, 3]}
          />
          <Input
            label="Request from"
            value={'Leanne Simpson'}
            changeDropdown={() => {}}
            labelstyle={{marginTop: 24}}
            type="dropdown"
            dropdownlistItems={[
              'Hangakore Hariwana',
              'Afamefuna Okparo',
              'Huỳnh Quỳnh Nhung',
            ]}
          />
          <Input
            label="Requested person role"
            value={requestedRoleType}
            changeDropdown={setRequestedRoleType}
            labelstyle={{marginTop: 24}}
            type="dropdown"
            dropdownlistItems={[
              'Product Manager',
              'Senior full stack developer ',
              'Senior Design Manager',
              'Tech Lead',
              'Product support',
              'Front end developer',
            ]}
          />
          <RowBox style={{alignItems: 'center'}}>
            <Input
              value={'5'}
              onChange={() => {}}
              label="Max budget in Lakhs per annum"
              placeholder="Max budget in Lakhs per annum"
              boxstyle={{width: '60%'}}
              labelstyle={{marginTop: 24}}
            />
            <RadioButton
              label="Flexible"
              contstyle={[styles.flexibleradio2]}
              isActive={isFlexiable}
              setisActive={setIsFlexiable}
            />
          </RowBox>
        </View>
      </Container>
      <View style={[styles.hrline]} />
    </View>
  );
};

const Container = ({children, isDesktop, style}) => {
  return <View style={[styles.container(isDesktop), style]}>{children}</View>;
};

const Heading = ({heading, subheading, isDesktop}) => {
  return (
    <View style={[styles.headerCont(isDesktop)]}>
      <Text style={{...font.fontstyle6, color: '#222222'}}>{heading}</Text>
      <Text style={{...font.department, color: '#252525'}}>{subheading}</Text>
    </View>
  );
};

const Expirence = ({year, setYear, isFlexiable, setIsFlexiable}) => {
  return (
    <View style={{marginTop: 24}}>
      <Text style={[styles.label]}>Experience required</Text>
      <RowBox>
        <Slider
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={year}
          onValueChange={e => {
            setYear(e);
          }}
          renderThumbComponent={() => <Thumb />}
          minimumTrackTintColor="#174D90"
          maximumTrackTintColor="#F1F1F1"
          containerStyle={[styles.slider]}
        />
        <RadioButton
          label="Flexible"
          contstyle={[styles.flexibleradio]}
          isActive={isFlexiable}
          setisActive={setIsFlexiable}
        />
      </RowBox>
      <RowBox style={[styles.slider, styles.yearscont]}>
        <Text style={[styles.years]}>{`${year[0]} years`}</Text>
        <Text style={[styles.years]}>{`${year[1]} years`}</Text>
      </RowBox>
    </View>
  );
};

const Jobtype = ({activeJobType, setActiveJobType}) => {
  return (
    <View style={{marginTop: 32}}>
      <Text style={[styles.label]}>Job type</Text>
      <RowBox>
        <RadioButton
          label="Full time"
          contstyle={{marginRight: '12%'}}
          isActive={activeJobType}
          setisActive={setActiveJobType}
        />
        <RadioButton
          label="Part time"
          contstyle={{marginRight: '12%'}}
          isActive={activeJobType}
          setisActive={setActiveJobType}
        />
      </RowBox>
    </View>
  );
};

const Location = () => {
  return (
    <View style={{marginTop: 34}}>
      <Text style={[styles.label]}>Location</Text>
      <Input placeholder="Enter Location details " />
    </View>
  );
};

const Workplace = ({activeWorkplace, setActiveWorkplace}) => {
  return (
    <View style={{marginTop: 32}}>
      <Text style={[styles.label]}>Work place</Text>
      <RowBox>
        <RadioButton
          label="Office"
          contstyle={{marginRight: '12%'}}
          isActive={activeWorkplace}
          setisActive={setActiveWorkplace}
        />
        <RadioButton
          label="Remote"
          contstyle={{marginRight: '12%'}}
          isActive={activeWorkplace}
          setisActive={setActiveWorkplace}
        />
        <RadioButton
          label="Flexible"
          contstyle={{marginRight: '12%'}}
          isActive={activeWorkplace}
          setisActive={setActiveWorkplace}
        />
      </RowBox>
    </View>
  );
};

const RoleName = ({rolename, setRolename, noofreq, setNoofreq}) => {
  return (
    <RowBox>
      <Input
        value={rolename}
        onChange={e => {
          setRolename(e);
        }}
        label="Role"
        placeholder="Enter required role name"
        boxstyle={{width: 230}}
      />
      <Input
        label="No.of req"
        ktype="numeric"
        hasbtnright
        rightbtn={dropdown2}
        onChange={e => {
          !isNaN(e) && setNoofreq(e);
        }}
        onRightBtnPress={() => {
          setNoofreq(noofreq + 1);
        }}
        value={noofreq + ''}
        boxstyle={{width: 70}}
      />
    </RowBox>
  );
};

const Thumb = () => {
  return (
    <View style={[styles.outerThumb]}>
      <View style={[styles.innerthumb]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: isDesktop => ({
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexDirection: isDesktop ? 'row' : 'column',
    justifyContent: 'space-between',
    marginHorizontal: isDesktop ? 102 : 0,
  }),
  innerthumb: {
    backgroundColor: '#174D90',
    borderRadius: 20,
    width: 12,
    height: 12,
  },
  outerThumb: {
    backgroundColor: '#FFF',
    padding: 5,
    borderWidth: 1,
    borderColor: '#174D90',
    borderRadius: 20,
  },
  slider: {
    width: '60%',
  },
  label: {
    ...font.fontstyle3,
    marginBottom: 6,
  },
  flexibleradio: {
    marginLeft: 24,
  },
  years: {
    ...font.fontstyle3,
    color: '#174D90',
  },
  yearscont: {
    justifyContent: 'space-between',
  },
  hrline: {
    width: '100%',
    height: 1,
    backgroundColor: '#E9F0F4',
  },
  headerCont: isDesktop => ({
    marginTop: isDesktop ? 50 : 0,
  }),
  flexibleradio2: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
});
export default FormBody;
