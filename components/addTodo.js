import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';

export default function AddTodo({ handleAdd }) {
	const [text, setText] = useState('');

	const changeHandler = (val) => {
		setText(val);
	};

	return (
		<View>
			<TextInput style={styles.input} placeholder="New todo ..." onChangeText={changeHandler} />

			<Button title="Add" color="coral" onPress={() => handleAdd(text)} />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		marginBottom: 20,
		paddingHorizontal: 8,
		paddingVertical: 5,
		borderBottomWidth: 1,
		borderColor: '#ccc',
	},
});
