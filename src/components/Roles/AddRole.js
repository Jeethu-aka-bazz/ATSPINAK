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
import close from '../../assets/images/closeicon2.png';
import theme from '../../assets/themes/themes';
import RowBox from '../common/RowBox';
import FormBody from './FormBody';
import {breakpoint} from '../../data/breakpoint';
import SubmitForm from './SubmitForm';

const Addrole = ({
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
}) => {
  const [active, setActive] = useState('Role details');
  const windowWidth = useWindowDimensions().width;
  const isDesktop = windowWidth >= breakpoint;
  return (
    <Modal visible={showAddRole}>
      <ScrollView>
        <Header
          isDesktop={isDesktop}
          setShowAddRole={setShowAddRole}
          active={active}
          setActive={setActive}
          setFormsubmit={setFormsubmit}
        />
        {isDesktop ? (
          <DesktopFormContainer>
            {formsubmit ? (
              <SubmitForm />
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
              />
            )}
          </DesktopFormContainer>
        ) : formsubmit ? (
          <SubmitForm />
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
          />
        )}
      </ScrollView>
      {!formsubmit && (
        <Footer setFormsubmit={setFormsubmit} setActive={setActive} />
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

const Header = ({
  setShowAddRole,
  active,
  isDesktop,
  setFormsubmit,
  setActive,
}) => {
  const tabs = ['Role details', 'Create JD'];
  return (
    <View style={[styles.headertopcont]}>
      <RowBox style={[styles.headercont]}>
        <Text style={[styles.headertext1]}>Create new role</Text>
        <TouchableOpacity
          style={{marginTop: isDesktop ? -50 : 0}}
          onPress={() => {
            setShowAddRole(false);
            setFormsubmit(false);
            setActive('Role details');
          }}>
          <Image source={close} style={[styles.closeimg]} />
        </TouchableOpacity>
      </RowBox>
      <RowBox style={{justifyContent: 'space-between'}}>
        {isDesktop && (
          <Text style={{...font.fontstyle3, color: '#FFF'}}>
            Enter role description & hiring team details
          </Text>
        )}
        <RowBox>
          {tabs.map((tab, i) => (
            <RowBox key={i} style={[styles.progressbox(active === tab)]}>
              <View style={[styles.circle]} />
              <Text style={[styles.headersubtext]}>{tab}</Text>
            </RowBox>
          ))}
        </RowBox>
      </RowBox>
    </View>
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
    paddingHorizontal: '5%',
    paddingBottom: '4%',
    paddingVertical: 30,
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
