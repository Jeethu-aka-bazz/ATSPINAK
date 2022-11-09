/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import font from '../../assets/fonts/font';
import theme from '../../assets/themes/themes';
import FormBody from './FormBody';
import {breakpoint} from '../../data/breakpoint';
import SubmitForm from './SubmitForm';
import AddRoleHeader from './AddRoleHeader';

const Addrole = ({
  active,
  setActive,
  showAddRole,
  setShowAddRole,
  setRolename,
  rolename,
  setNoofreq,
  noofreq,
  year,
  setYear,
  formsubmit,
  setFormsubmit,
  isFlexiable,
  setIsFlexiable,
  setActiveWorkplace,
  activeWorkplace,
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
  saveRole,
  requestedRoleType,
  setRequestedRoleType,
  restoreStates,
  setShowCreateJD,
}) => {
  const windowWidth = useWindowDimensions().width;
  const isDesktop = windowWidth >= breakpoint;
  return (
    <Modal visible={showAddRole}>
      <ScrollView>
        <AddRoleHeader
          isDesktop={isDesktop}
          closeModal={setShowAddRole}
          active={active}
          setActive={setActive}
          setFormsubmit={setFormsubmit}
          restoreStates={restoreStates}
        />
        {isDesktop ? (
          <DesktopFormContainer>
            {formsubmit ? (
              <SubmitForm
                isDesktop={isDesktop}
                setFormsubmit={setFormsubmit}
                setActive={setActive}
                setShowCreateJD={setShowCreateJD}
                setShowAddRole={setShowAddRole}
              />
            ) : (
              <FormBody
                isDesktop={isDesktop}
                rolename={rolename}
                setRolename={setRolename}
                setNoofreq={setNoofreq}
                noofreq={noofreq}
                year={year}
                setYear={setYear}
                isFlexiable={isFlexiable}
                setIsFlexiable={setIsFlexiable}
                activeWorkplace={activeWorkplace}
                setActiveWorkplace={setActiveWorkplace}
                activeJobType={activeJobType}
                setActiveJobType={setActiveJobType}
                priority={priority}
                setPriority={setPriority}
                closeDate={closeDate}
                setCloseDate={setCloseDate}
                openDate={openDate}
                setOpenDate={setOpenDate}
                hiringmanager={hiringmanager}
                sethiringmanager={sethiringmanager}
                noofRound={noofRound}
                setNoofRound={setNoofRound}
                setRoundsDetails={setRoundsDetails}
                requestedRoleType={requestedRoleType}
                setRequestedRoleType={setRequestedRoleType}
              />
            )}
          </DesktopFormContainer>
        ) : formsubmit ? (
          <SubmitForm
            isDesktop={isDesktop}
            setFormsubmit={setFormsubmit}
            setActive={setActive}
            setShowCreateJD={setShowCreateJD}
            setShowAddRole={setShowAddRole}
          />
        ) : (
          <FormBody
            isDesktop={isDesktop}
            rolename={rolename}
            setRolename={setRolename}
            setNoofreq={setNoofreq}
            noofreq={noofreq}
            year={year}
            setYear={setYear}
            isFlexiable={isFlexiable}
            setIsFlexiable={setIsFlexiable}
            activeWorkplace={activeWorkplace}
            setActiveWorkplace={setActiveWorkplace}
            activeJobType={activeJobType}
            setActiveJobType={setActiveJobType}
            priority={priority}
            setPriority={setPriority}
            closeDate={closeDate}
            setCloseDate={setCloseDate}
            openDate={openDate}
            setOpenDate={setOpenDate}
            hiringmanager={hiringmanager}
            sethiringmanager={sethiringmanager}
            noofRound={noofRound}
            setNoofRound={setNoofRound}
            setRoundsDetails={setRoundsDetails}
            requestedRoleType={requestedRoleType}
            setRequestedRoleType={setRequestedRoleType}
          />
        )}
      </ScrollView>
      {!formsubmit && rolename !== '' && (
        <Footer
          saveRole={saveRole}
          setFormsubmit={setFormsubmit}
          setActive={setActive}
        />
      )}
    </Modal>
  );
};

const DesktopFormContainer = ({children}) => {
  return (
    <View
      style={{
        backgroundColor: '#F3F9FD',
        paddingHorizontal: '5%',
      }}>
      <View style={{position: 'relative', top: -35}}>{children}</View>
    </View>
  );
};

const Footer = ({setFormsubmit, setActive, saveRole}) => {
  return (
    <View style={[styles.footercont]}>
      <TouchableOpacity
        style={[styles.footerbtn]}
        onPress={() => {
          setFormsubmit(true);
          setActive('Create JD');
          saveRole();
        }}>
        <Text style={[{...font.fontstyle4, color: '#FFF'}]}>
          Confirm and next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footercont: {
    shadowColor: 'rgba(0, 0, 0, 0.08);',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.8,
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    // marginTop: 55,
  },
  footerbtn: {
    backgroundColor: theme.addrolebackground,
    padding: 13,
    alignSelf: 'flex-end',
    borderRadius: 4,
  },
});

export default Addrole;
