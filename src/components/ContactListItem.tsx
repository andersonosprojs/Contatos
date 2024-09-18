import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import capitalizeFirstLetter from "../util/capitalizeFirstLetter";

const ContactListItem = (props: any) => {
    const { contato } = props;    
    const { title, first, last } = contato.name;
    const { thumbnail } = contato.picture;

    return (
        <View style={styles.line} >
            <Image 
                style={styles.avatar}
                source={{ uri: thumbnail }}
            />
            <Text style={styles.lineText}>{ `${
                capitalizeFirstLetter(title)
                } ${
                    capitalizeFirstLetter(first)
                } ${
                    capitalizeFirstLetter(last)
                }` }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        flexDirection: 'row',
        alignItems: 'center',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50,
    }
});

export default ContactListItem;