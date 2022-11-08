import React, {useState} from 'react';
import Dashboard from '../../screens/Dashboard';
import OverView from '../../screens/OverView';
import Roles from '../../screens/Roles';
import Schedules from '../../screens/Schedules';

const Stacks = Stack => {
  const [activeTab, setActiveTab] = useState('Roles');
  return (
    <Stack.Group>
      <Stack.Screen name="Roles">
        {screenprops => (
          <Roles
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            {...screenprops}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="OverView">
        {screenprops => (
          <OverView
            {...screenprops}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Dashboard">
        {screenprops => (
          <Dashboard
            {...screenprops}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Schedules">
        {screenprops => (
          <Schedules
            {...screenprops}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </Stack.Screen>
    </Stack.Group>
  );
};

export default Stacks;
