import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

import axios from 'axios';
import ContactList from './src/components/ContactList';
import Header from './src/components/Header';


export default class App extends Component<undefined, { contatos: any[]; }> {

  constructor(props: any) {
    super(props);
    this.state = {
      contatos: []
    } 
  }

  componentDidMount(): void {
    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then( res => {
        const { results } = res.data;
        console.warn(results);
        this.setState({
          contatos: results,
        })
      });    
  }

  renderList() {
    return this.state.contatos.map(contato => {
      const { first } = contato.name;
      return <Text key={ first } >{ first }</Text>
    });
  };

  render() {
    return (
      <SafeAreaView>
        <Header title="Contatos" />
        <ContactList contatos={this.state.contatos} />
      </SafeAreaView>
    );  
  }  
}


