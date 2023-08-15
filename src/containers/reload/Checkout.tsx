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
  Input,
} from 'native-base';
//Icons
import {Copy} from '../../assets/icons';
import {ChevronUpIcon, AddIcon} from 'native-base';
import {InfoCircle, ChevronRight} from '../../assets/icons';

const Checkout = ({navigation}: {navigation: any}) => {
  return (
    <Box flex={1} bg="white">
      <Box flex={1} mx={4}>
        <Alert my="16px" variant="info">
          <VStack w="90%">
            <InfoCircle color="#114EBA" width="20px" />
            <Text color="#114EBA" mt="2">
              Insufficient funds in your wallet.
            </Text>
            <HStack alignItems="center" mt="2">
              <Text variant="body2" color="#114EBA" mr="2">
                Top up now
              </Text>
              <ChevronRight color="#114EBA" width="16px" />
            </HStack>
          </VStack>
        </Alert>
        <Box
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          my={'16px'}>
          <Text bold>Order Summary</Text>
          <ChevronUpIcon color={'black'} />
        </Box>
        <Box variant="shadow" pt="0px">
          <Box variant="listing">
            <Text color={'gray.500'}>Prepaid Reload</Text>
            <Text>RM 15.00</Text>
          </Box>
          <Box variant="listing">
            <Text color={'gray.500'}>Validity</Text>
            <Text>15 days</Text>
          </Box>
          <Box variant="listing">
            <Text color={'gray.500'}>Start date</Text>
            <Text>5 July 2023</Text>
          </Box>
          <Box variant="listing">
            <Text color={'gray.500'}>End Date</Text>
            <Text>20 july 2023</Text>
          </Box>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            pt={'16px'}>
            <Text bold>Total</Text>
            <Text bold>RM 15.00</Text>
          </Box>
        </Box>
        <Box
          safeAreaBottom
          pb={'16px'}
          position={'absolute'}
          bottom={0}
          w={'full'}>
          <Button onPress={() => console.log('asd')}>Submit Order</Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Checkout;
