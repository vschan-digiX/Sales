import React, {useRef, useState} from 'react';
import {Dimensions, Platform, RefreshControl, View} from 'react-native';
//  Native Base Components
import {
  useTheme,
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Alert,
  Spacer,
  Pressable,
  ScrollView,
  Divider,
  FlatList,
  Radio,
} from 'native-base';
//Icons
import {Copy} from '../../assets/icons';
import {ChevronUpIcon, AddIcon} from 'native-base';
import {InfoCircle, ChevronRight} from '../../assets/icons';
import FloatingInput from '../../themes/components/FloatingInput';

const Payment = ({navigation}: {navigation: any}) => {
  
  const paymentMethod = [
    {id:"1", name : "Cash"},
    {id:"2", name : "Credit/Debit Card"},
    {id:"3", name : "Cheque"},
    {id:"4", name : "Boost Wallet"}
    
  ]
  
  return (
    <Box flex={1} px={5} bg="white">
      <Text variant={'h5'} bold>Payable Amount</Text>
      <Box mt={2} py={2} px={3} borderRadius={5} borderWidth={1} borderColor={"gray.300"} bg="gray.100" >
        <Text  variant="label">Payment Due</Text>
        <Text color={"gray.500"} >RM 5.00</Text>
      </Box>
      <Text mt={10} mb={5} variant={'h5'} bold>Select your payment method</Text>
      <Radio.Group onChange={()=>console.log("123")} name="Threshold" accessibilityLabel="Pick Payment method">
        {paymentMethod.map(item => {
          return (
            <Box mb={3} w={"full"} key={item.id} variant="selection">
              <Text>{item.name}</Text> <Radio accessibilityLabel='Threshold' value={item.id}></Radio>
            </Box>
          )
        })}
      </Radio.Group>
      <Box flex={1}>
        <Box
          safeAreaBottom
          pb={'16px'}
          position={'absolute'}
          bottom={0}
          w={'full'}>
          <Button onPress={() => console.log('asd')}>Pay Now</Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Payment;
