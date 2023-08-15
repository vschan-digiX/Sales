import React, {useMemo, useState} from 'react';
import {Animated, Platform, RefreshControl, View} from 'react-native';
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
  Modal,
  ChevronUpIcon,
} from 'native-base';
//Icons
import {InfoCircle, ChevronRight, History} from '../../assets/icons';

const AddOn = ({route, navigation}: any) => {
  // const {phone, isDigiPhone} = route.params;
  const phone = '0163319066';
  const isDigiPhone = true;
  
  const [isHide, setIsHide] = useState(false)
  const [activeTab, setActiveTab] = useState(0);
  const [refreshing, setRefreshing] = useState(false);



  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // Mock Data
  const activeList = [
    {
      id: '1',
      tag: 'Internet',
      type: 'Auto-Renew',
      title: '5G Booster',
      expire: 'Expired on: 18/07/2023',
    },
    {
      id: '2',
      tag: 'Internet',
      type: 'One Time Pass',
      title: '5G Booster + 30 GB Data (max charnum for this line is 64 chars)',
      expire: 'Expired on: 18/07/2023',
    },
  ];

  const pastList = [
    {
      id: '1',
      tag: 'VAS',
      type: 'Auto-Renew',
      title: 'Freedom Add On (max charnum for this line is 64 chars)',
      expire: 'Expired on: 18/07/2023',
    },
    {
      id: '2',
      tag: 'VAS',
      type: 'Auto-Renew',
      title: '1-Day Calls & SMS Pass (max charnum for this line is 64 chars)',
      expire: 'Expired on: 18/07/2023',
    },
  ];

  const renderlist = () => {
    const list = activeTab ? [...pastList] : [...activeList];
    if (list.length === 0) {
      return (
        <Box flex={1}>
          <Box justifyContent={'center'} alignItems={'center'}>
            <History width={100} height={100} />
            <Text mt={5} variant={'h5'} bold>
              Uh-oh!
            </Text>
            <Text>Customer has not added any subscription yet.</Text>
          </Box>
        </Box>
      );
    }
    return list.map(data => {
      return (
        <Box key={data.id} variant={'shadow'} mb={5}>
          <HStack justifyContent={'space-between'}>
            <Badge variant={'outline'}>{data.tag}</Badge>
            <Badge variant={'success'}>{data.type}</Badge>
          </HStack>
          <Text py={2} bold fontFamily={'Montserrat'}>
            {data.title}
          </Text>
          <HStack justifyContent={'space-between'} alignItems={'center'}>
            <HStack space={2}>
              <History width={20} height={20} />
              <Text>{data.expire}</Text>
            </HStack>
            <Button
              variant={activeTab ? 'default' : 'destructive'}
              size={'xs'}
              paddingX={5}>
              {activeTab ? 'Renew' : 'Unsubscribe'}
            </Button>
          </HStack>
        </Box>
      );
    });
  };

  const paymentTab = [
    {
      id: 0,
      pages: 'Active',
    },
    {
      id: 1,
      pages: 'just4ME™',
    },
    {
      id: 2,
      pages: 'Past',
    },
  ];

  return (
    <>
      <Box flex={1} bg="#001870">
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Box flex={1}>
            <Box borderRadius={'5px'} mx="17px" bg="#FFF">
              <HStack py={5} justifyContent="space-evenly">
                <VStack flex={1} paddingLeft={5}>
                  <Text color={'#98A2B3'}>Mobile</Text>
                  <Text mb={1} bold>
                    {phone}
                  </Text>
                  <HStack space={1}>
                    <Badge variant={isDigiPhone ? 'yellow' : 'celcomBlue'}>
                      {isDigiPhone ? 'Digi' : 'Celcom'}
                    </Badge>
                    <Badge variant={'success'}>Active</Badge>
                  </HStack>
                </VStack>
                <Divider h={'full'} orientation="vertical" />
                <VStack flex={1} paddingLeft={5}>
                  <Text color={'#98A2B3'}>Plan</Text>
                  <Text mb={1} bold>
                    biGBonus 48
                  </Text>
                  <Text color="primary.600" variant="h8">
                    Expiry on 31 July 2023
                  </Text>
                </VStack>
              </HStack>
              <VStack py={5} pl={5} bg={'#F2F4F7'}>
                <Text color={'#98A2B3'}>Prepaid Balance</Text>
                <Text variant={'h4'} bold>
                  RM5.00
                </Text>
              </VStack>
            </Box>

            <Box flex={1} bg="#F9FAFB">
              <Box mx="17px">
                <Text variant="h5" bold py="16px">
                  Proceed to Discover Add-Ons
                </Text>
                <HStack justifyContent="space-evenly">
                  <Box variant={'shadow'} pr={8}>
                    <InfoCircle />
                    <Text mt={1}>Internet</Text>
                  </Box>
                  <Box variant={'shadow'} pr={8}>
                    <InfoCircle />
                    <Text mt={1}>Internet</Text>
                  </Box>
                  <Box variant={'shadow'} pr={8}>
                    <InfoCircle />
                    <Text mt={1}>Internet</Text>
                  </Box>
                </HStack>
                <Text variant="h5" bold py="16px">
                  Customer's Subscription
                </Text>
                <VStack
                  mb={'16px'}
                  rounded={'full'}
                  bg={'gray.100'}
                  p={2}
                  justifyContent="center">
                  {isDigiPhone && (
                    <Button.Group>
                      {paymentTab.map(item => (
                        <Button
                          key={item.id.toString()}
                          onPress={() => {
                            setActiveTab(item.id);
                          }}
                          flex={1}
                          variant={
                            activeTab === item.id ? 'pillActive' : 'pill'
                          }>
                          {item.pages}
                        </Button>
                      ))}
                    </Button.Group>
                  )}
                </VStack>
                {renderlist()}
              </Box>
            </Box>
          </Box>
        </ScrollView>
        {Platform.OS === 'ios' && (
          <Box
            bg="#F9FAFB"
            zIndex={-1}
            bottom={-100}
            left={0}
            right={0}
            position={'absolute'}
            height={'md'}
          />
        )}
      </Box>
      <Modal
        variant="bottom"
        isOpen={true}
        onClose={() => {}}
        accessibilityLabel="Default Modal">
        <Modal.Content variant="bottom">
          <HStack justifyContent={'space-between'}>
            <Text flex={1} variant="h6" bold>
              1-Day Calls & SMS Pass (max charnum for this line is 64 chars)
            </Text>

            <Badge variant={'success'} alignSelf={'flex-start'}>
              Auto-Renew
            </Badge>
          </HStack>
          <Text>
            Daily XXGB - Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </Text>
          <HStack my={2} justifyContent={'space-between'} alignItems={'center'}>
            <Text variant="h6" bold>
              Overview
            </Text>
            <Pressable onPress={()=>setIsHide(!isHide)}>
            <ChevronUpIcon  color="black" />
            </Pressable>
              
          </HStack>
          
         {isHide && <Box>
            <HStack
              my={4}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Text>Subsription Name</Text>
              <Text color={'gray.600'}>5G Booster + 30GB (RM10)</Text>
            </HStack>
            <HStack
              my={4}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Text>Users</Text>
              <Text color={'gray.600'}>5G</Text>
            </HStack>
            <HStack
              my={4}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Text>Price</Text>
              <Text color={'gray.600'}>RM 10</Text>
            </HStack>
            <HStack
              my={4}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Text>Validity</Text>
              <Text color={'gray.600'}>Valid till end of bill cycle</Text>
            </HStack>
            <HStack
              my={4}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Text>Auto Renew</Text>
              <Text color={'gray.600'}>Yes</Text>
            </HStack>
          </Box>}
          {activeTab === 0 ? <Button mb={3} variant={'secondaryGray'}>
            Unsubscribe
          </Button> : <Button mb={3}>
            Renew
          </Button>}
        </Modal.Content>
      </Modal>
    </>
  );
};
export default AddOn;
