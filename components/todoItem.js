import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TodoItem = ({ item, pressHandler }) => {
	return (
		<View style={styles.item}>
			<Text style={styles.itemText}>{item.text}</Text>
			<TouchableOpacity onPress={() => pressHandler(item.key)}>
				<MaterialIcons name="delete" size={20} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		padding: 16,
		marginTop: 14,
		borderColor: '#bbb',
		borderWidth: 1,
		borderStyle: 'dashed',
		borderRadius: 10,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	itemText: {
		marginLeft: 10,
	},
});

export default TodoItem;
