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
import DesktopFormContainer from '../common/DesktopFormContainer';

const Addrole = props => {
  const windowWidth = useWindowDimensions().width;
  const {
    showAddRole,
    setShowAddRole,
    active,
    setActive,
    setFormsubmit,
    restoreStates,
    formsubmit,
    setShowCreateJD,
    saveRole,
    rolename,
    isDesktop,
  } = props;
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
          saveRole={saveRole}
          formsubmit={formsubmit}
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
              <FormBody {...props} />
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
          <FormBody {...props} />
        )}
      </ScrollView>
      {!formsubmit && rolename !== '' && (
        <Footer setFormsubmit={setFormsubmit} setActive={setActive} />
      )}
    </Modal>
  );
};

const Footer = ({setFormsubmit, setActive}) => {
  return (
    <View style={[styles.footercont]}>
      <TouchableOpacity
        style={[styles.footerbtn]}
        onPress={() => {
          setFormsubmit(true);
          setActive('Create JD');
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
