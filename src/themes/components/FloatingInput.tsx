import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon } from 'native-base';


type props = {
  placeholder : string,
  value? : any,
  label : string,
  InputRightElement? : any,
  changeText: (text : string)=> void,
  type?: any
}

const FloatingInput = ({
  placeholder,
  value,
  label,
  InputRightElement,
  changeText,
  type = 'default',
} :props) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder={placeholder}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type={type}
        keyboardType={type == 'number' ? 'number-pad' : type}
        value={value}
        onChangeText={(username) => changeText(username)}
        _focus={{
          paddingTop: '24px',
          paddingBottom: '12px',
          _android: {
            paddingTop: '17px',
            paddingBottom: '3px',
          },
        }}
        InputRightElement={
          InputRightElement && (
            <Icon as={InputRightElement} mr="2" color="gray.500" />
          )
        }
      ></Input>
      {isInputFocused ? (
        <Text variant="label" style={styles.floatingLabel}>
          {label}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
  },
  floatingLabel: {
    color: '#344054',
    marginTop: -47,
    marginLeft: 13,
  },
});

export default FloatingInput;
