import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const countries = ["Germany", "Canada", "USA", "India"];

export default function App() {
  return (
    <View style={styles.container}>
		<SelectDropdown

			data={countries}
			onSelect={(selectedItem, index) => {
				console.log(selectedItem, index)
			}}
			buttonTextAfterSelection={(selectedItem, index) => {
				return selectedItem
			}}
			rowTextForSelection={(item, index) => {
				return item
			}}
		/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
