import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import theme from '../../assets/themes/themes';
import font from '../../assets/fonts/font';
import Buttons from '../common/Buttons';
import Role from './Role';
import store from '../../store/store';
import notification from '../../assets/images/notificationWeb.png';
import {breakpoint} from '../../data/breakpoint';
import RowBox from '../common/RowBox';
import dropdown from '../../assets/images/dropdown.png';
import addrole1 from '../../assets/images/role.png';
import addrole2 from '../../assets/images/addrole2.png';

const RolesBody = () => {
  const roles = store.getState().roles;
  const windowWidth = useWindowDimensions().width;
  return (
    <>
      <ScrollView style={[styles.scrollview]}>
        <View style={[styles.bodycont]}>
          <Text style={[styles.header]}>Roles</Text>
          {windowWidth >= breakpoint && <CreateNewWeb />}
          <RowBox>
            <Buttons
              title="Open roles - 32"
              active
              buttonstyle={[styles.buttonstyle]}
            />
            <Buttons title="Closed roles - 188" />
          </RowBox>
          {windowWidth >= breakpoint && <OpenPosition />}
          <View style={[styles.rolecont]}>
            {roles.map((role, i) => (
              <Role key={i} role={role} />
            ))}
          </View>
        </View>
      </ScrollView>
      {!(windowWidth >= breakpoint) && <CreateNewMobile />}
    </>
  );
};

const OpenPosition = () => {
  return (
    <RowBox style={[styles.header2cont]}>
      <Text style={[styles.header2]}>Open positions (24)</Text>
      <RowBox style={[styles.sortcont]}>
        <Text style={[{...font.fontstyle3, color: '#252525'}]}>Sort by</Text>
        <RowBox style={[styles.sortcont, styles.sortbox]}>
          <Text style={[{...font.fontstyle3, color: '#252525'}]}>All</Text>
          <Image source={dropdown} style={[styles.dropdownimg]} />
        </RowBox>
      </RowBox>
    </RowBox>
  );
};

const CreateNewWeb = () => {
  return (
    <RowBox style={[styles.createNewWebcont]}>
      <View style={[styles.createNewWebbutton]}>
        <Text style={[styles.createNewWebbuttontext]}>+ Create new role</Text>
      </View>
      <View style={[styles.createNewWebimgbackground]}>
        <Image source={notification} style={[styles.createNewWebimg]} />
      </View>
    </RowBox>
  );
};

const CreateNewMobile = () => {
  return (
    <View style={[styles.CreateNewMobile]}>
      <Image source={addrole1} style={[styles.createNewMobileimg1]} />
      <Image source={addrole2} style={[styles.createNewMobileimg2]} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    ...font.bodyheading,
    color: theme.header,
  },
  bodycont: {
    backgroundColor: theme.bodyBackground,
    paddingLeft: '4%',
    paddingRight: '6%',
    paddingVertical: 13,
    marginBottom: Platform.OS !== 'web' && 100,
    height: Platform.OS === 'web' ? '100%' : null,
  },
  buttonstyle: {
    marginRight: 16,
  },
  rolecont: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 35,
    marginTop: 16,
  },
  scrollview: {
    height: Platform.OS === 'web' ? '100vh' : null,
    backgroundColor: theme.bodyBackground,
  },
  createNewWebbutton: {
    backgroundColor: '#002169',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'flex-end',
  },
  createNewWebbuttontext: {
    ...font.fontstyle4,
    color: '#FFF',
  },
  createNewWebimgbackground: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#002169',
    borderWidth: 1,
    borderRadius: 20,

    marginLeft: 16,
  },
  createNewWebimg: {
    width: 20,
    height: 24,
  },
  createNewMobileimg1: {
    width: 24,
    height: 23,
  },
  createNewMobileimg2: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 15,
    height: 15,
  },
  CreateNewMobile: {
    backgroundColor: theme.addrolebackground,
    position: 'absolute',
    bottom: 200,
    right: 34,
    padding: 12,
    borderRadius: 50,
  },
  header2: {
    ...font.heading2,
  },
  header2cont: {
    marginTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sortcont: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownimg: {
    width: 12,
    height: 6,
  },
  sortbox: {
    backgroundColor: 'rgba(37, 37, 37, 0.05)',
    width: 126,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginLeft: 15,
  },
  createNewWebcont: {
    position: 'absolute',
    top: '2%',
    right: '3%',
  },
});

export default RolesBody;
