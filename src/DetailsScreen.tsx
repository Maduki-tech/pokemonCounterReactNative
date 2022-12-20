import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import types from "../typelist.json";
import { LinearGradient } from "expo-linear-gradient";

export default function DetailsScreen({ navigation, route }: any) {
    const [weakness, setWeakness] = useState<String[]>();
    console.log(route.params.color);
    const [strong, setStrong] = useState<String[]>();
    const type = route.params.type as String;
    useEffect(() => {
        Object.entries(types).find(([key, value]) => {
            if (key === type) {
                setStrong(value.strongAgainst);
                setWeakness(value.weakAgainst);
            }
        });
    }, []);
    return (
        <View style={styles.container}>
            {/* <View */}
            {/*     style={{ */}
            {/*         height: "40%", */}
            {/*         display: "flex", */}
            {/*         justifyContent: "flex-end", */}
            {/*         paddingBottom: 50, */}
            {/* 					 */}
            {/*     }} */}
            {/* > */}
            <LinearGradient
                colors={[route.params.color, "#fff"]}
                style={{
                    height: "40%",
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingBottom: 50,
                }}
            >
                <Text style={{ textAlign: "center", fontSize: 30 }}>
                    {type.toUpperCase()}
                </Text>
            </LinearGradient>
            {/* </View> */}
            <View >
                <Text
                    style={{
                        fontSize: 20,
                        backgroundColor: "green",
                        color: "white",
                        textAlign: "center",
                        paddingVertical: 10,
                    }}
                >
                    Good Against
                </Text>
                <FlatList
                    data={strong}
                    style={{ paddingVertical: 10 }}
                    renderItem={({ item }) => (
                        <Text
                            style={{
								color:'white',
                                fontSize: 20,
                                textAlign: "left",
                                paddingHorizontal: 20,
                            }}
                        >
                            {item}
                        </Text>
                    )}
                />
            </View>

            <View>
                <Text
                    style={{
                        fontSize: 20,
                        backgroundColor: "red",
                        color: "white",
                        textAlign: "center",
                        paddingVertical: 10,
                    }}
                >
                    Weak Against
                </Text>
                <FlatList
                    data={weakness}
                    style={{ paddingVertical: 10 }}
                    renderItem={({ item }) => (
                        <Text
                            style={{
                                fontSize: 20,
                                textAlign: "left",
								color: "white",
                                paddingHorizontal: 20,
                            }}
                        >
                            {item}
                        </Text>
                    )}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
		backgroundColor: "#292126",

    },
});
