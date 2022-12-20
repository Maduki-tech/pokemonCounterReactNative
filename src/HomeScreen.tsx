import React from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import types from "../typelist.json";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen({ navigation }: any) {
    return (
        <ImageBackground
            source={require("../assets/background.png")}
            style={styles.image}
        >
            <View style={styles.container}>
                <Text
                    style={{
                        textAlign: "center",
						color: "#fff",
						fontWeight: "bold",
                        fontSize: 30,
                        paddingTop: 20,
                    }}
                >
                    POKEMON TYPE CHART
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 20,
						color: "#fff",
                        paddingTop: 130,
                    }}
                >
                    Select a type to see its strengths and weaknesses
                </Text>

                <View style={{ marginTop: "30%" }}>
                    <SelectDropdown
                        data={Object.keys(types)}
                        defaultButtonText="Select a type"
                        onSelect={(selectedItem, index) => {
							// @ts-ignore
							navigation.navigate("Type", { type: selectedItem, color: types[selectedItem].color });
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            return item;
                        }}
                        buttonStyle={styles.buttonStyle}
                        buttonTextStyle={styles.buttonTextStyle}
                        renderDropdownIcon={() => {
                            return (
                                <View style={styles.dropdownIcon}>
                                    <Text style={{ color: "white" }}>▼</Text>
                                </View>
                            );
                        }}
                        dropdownIconPosition="right"
                        rowStyle={styles.rowStyle}
                        rowTextStyle={styles.rowTextStyle}
                        dropdownStyle={styles.dropdown1DropdownStyle}
                    />
                </View>
                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    buttonStyle: {
        // color gradient from blue to white
        backgroundColor: "#db3b3b",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    buttonTextStyle: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
    dropdownIcon: {
        backgroundColor: "#db3b3b",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    rowStyle: {
        backgroundColor: "#db3b3b",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    rowTextStyle: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
    dropdown1DropdownStyle: {
        backgroundColor: "#db3b3b",
        borderRadius: 8,
    },
});
