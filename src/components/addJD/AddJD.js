import React from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import font from '../../assets/fonts/font';
import theme from '../../assets/themes/themes';
import AddRoleHeader from '../AddRoles/AddRoleHeader';
import DesktopFormContainer from '../common/DesktopFormContainer';
import AddJDBody from './AddJDBody';

const AddJD = ({
  isDesktop,
  active,
  setActive,
  restoreStates,
  showCreateJD,
  setShowCreateJD,
  saveRole,
}) => {
  return (
    <Modal visible={showCreateJD}>
      <ScrollView>
        <AddRoleHeader
          isDesktop={isDesktop}
          closeModal={setShowCreateJD}
          active={'Create JD'}
          restoreStates={restoreStates}
          subheading="Create JD"
        />
        {isDesktop ? (
          <DesktopFormContainer>
            <AddJDBody />
          </DesktopFormContainer>
        ) : (
          <>
            <AddJDBody />
          </>
        )}
      </ScrollView>
      <Footer setShowCreateJD={setShowCreateJD} saveRole={saveRole} />
    </Modal>
  );
};

const Footer = ({setShowCreateJD, saveRole}) => {
  return (
    <View style={[styles.footercont]}>
      <TouchableOpacity
        style={[styles.footerbtn]}
        onPress={() => {
          saveRole();
          setShowCreateJD(false);
        }}>
        <Text style={[styles.footerbtntext]}>Confirm and next</Text>
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
  footerbtntext: {
    ...font.fontstyle4,
    color: '#FFF',
  },
});

export default AddJD;
