import React, {useState} from 'react';
import {SafeAreaView, useWindowDimensions} from 'react-native';
import DesktopView from './DesktopView';
import MobileView from './MobileView';
import TabDrawer from '../../components/common/TabDrawer';
import {screens} from '../../data/screens';
import {breakpoint} from '../../data/breakpoint';
import {store} from '../../store/store';
import {formateDate} from '../../data/formateDate';

const Roles = ({activeTab, setActiveTab}) => {
  const restoreStates = () => {
    setRolename('');
    setNoofreq(1);
    setIsFlexiable(false);
    setActiveWorkplace('Office');
    setActiveJobType('Full time');
    setPriority('High');
    sethiringmanager('Artem Sazonov');
    setNoofRound(0);
    setRequestedRoleType('Product Manager');
    setActive('Role details');
    setCloseDate(formateDate(new Date()));
    setOpenDate(formateDate(new Date()));
  };

  const saveRole = () => {
    const payload = {
      name: requestedRoleType,
      department: rolename,
      noofrecruitment: noofreq,
      createddate: openDate,
      closedDate: closeDate,
      priority: priority,
      progress: {
        publishedJD: showCreateJD,
        sourcing: false,
        shortlisting: false,
        hiring: false,
      },
    };
    store.dispatch({type: 'addRole', payload: payload});
    restoreStates();
  };

  const date = new Date();
  const windowWidth = useWindowDimensions().width;
  const isDesktop = windowWidth >= breakpoint;
  const [showDrawer, setShowDrawer] = useState(false);
  const [showAddRole, setShowAddRole] = useState(false);
  const [year, setYear] = useState([3, 5]);
  const [noofreq, setNoofreq] = useState(1);
  const [formsubmit, setFormsubmit] = useState(false);
  const [isFlexiable, setIsFlexiable] = useState(false);
  const [activeWorkplace, setActiveWorkplace] = useState('Office');
  const [rolename, setRolename] = useState('');
  const [activeJobType, setActiveJobType] = useState('Full time');
  const [priority, setPriority] = useState('High');
  const [closeDate, setCloseDate] = useState(formateDate(date));
  const [openDate, setOpenDate] = useState(formateDate(date));
  const [hiringmanager, sethiringmanager] = useState('Artem Sazonov');
  const [noofRound, setNoofRound] = useState(0);
  const [roundsDetails, setRoundsDetails] = useState([]);
  const [requestedRoleType, setRequestedRoleType] = useState('Product Manager');
  const [active, setActive] = useState('Role details');
  const [showCreateJD, setShowCreateJD] = useState(false);

  return (
    <>
      <SafeAreaView>
        {windowWidth >= breakpoint ? (
          <DesktopView
            setActive={setActive}
            active={active}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setShowAddRole={setShowAddRole}
            showAddRole={showAddRole}
            year={year}
            setYear={setYear}
            noofreq={noofreq}
            setNoofreq={setNoofreq}
            formsubmit={formsubmit}
            setFormsubmit={setFormsubmit}
            isFlexiable={isFlexiable}
            setIsFlexiable={setIsFlexiable}
            activeWorkplace={activeWorkplace}
            rolename={rolename}
            setRolename={setRolename}
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
            saveRole={saveRole}
            requestedRoleType={requestedRoleType}
            setRequestedRoleType={setRequestedRoleType}
            restoreStates={restoreStates}
            showCreateJD={showCreateJD}
            setShowCreateJD={setShowCreateJD}
            isDesktop={isDesktop}
          />
        ) : showDrawer ? (
          <TabDrawer
            screens={screens}
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ) : (
          <MobileView
            setActive={setActive}
            active={active}
            windowWidth={windowWidth}
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
            showAddRole={showAddRole}
            setShowAddRole={setShowAddRole}
            year={year}
            setYear={setYear}
            noofreq={noofreq}
            setNoofreq={setNoofreq}
            formsubmit={formsubmit}
            setFormsubmit={setFormsubmit}
            isFlexiable={isFlexiable}
            setIsFlexiable={setIsFlexiable}
            activeWorkplace={activeWorkplace}
            rolename={rolename}
            setRolename={setRolename}
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
            saveRole={saveRole}
            requestedRoleType={requestedRoleType}
            setRequestedRoleType={setRequestedRoleType}
            restoreStates={restoreStates}
            showCreateJD={showCreateJD}
            setShowCreateJD={setShowCreateJD}
            isDesktop={isDesktop}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default Roles;
