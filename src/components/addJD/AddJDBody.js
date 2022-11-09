import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import font from '../../assets/fonts/font';
import theme from '../../assets/themes/themes';
import {store} from '../../store/store';

const AddJDBody = () => {
  const data = store.getState().jd;
  return (
    <View style={[styles.root]}>
      {Object.keys(data).map(fields => (
        <Content head={fields} subhead={data[fields]} />
      ))}
    </View>
  );
};

const Content = ({head, subhead}) => {
  return (
    <View style={[styles.contentbox]}>
      <Text style={[styles.headtext]}>{head}</Text>
      {Array.isArray(subhead) ? (
        <PointedContent contents={subhead} />
      ) : (
        <Text style={[styles.subheadtext]}>{subhead}</Text>
      )}
      {subhead === '' && <Text style={[styles.subheadtext]}>—</Text>}
    </View>
  );
};

const PointedContent = ({contents}) => {
  return (
    <>
      {contents.map(listcontent => (
        <Text style={[styles.subheadtext]}>{`• ${listcontent}`}</Text>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  headtext: {
    ...font.fontstyle6,
    color: theme.radiobtnactive,
  },
  subheadtext: {
    ...font.fontstyle4,
    color: '#202124',
    marginTop: 8,
  },
  root: {
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    paddingBottom: 62,
  },
  contentbox: {
    marginTop: 24,
  },
});

export default AddJDBody;
