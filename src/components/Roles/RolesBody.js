import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import theme from '../../assets/themes/themes';
import font from '../../assets/fonts/font';
import Role from './Role';
import store from '../../store/store';
import {breakpoint} from '../../data/breakpoint';
import RowBox from '../common/RowBox';
import dropdown from '../../assets/images/dropdown.png';
import addrole1 from '../../assets/images/role.png';
import addrole2 from '../../assets/images/addrole2.png';
import PageBodyHeader from '../common/PageBodyHeader';
import Buttons from '../common/Buttons';
import Addrole from './AddRole';

// const [formsubmit, setFormsubmit] = useState(false);
const RolesBody = ({
  rolename,
  setRolename,
  showAddRole,
  setShowAddRole,
  setNoofreq,
  noofreq,
  year,
  setYear,
  formsubmit,
  setFormsubmit,
}) => {
  const roles = store.getState().roles;
  const windowWidth = useWindowDimensions().width;
  return (
    <>
      <ScrollView style={[styles.scrollview]}>
        <View style={[styles.bodycont]}>
          <PageBodyHeader
            windowWidth={windowWidth}
            setShowAddRole={setShowAddRole}
          />
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
      {!(windowWidth >= breakpoint) && (
        <CreateNewMobile setShowAddRole={setShowAddRole} />
      )}
      <Addrole
        rolename={rolename}
        setRolename={setRolename}
        showAddRole={showAddRole}
        setShowAddRole={setShowAddRole}
        noofreq={noofreq}
        setNoofreq={setNoofreq}
        year={year}
        setYear={setYear}
        formsubmit={formsubmit}
        setFormsubmit={setFormsubmit}
      />
    </>
  );
};

const OpenPosition = () => {
  return (
    <RowBox style={[styles.header2cont]}>
      <Text style={[styles.header2]}>Open positions (24)</Text>
      <RowBox style={[styles.sortcont]}>
        <Text style={[styles.sorttext]}>Sort by</Text>
        <RowBox style={[styles.sortcont, styles.sortbox]}>
          <Text style={[styles.sorttext]}>All</Text>
          <Image source={dropdown} style={[styles.dropdownimg]} />
        </RowBox>
      </RowBox>
    </RowBox>
  );
};

const CreateNewMobile = ({setShowAddRole}) => {
  return (
    <TouchableOpacity
      style={[styles.CreateNewMobile]}
      onPress={() => {
        setShowAddRole(true);
      }}>
      <Image source={addrole1} style={[styles.createNewMobileimg1]} />
      <Image source={addrole2} style={[styles.createNewMobileimg2]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

  sorttext: {
    ...font.fontstyle3,
    color: '#252525',
  },
});

export default RolesBody;
