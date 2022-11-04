import React, {useState} from 'react';
import Roles from '../../screens/Roles';

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
    </Stack.Group>
  );
};

export default Stacks;
