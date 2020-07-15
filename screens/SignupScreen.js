import React from 'react';
import { View, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Signup Screen</Text>
			<Button title='Go to home' onPress={() => navigation.navigate('Home')} />
		</View>
	);
};

export default SignupScreen;
