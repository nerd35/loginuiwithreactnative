import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';

import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';

import RootStackScreen from './screens/RootStackScreen';

const Drawer = createDrawerNavigator();

function App() {
	return (
		<NavigationContainer>
			<RootStackScreen />
			{/*<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
				<Drawer.Screen name='HomeDrawer' component={MainTabScreen} />
				<Drawer.Screen name='SupportScreen' component={SupportScreen} />
				<Drawer.Screen name='SettingsScreen' component={SettingsScreen} />
	<Drawer.Screen name='BookmarkScreen' component={BookmarkScreen} /> 
			</Drawer.Navigator> */}
		</NavigationContainer>
	);
}

export default App;
