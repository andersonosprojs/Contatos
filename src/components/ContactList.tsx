import React from 'react';
import { StyleSheet, View } from 'react-native';
import ContactListItem from './ContactListItem';

const ContactList = (props: any) => {
    const { contatos } = props;
    const lista = contatos.map((contato: any) => {
        return (
            <ContactListItem key={ contato.name.first }  contato={contato} />
        );
    });

    return (
        <View style={styles.container}>
            { lista }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff',
    },
})

export default ContactList;