/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import font from '../../assets/fonts/font';
import RowBox from '../common/RowBox';
import Input from './Input';
import dropdown2 from '../../assets/images/dropdown2.png';

const FormBody = ({setRolename, rolename, noofreq, setNoofreq}) => {
  return (
    <View style={{paddingVertical: 17, paddingHorizontal: 25}}>
      <Text style={{...font.fontstyle6, color: '#222222'}}>Role info</Text>
      <Text style={{...font.department, color: '#252525'}}>
        Enter your required role description.
      </Text>
      <RowBox style={{marginTop: 16}}>
        <Input
          value={rolename}
          onChange={e => {
            setRolename(e);
          }}
          label="Role"
          placeholder="Enter required role name"
          boxstyle={{width: 230}}
        />
        <Input
          label="No.of req"
          ktype="numeric"
          hasbtnright
          rightbtn={dropdown2}
          onChange={e => {
            !isNaN(e) && setNoofreq(e);
          }}
          value={noofreq + ''}
          boxstyle={{width: 70}}
        />
      </RowBox>
    </View>
  );
};

export default FormBody;
