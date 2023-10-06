import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
	FlatList,
	TouchableOpacity,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

// export default function App() {
// 	const [name, setName] = useState('Bao');

// 	const [people, setPeople] = useState([
// 		{ name: 'John', key: '1' },
// 		{ name: 'John2', key: '2' },
// 		{ name: 'John3', key: '3' },
// 		{ name: 'John4', key: '4' },
// 		{ name: 'John5', key: '5' },
// 		{ name: 'John7', key: '6' },
// 		{ name: 'John7', key: '7' },
// 	]);
// 	const pressHandler = (id) => {
// 		console.log(id);
// 		setPeople((prev) => prev.filter((person) => person.key != id));
// 	};
// 	return (
// 		<View style={styles.container}>
// 			<FlatList
// 				numColumns={2}
// 				keyExtractor={(item) => item.key}
// 				data={people}
// 				renderItem={({ item }) => (
// 					<TouchableOpacity onPress={() => pressHandler(item.key)}>
// 						<Text style={styles.item}>{item.name}</Text>
// 					</TouchableOpacity>
// 				)}
// 			/>
// 		</View>
// 	);
// }

export default function App() {
	const [todos, setTodos] = useState([
		{ text: 'Buy Coffee', key: '1' },
		{ text: 'Play on the phone', key: '2' },
		{ text: 'Cooking for Hau', key: '3' },
	]);

	const pressHandler = (key) => {
		setTodos((prev) => prev.filter((item) => item.key != key));
	};

	const handleAdd = (text) => {
		if (text.length > 3) {
			setTodos((prev) => {
				return [...prev, { text: text, key: Math.random().toString() }];
			});
		} else {
			Alert.alert('OOPS!', 'Todo must be over 3 chars long', [
				{ text: 'Understood', onPress: () => console.log('Alert closed') },
				{ text: 'Close' },
			]);
		}
	};
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
				console.log('Dismiss Keyboard');
			}}
		>
			<View style={styles.container}>
				{/* header */}
				<Header />
				<View style={styles.content}>
					{/* to do form */}
					<AddTodo handleAdd={handleAdd} />
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler} />}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	input: {
		padding: 8,
		width: 200,
		borderColor: '#ccc',
		borderWidth: 1,
	},
	item: {
		marginTop: 20,
		padding: 40,
		backgroundColor: 'pink',
		fontSize: 18,
		marginHorizontal: 10,
		width: 150,
	},
	content: {
		padding: 30,
		paddingHorizontal: 40,

		flex: 1,
	},
	list: {
		marginTop: 20,
		flex: 1,
	},
});
