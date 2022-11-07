import React, {useState} from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import font from '../../assets/fonts/font';
import close from '../../assets/images/closeicon2.png';
import theme from '../../assets/themes/themes';
import RowBox from '../common/RowBox';
import FormBody from './FormBody';
import Input from './Input';

const Addrole = ({
  showAddRole,
  setShowAddRole,
  setRolename,
  rolename,
  setNoofreq,
  noofreq,
}) => {
  const [active, setActive] = useState('Role details');
  return (
    <Modal visible={showAddRole}>
      <SafeAreaView>
        <Header setShowAddRole={setShowAddRole} active={active} />
        <ScrollView>
          <FormBody
            rolename={rolename}
            setRolename={setRolename}
            setNoofreq={setNoofreq}
            noofreq={noofreq}
          />
        </ScrollView>
        <Footer />
      </SafeAreaView>
    </Modal>
  );
};

const Header = ({setShowAddRole, active}) => {
  const tabs = ['Role details', 'Create JD'];
  return (
    <View style={[styles.headertopcont]}>
      <RowBox style={[styles.headercont]}>
        <Text style={[styles.headertext1]}>Create new role</Text>
        <TouchableOpacity
          onPress={() => {
            setShowAddRole(false);
          }}>
          <Image source={close} style={[styles.closeimg]} />
        </TouchableOpacity>
      </RowBox>
      <RowBox>
        {tabs.map((tab, i) => (
          <RowBox key={i} style={[styles.progressbox(active === tab)]}>
            <View style={[styles.circle]} />
            <Text style={[styles.headersubtext]}>{tab}</Text>
          </RowBox>
        ))}
      </RowBox>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={[styles.footercont]}>
      <TouchableOpacity style={[styles.footerbtn]}>
        <Text>Confirm and next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  closeimg: {
    width: 40,
    height: 40,
  },
  headercont: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: '#FFF',
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  headersubtext: {
    ...font.fontstyle3,
    color: '#FFF',
    marginRight: 17,
  },
  progressbox: isactive => ({
    alignItems: 'center',
    opacity: isactive ? 1 : 0.4,
  }),
  headertopcont: {
    backgroundColor: theme.createroleheader,
    paddingHorizontal: 25,
    paddingVertical: 14,
  },
  headertext1: {
    ...font.fontstyle5,
    color: '#FFF',
    marginVertical: 21,
  },
  footercont: {
    shadowColor: 'rgba(0, 0, 0, 0.08);',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.8,
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  footerbtn: {
    backgroundColor: theme.addrolebackground,
    padding: 13,
    alignSelf: 'flex-end',
    borderRadius: 4,
  },
});

export default Addrole;
