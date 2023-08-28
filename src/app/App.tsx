import * as React from 'react';
import {LogBox} from 'react-native';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
// NativeBase
// Theme
import theme from '../themes/theme';

// import theme from '../themes/theme';
// Pages
import Cheatsheet from '../assets/containers/pages/Cheatsheet';
import Icons from '../assets/containers/pages/Icons';
import Reload from '../containers/reload/Reload';
import OTP from '../containers/reload/Otp';
import Me from '../containers/home/Me';
import Home from '../containers/home/home';
import OrderSummary from '../containers/reload/OrderSummary';
import Checkout from '../containers/reload/Checkout';
import AddOn from '../containers/add-on/AddOn';
// Icons
import {Avatar, Box, NativeBaseProvider, Pressable, Spacer} from 'native-base';

import ArrowLeft from '../assets/icons/Arrowleft';

import {History} from '../assets/icons';
import Internet from '../containers/add-on/Internet';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

LogBox.ignoreLogs([
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
]);

function HomeScreen() {
  return (
    <Tab.Navigator
      tabBar={props => {
        return (
          <>
            <BottomTabBar {...props} insets={{...props.insets, bottom: 0}} />
            <Box h={props.insets.bottom} bg="white" />
          </>
        );
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconStyle = {
            width: focused ? 30 : 24,
            height: focused ? 30 : 24,
          };

          if (route.name === 'Explore') return;
          return <History color={color} {...iconStyle} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#1561E8',
        tabBarInactiveTintColor: 'gray',
        tabBarBadgeStyle: {
          top: 5,
        },
        tabBarLabelStyle: {
          marginBottom: 10,
          fontSize: 13,
        },
        tabBarIconStyle: {
          top: 5,
        },
        tabBarStyle: {
          height: 75,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Shop" component={Me} />
      <Tab.Screen
        name="Explore"
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon(props) {
            return (
              <Avatar variant={'middle'} mb={5}>
                <History width={55} height={55} color="#1561E8" />
              </Avatar>
            );
          },
        }}
        component={Me}
      />
      <Tab.Screen name="Notification" component={Me} />
      <Tab.Screen name="Me" options={{tabBarBadge: 3}} component={Me} />
    </Tab.Navigator>
  );
}

const backArrow = (navigation) => {
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <ArrowLeft color="#FFF" />
    </Pressable>
  );
};

export default function App() {
  return (
    <NativeBaseProvider isSSR={false} theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              color: '#FFF',
            },
            headerStyle: {
              backgroundColor: '#001870',
            },
          }}>
          <Stack.Screen name="Cheatsheet" component={Cheatsheet} />
          <Stack.Screen name="Icons" component={Icons} />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen
            name="Reload"
            component={Reload}
            options={({navigation, route}) => ({
              headerLeft: ({canGoBack}) => canGoBack && backArrow(navigation),
            })}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={({navigation, route}) => ({
              headerLeft: ({canGoBack}) => canGoBack && backArrow(navigation),
            })}
          />
          <Stack.Screen
            name="Order Summary"
            component={OrderSummary}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddOn"
            component={AddOn}
            options={({navigation, route}) => ({
              headerLeft: ({canGoBack}) => canGoBack && backArrow(navigation),
            })}
          />
            <Stack.Screen
            name="Internet"
            component={Internet}
            options={({navigation, route}) => ({
              headerLeft: ({canGoBack}) => canGoBack && backArrow(navigation),
            })}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
