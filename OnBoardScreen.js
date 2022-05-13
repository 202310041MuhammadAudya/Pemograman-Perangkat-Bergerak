import React from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../consts/colors'
import LogoIbik from "../../assets/logo-ibik-white.jpeg";

const OnBoardScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={LogoIbik} style={styles.imgLogo} />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.h1}>Portal Student</Text>
                <Text style={styles.h3}>Institut Bisnis dan Informatika Bogor</Text>
            </View>
            <View style={styles.containerBtn}>
                <TouchableOpacity activeOpacity={0.8} onPress={(e)=>navigation.navigate('Main')} >
                    <View style={styles.btn} >
                        <Text style={styles.btnTitle}>Get Started</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', backgroundColor: colors.purple },
    containerLogo: { flex: 2, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 40 },
    imgLogo: {
        resizeMode: 'contain',
        borderRadius: 10,
        width: "100%",
        height: 150
    },
    containerText: { flex: 1, alignItems: "center" },
    h1: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.white
    },
    h3: {
        fontSize: 18,
        color: colors.white
    },
    containerBtn: { flex: 3, justifyContent: 'flex-end', paddingHorizontal:20 },
    btn:{
        backgroundColor:colors.primary,
        height:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    btnTitle:{
        color:colors.white,
        fontWeight:'bold',
        fontSize:18
    }
    
})

export default OnBoardScreen;