import React from 'react';
import { View, Text, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Settings Screen</Text>
			<Button title='Go to home' onPress={() => navigation.navigate('Home')} />
		</View>
	);
};

export default SettingsScreen;
