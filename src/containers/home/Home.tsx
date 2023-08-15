import React, {useState} from 'react';
import {
  Platform,
  ScrollView,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';

// Native Base Components
import {useTheme, Pressable, Text, Box, HStack, VStack} from 'native-base';
// Icons
import {FileMedal} from '../../assets/icons';
import {File} from '../../assets/icons';
import {Passcode} from '../../assets/icons';
import {AutoBilling} from '../../assets/icons';
import {CalendarRefresh} from '../../assets/icons';
import {History} from '../../assets/icons';
import {CurrencyRefresh} from '../../assets/icons';

import BottomModal from '../../components/BottomModal';

const max_length = 11;

const Home = ({navigation}: {navigation: any}) => {
  const [bottomModal, setbottomModal] = useState(false);
  let screen = "Reload"
  // Mock Data
  const listing = [
    {
      name: 'Reload',
      pages: 'Reload',
      icons: <FileMedal color="#000000" />,
    },
    {
      name: 'Bottom',
      pages: 'Add-Ons',
      icons: <File color="#000000" />,
    },
    {
      name: 'Bill Payment',
      pages: 'Bill Payment',
      icons: <Passcode color="#000000" />,
    },
    {
      name: 'View Plans',
      pages: 'View Plans',
      icons: <AutoBilling color="#000000" />,
    },
    {
      name: 'Number Search',
      pages: 'Number Search',
      icons: <CalendarRefresh color="#000000" />,
    },
    {
      name: 'View Device',
      pages: 'View Device',
      icons: <History color="#000000" />,
    },
    {
      name: 'Incident Management',
      pages: 'Incident Management',
      icons: <CurrencyRefresh color="#000000" />,
    },
    {
      name: 'Download Bill',
      pages: 'Download Bill',
      icons: <CurrencyRefresh color="#000000" />,
    },
  ];

  const rowsListing = [];
  for (let i = 0; i < listing.length; i += 4) {
    const row = listing.slice(i, i + 4);
    rowsListing.push(row);
  }

  return (
    <>
      <Box px="3" py="4">
        <Box mx="16px" my="50px">
          <Text bold variant="h7" mb="16px">
            Reload
          </Text>
          <VStack justifyContent="center">
            <HStack>
              <Pressable onPress={() => {screen = "Reload" ; setbottomModal(true)}}>
                <Box width="85px" alignItems="center" mb="16px">
                  <FileMedal color="#000000" />
                  <Text variant="label" pt={2} textAlign="center">
                    Reload
                  </Text>
                </Box>
              </Pressable>
              <Pressable onPress={() => {screen = "AddOn" ; setbottomModal(true)}}>
                <Box width="85px" alignItems="center" mb="16px">
                  <Passcode color="#000000" />
                  <Text variant="label" pt={2} textAlign="center">
                    Add On
                  </Text>
                </Box>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('OTP')}>
                <Box width="85px" alignItems="center" mb="16px">
                  <Passcode color="#000000" />
                  <Text variant="label" pt={2} textAlign="center">
                    OTP
                  </Text>
                </Box>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Checkout')}>
                <Box width="85px" alignItems="center" mb="16px">
                  <AutoBilling color="#000000" />
                  <Text variant="label" pt={2} textAlign="center">
                    CheckOut
                  </Text>
                </Box>
              </Pressable>
            </HStack>
          </VStack>
        </Box>
      </Box>

      <BottomModal
        isOpen={bottomModal}
        onClose={setbottomModal}
        onPress={text => {
          setbottomModal(false);
          
          navigation.navigate('Reload', {
            phone: text,
            isDigiPhone: text.includes('016'),
          });
        }}
      />
    </>
  );
};

export default Home;
