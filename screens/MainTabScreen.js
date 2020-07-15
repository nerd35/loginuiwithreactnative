import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
	<Tab.Navigator initialRouteName='Home' activeColor='#fff' style={{ backgroundColor: 'tomato' }}>
		<Tab.Screen
			name='Home'
			component={HomeStackScreen}
			options={{
				tabBarLabel: 'Home',
				tabBarColor: '#40DDE7',
				tabBarIcon: ({ color }) => <MaterialCommunityIcons name='home' color={color} size={26} />
			}}
		/>
		<Tab.Screen
			name='Details'
			component={DetailsStackScreen}
			options={{
				tabBarLabel: 'Details',
				tabBarColor: '#1f65ff',
				tabBarIcon: ({ color }) => <MaterialCommunityIcons name='bell' color={color} size={26} />
			}}
		/>
		<Tab.Screen
			name='Profile'
			component={ProfileStackScreen}
			options={{
				tabBarLabel: 'Profile',
				tabBarColor: '#694fad',
				tabBarIcon: ({ color }) => <MaterialCommunityIcons name='account' color={color} size={26} />
			}}
		/>
		<Tab.Screen
			name='Explore'
			component={ExploreStackScreen}
			options={{
				tabBarLabel: 'Explore',
				tabBarColor: '#d02860',
				tabBarIcon: ({ color }) => <MaterialCommunityIcons name='album' color={color} size={26} />
			}}
		/>
	</Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
	<HomeStack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: '#40DDE7'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}}
	>
		<HomeStack.Screen
			name='Home'
			component={HomeScreen}
			options={{
				headerRight: () => (
					<Ionicons
						name='ios-menu'
						size={25}
						backgroundColor='#40DDE7'
						color='#fff'
						style={{ paddingHorizontal: 20 }}
						onPress={() => navigation.openDrawer()}
					/>
				)
			}}
		/>
	</HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
	<DetailsStack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: '#1f65ff'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}}
	>
		<DetailsStack.Screen
			name='Details'
			component={DetailsScreen}
			options={{
				headerRight: () => (
					<Ionicons
						name='ios-menu'
						size={25}
						backgroundColor='#1f65ff'
						color='#fff'
						style={{ paddingHorizontal: 20 }}
						onPress={() => navigation.openDrawer()}
					/>
				)
			}}
		/>
	</DetailsStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
	<ProfileStack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: '#694fad'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}}
	>
		<ProfileStack.Screen
			name='Profile'
			component={ProfileScreen}
			options={{
				headerRight: () => (
					<Ionicons
						name='ios-menu'
						size={25}
						backgroundColor='#694fad'
						color='#fff'
						style={{ paddingHorizontal: 20 }}
						onPress={() => navigation.openDrawer()}
					/>
				)
			}}
		/>
	</ProfileStack.Navigator>
);

const ExploreStackScreen = ({ navigation }) => (
	<ExploreStack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: '#d02860'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}}
	>
		<ExploreStack.Screen
			name='Explore'
			component={ExploreScreen}
			options={{
				headerRight: () => (
					<Ionicons
						name='ios-menu'
						size={25}
						backgroundColor='#d02860'
						color='#fff'
						style={{ paddingHorizontal: 20 }}
						onPress={() => navigation.openDrawer()}
					/>
				)
			}}
		/>
	</ExploreStack.Navigator>
);
