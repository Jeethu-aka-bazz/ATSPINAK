import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import font from '../../assets/fonts/font';
import RowBox from '../common/RowBox';

const Input = ({
  label,
  placeholder,
  boxstyle,
  labelstyle,
  ktype,
  hasbtnright,
  value,
  onChange,
  rightbtn,
}) => {
  return (
    <View style={{marginRight: 10}}>
      <Text style={[{...font.fontstyle3, marginBottom: 6}, labelstyle]}>
        {label}
      </Text>
      <RowBox style={[styles.imputbox, boxstyle]}>
        <TextInput
          value={value}
          placeholder={placeholder}
          keyboardType={ktype}
          placeholderTextColor="#202020"
          style={{width: hasbtnright ? '60%' : '100%'}}
          onChangeText={onChange}
        />
        {hasbtnright && (
          <TouchableOpacity>
            <Image source={rightbtn} style={[styles.dropdown2img]} />
          </TouchableOpacity>
        )}
      </RowBox>
    </View>
  );
};

const styles = StyleSheet.create({
  imputbox: {
    //
    backgroundColor: '#F1F1F1',
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  dropdown2img: {
    //
    width: 20,
    height: 15,
  },
});

export default Input;
