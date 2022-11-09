import React from 'react';
import {Modal, ScrollView, Text, View} from 'react-native';
import AddRoleHeader from '../AddRoles/AddRoleHeader';

const AddJD = ({
  isDesktop,
  active,
  setActive,
  restoreStates,
  showCreateJD,
  setShowCreateJD,
}) => {
  return (
    <Modal visible={showCreateJD}>
      <ScrollView>
        <AddRoleHeader
          isDesktop={isDesktop}
          closeModal={setShowCreateJD}
          active={'Create JD'}
          restoreStates={restoreStates}
        />
        <View>
          <Text>this is create JD</Text>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default AddJD;
