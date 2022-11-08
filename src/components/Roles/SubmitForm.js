import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SubmitForm = () => {
  return (
    <View style={[styles.rootcont]}>
      <View>
        <Text>Form submited</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootcont: {
    backgroundColor: '#FFF',
    borderRadius: 4,
  },
});

export default SubmitForm;
