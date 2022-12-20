import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/HomeScreen";
import DetailsScreen from "./src/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: "#3d2a6b",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Stack.Screen
                    name="Type"
                    component={DetailsScreen}
                    // @ts-ignore
                    options={({ route }) => {
                        // @ts-ignore
                        const title: String = route.params?.type;
                        // @ts-ignore
                        const color: String = route.params?.color;
                        return {
                            title: title.toUpperCase(),
                            headerStyle: {
                                backgroundColor: color,
                            },
                            headerTitleStyle: {
                                fontWeight: "bold",
                            },
                        };
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
