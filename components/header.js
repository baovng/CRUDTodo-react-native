import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>Todo list</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 100,
		paddingTop: 20,
		backgroundColor: 'coral',

		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#ffe7d6',
		textTransform: 'uppercase',
	},
});
