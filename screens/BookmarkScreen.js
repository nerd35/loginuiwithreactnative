import React from 'react';
import { View, Text, Button } from 'react-native';

const BookmarkScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Bookmark Screen</Text>
			<Button title='Go to home' onPress={() => navigation.navigate('Home')} />
		</View>
	);
};

export default BookmarkScreen;
