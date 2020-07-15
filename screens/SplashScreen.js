import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SplashScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={require('../assets/Chinedu-favicon.png')} style={styles.logo} resizeMode='stretch' />
			</View>
			<View style={styles.footer}>
				<Text style={styles.title}>Stay connected with everyone!</Text>
				<Text style={styles.text}>Sign in with your Account</Text>
				<View style={styles.button}>
					<TouchableOpacity onPress={() => {}} style={{ backgroundColor: '#4C035D', borderRadius: 30 }}>
						<Text
							style={{
								paddingVertical: 10,
								paddingHorizontal: 15,
								alignSelf: 'center',
								justifyContent: 'center',
								color: '#fff',
								fontSize: 20,
								fontWeight: 'bold'
							}}
						>
							Get Started
							<MaterialIcons name='navigate-next' color='#fff' size={20} />
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#4C035D'
	},
	header: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	footer: {
		flex: 1,
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingVertical: 50,
		paddingHorizontal: 30
	},
	logo: {
		width: height_logo,
		height: height_logo,
		backgroundColor: 'white',
		borderRadius: 150
	},
	title: {
		color: '#05375a',
		fontSize: 30,
		fontWeight: 'bold'
	},
	text: {
		color: 'grey',
		marginTop: 5
	},
	button: {
		alignItems: 'flex-end',
		marginTop: 30
	},
	signIn: {
		width: 150,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
		flesDirection: 'row'
	},
	textSign: {
		color: 'white',
		fontWeight: 'bold'
	}
});

export default SplashScreen;
