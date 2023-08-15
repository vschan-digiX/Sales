import React, { useState } from 'react';
import {
  Dimensions,
  Platform,
  RefreshControl,
  View
} from 'react-native';
//  Native Base Components
import {
  useTheme,
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Badge,
  Spacer,
  Pressable,
  ScrollView,
  Divider,
  FlatList,
  Input,
} from 'native-base';
//Icons
import {Copy} from '../../assets/icons';
import OTPInput from '../../components/OTPinput/OTPInput';
import CPPInput from '../../components/CPPinput/CPPInput';
import ModalError from '../../components/ModalError/ModalError';

const OTP = ({navigation}: {navigation: any}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [isCCPOpen, setIsCCPOpen] = useState(false)
  const [isModalError, setIsModalError] = useState(false)
  return (
    <>
        <Button  onPress={()=> setIsOpen(!isOpen)}>Open Modal</Button>
        <Button  onPress={()=> setIsCCPOpen(!isCCPOpen)}>Open CCP Modal</Button>
        <Button  onPress={()=> setIsModalError(!isModalError)}>Open ERROR Modal</Button>
        <OTPInput onClose={setIsOpen} isOpen={isOpen} onPress={()=>{}}/>
        <CPPInput onClose={setIsCCPOpen} isOpen={isCCPOpen} onPress={()=>{}}/>
        <ModalError title="Insufficient Credit Balance" body="Customer has insufficient credit balance. Please proceed with ‘Fresh Money’ option." onClose={setIsModalError} isOpen={isModalError} onPress={()=>{}}/>
        <Input></Input>
    </>
  );
};
export default OTP;
