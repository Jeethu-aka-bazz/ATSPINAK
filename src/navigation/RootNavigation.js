import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Stacks from './stack/Stacks';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{header: () => <></>}}>
      {(() => Stacks(Stack))()}
    </Stack.Navigator>
  );
};

export default RootNavigation;
