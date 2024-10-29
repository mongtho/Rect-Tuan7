import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Home = ({ navigation }) => {
    const [name, setName] = useState("");

    const handleLogin = () => {
        if (name.trim()) { // Kiểm tra tên không chỉ là khoảng trắng
            navigation.navigate("Trang Chủ", { name: name });
        } else {
            alert("Phải nhập tên hợp lệ"); // Thông báo lỗi rõ ràng hơn
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.containerHead}>
                <View style={styles.header}>
                    <Image source={require("../assets/images/PenNote.png")} style={{ height: 250, width: 250 }} resizeMode="contain" />
                </View>
            </View>

            <View style={styles.containerText}>
                <Text style={styles.textManager}>MANAGER YOUR</Text>
                <Text style={styles.textManager}>TASK</Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.input}>
                    <Feather name="mail" size={15} style={styles.icon} />
                    <TextInput
                        placeholder="Enter your name"
                        onChangeText={(text) => setName(text)}
                        style={{ flex: 1 }} // Thêm style cho TextInput
                    />
                </View>
            </View>

            <View style={styles.button}>
                <TouchableOpacity style={styles.containerButton} onPress={handleLogin}>
                    <Text style={{ color: 'white' }}>GET STARTED</Text>
                    <AntDesign name="arrowright" size={15} style={{ color: 'white' }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerHead: {
        marginTop: 50,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        height: 250,
        width: 250,
    },
    containerText: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    textManager: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'purple'
    },
    input: {
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 1,
        height: 40,
        width: 300,
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 10 // Thêm padding để tạo khoảng cách
    },
    icon: {
        marginRight: 15,

    },
    button: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 30
    },
    containerButton: {
        height: 40,
        width: 150,
        backgroundColor: "#00BDD6",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
});

export default Home;
