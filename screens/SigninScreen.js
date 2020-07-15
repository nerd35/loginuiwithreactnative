import React from 'react';
import { View, Text, Button } from 'react-native';

const SigninScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Signin Screen</Text>
			<Button title='Go to home' onPress={() => navigation.navigate('Home')} />
		</View>
	);
};

export default SigninScreen;
