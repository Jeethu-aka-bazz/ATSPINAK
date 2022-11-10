import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import font from '../../assets/fonts/font';
import theme from '../../assets/themes/themes';
import {store} from '../../store/store';

const AddJDBody = ({isDesktop}) => {
  const data = store.getState().jd;
  return (
    <View style={[styles.root(isDesktop)]}>
      {isDesktop && (
        <>
          <View style={[styles.sidebar]}>
            {Object.keys(data).map(fields => (
              <Text style={[styles.subheadtext, {marginVertical: 25}]}>
                {fields.replace('_', ' ')}
              </Text>
            ))}
          </View>
          <View style={[styles.verticalline]} />
        </>
      )}
      <View
        style={{
          paddingLeft: isDesktop ? '4%' : 0,
          width: isDesktop ? '80%' : '100%',
        }}>
        {Object.keys(data).map(fields => (
          <Content head={fields} subhead={data[fields]} />
        ))}
      </View>
    </View>
  );
};

const Content = ({head, subhead}) => {
  return (
    <View style={[styles.contentbox]}>
      <Text style={[styles.headtext]}>{head.replace('_', ' ')}</Text>
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
  root: isDesktop => ({
    backgroundColor: '#FFF',
    paddingHorizontal: isDesktop ? 60 : 24,
    paddingBottom: 62,
    borderRadius: 4,
    flexDirection: 'row',
  }),
  contentbox: {
    marginTop: 24,
  },
  sidebar: {
    width: '16%',
  },
  verticalline: {
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    width: 2,
    height: '105%',
  },
});

export default AddJDBody;
