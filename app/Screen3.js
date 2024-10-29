import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView, CheckBox } from "react-native";
import { useState, useEffect } from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Screen3({ navigation, route }) {
    var [name, setName] = useState("");
    var [newJob, setNewJob] = useState("");

    useEffect(() => {
        setName(route.params.name)
    }, [route.params.name])
    return (
        <View style={styles.container}>
            <View style={styles.viewAvatar}>


                <Image
                    source={require("../assets/images/Avatar.png")}
                    resizeMode="contain"
                    style={{ height: 60, width: 60, marginRight: 100 }}
                ></Image>

                <View>
                    <Text style={styles.viewTextAvatar}>
                        Hi {name}
                    </Text>
                    <Text style={{ marginLeft: -80, marginTop: -5, fontSize: 16, fontWeight: 700, color: "grey" }}>
                        Have agrate day a head
                    </Text>


                </View>
                <Pressable style={{ marginLeft: 60 }} onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="arrow-back" size={25} />
                </Pressable>
            </View>

            <View style={{ marginTop: 30, marginBottom: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 30 }}>ADD YOUR JOB</Text>
            </View>
            <View style={styles.textInput}>
                <MaterialIcons name="list-alt" size={25} color='#52fc4c' style={{ marginLeft: 10, marginRight: 15 }} />
                <TextInput placeholder="input your job"
                    value={newJob}
                    onChangeText={setNewJob} />
            </View>

            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.containerButton}
                    onPress={() => {
                        navigation.navigate('Trang Chủ', { name, newJob });
                    }}
                >
                    <Text style={{ color: 'white' }}>FINISH</Text>
                    <AntDesign name="arrowright" size={15} style={{ color: 'white' }} />
                </TouchableOpacity>
            </View>

            <View style={styles.header}>
                <Image source={require("../assets/images/PenNote.png")} style={{ height: 200, width: 200 }} resizeMode="contain" />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        flexDirection: "column",
    },
    viewAvatar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 100,
        marginTop: 10
    },
    viewTextAvatar: {
        width: 101,
        height: 30,
        marginLeft: -80,
        fontFamily: "Epilogue",
        fontSize: 24,
        fontWeight: 700,
    },
    textInput: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: 'gray',
        height: 40,
        width: 350,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20

    },
    button: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 30
    },
    containerButton: {
        height: 40,
        width: 150,
        backgroundColor: '#74e8e8',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    header: {
        marginTop: 70
    },
})

