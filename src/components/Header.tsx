import React from "react";
import { StyleSheet, Text, View } from "react-native";

/*
Quando não for contralar nenhum estado (state) a melhor abordagem é utilizar um componente funcional (Function Component).
Caso seja realizado um controle de estado (state) a melhor abordagem seria uma componente de classe (Class Component).
*/
const Header = (props: any) => (
    <View style={style.container}>
        <Text style={style.title}>{props.title}</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        backgroundColor: '#6ca2f7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        color: '#fff',
    }
});

export default Header;