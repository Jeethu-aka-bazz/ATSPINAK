/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
  changeDropdown,
  dropdownlistItems = [],
  type = 'text',
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  if (type === 'text') {
    return (
      <View style={{marginRight: 10}}>
        <Text
          style={[
            {...font.fontstyle3, marginBottom: 6, color: '#252525'},
            labelstyle,
          ]}>
          {label}
        </Text>
        <RowBox style={[styles.inputbox, boxstyle]}>
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
  } else if (type === 'date') {
    return (
      <View style={{marginRight: '20%'}}>
        <Text
          style={[
            {...font.fontstyle3, marginBottom: 6, color: '#252525'},
            labelstyle,
          ]}>
          {label}
        </Text>
        <TouchableOpacity style={[styles.inputbox, boxstyle]}>
          <Text style={[{...font.fontstyle4, color: '#252525'}]}>{value}</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (type === 'dropdown') {
    return (
      <>
        <View style={{marginRight: 10}}>
          <Text
            style={[
              {...font.fontstyle3, marginBottom: 6, color: '#252525'},
              labelstyle,
            ]}>
            {label}
          </Text>
          <TouchableOpacity
            style={[styles.inputbox, boxstyle]}
            onPress={() => {
              setShowDropdown(!showDropdown);
            }}>
            <Text style={[{...font.fontstyle4, color: '#252525'}]}>
              {value}
            </Text>
          </TouchableOpacity>

          {showDropdown &&
            dropdownlistItems.map(listitem => (
              <TouchableOpacity
                onPress={() => {
                  changeDropdown(listitem);
                  setShowDropdown(!showDropdown);
                }}
                style={[styles.dropdownitem, boxstyle]}>
                <Text>{listitem}</Text>
              </TouchableOpacity>
            ))}
        </View>
      </>
    );
  }

  return <></>;
};

const styles = StyleSheet.create({
  inputbox: {
    //
    backgroundColor: '#F1F1F1',
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  dropdownitem: {
    backgroundColor: '#FFF',
    padding: 10,
  },
  dropdown2img: {
    //
    width: 20,
    height: 15,
  },
});

export default Input;
