import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  const [username, setUsername] = userState('')
  const [email, setEmail] = userState('')
  const [password, setPassword] = userState('')

  function handleSingnIn(){
    if(username === '' || email === '' || password === ''){
     alert("Por favor, preencha todos os campos obrigatórios.")
     return;
    }

    const data = {
      username,
      email,
      password,
    }

    console.log(data);
  }

  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Bem- Vindo(a)</Text>
      
      <TextInput
       style={styles.input}
       onChangeText={setUsername}
       voLue={username}
       placeholder='Seu username'
      />

      <TextInput
       style={styles.input}
       onChangeText={setEmail}
       voLue={email}
       placeholder='Digite seu email'
      />

      <TextInput
       style={styles.input}
       onChangeText={setPassword}
       voLue={password}
       placeholder='Sua senha'
       secureTextEntry={true}
      />

      <TouchableOpacity style= {styles.button} onPress={handleSingnIn}>
        <Text style={styles.bbuttonText}>Acessar</Text>        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3FF',
    paddingHorizontal: 18
  },
  title:{
   fontSize: 34,
   marginButtom: 34,
   color: '#121212',
   fontWeight: 'bold'
  },
  input:{
    width: '100%',
    height: 40,
  },
  logo:{
    marginBotton: 60
  }
});
