import React from 'react';
import Roles from '../../screens/Roles';

const Stacks = Stack => {
  return (
    <Stack.Group>
      <Stack.Screen name="Roles">
        {screenprops => <Roles {...screenprops} />}
      </Stack.Screen>
    </Stack.Group>
  );
};

export default Stacks;
