import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image,TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebea',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 30,
    color: '#20232a',
    padding: 10,
    alignSelf: 'left',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#d3d6d7',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'start',
  },
  icon: {
    width: 150,
    height: 150,
  },
  input: {
    height: 60,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#d3d6d7',
  },
  button: {
    width: '60%',
    height: 60,
    backgroundColor: "#5dbb5d",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TelaLogin = () => {
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={{
          uri: 'https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png',
        }}
      />
      
      <Text style={styles.text}> Email </Text>
      <TextInput 
        style={styles.input}
        placeholder="Digite seu email"
      />
      <Text style={styles.text}> Senha </Text>
      <TextInput 
        style={styles.input}
        placeholder="Digite sua senha"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 20, color: 'white'}}> Login </Text>
      </TouchableOpacity>
      {/*<Button
        style={styles.button}
        title="Logar"
        color="#008000"
        accesbilityLabel="Botão de Login"
      />*/}
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 20, color: 'white'}}> Cadastrar </Text>
      </TouchableOpacity>
      {/*<Button
        style={styles.button}
        title="Cadastrar"
        color="#008000"
        accecibilityLabel="Botão de Cadastro"
      />*/}
      <Text style={{fontsize: 15, color: 'blue'}}> Esqueci minha senha </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const TelaCadastro = () => {
  return(
  <View style={styles.container}>

    <Text style={styles.title}> Cadastrar </Text>

    <Text style={styles.text}> Nome </Text>
    <TextInput
      style={styles.input}
      placeholder="Digite seu nome"
    />

    <Text style={styles.text}> Email </Text>
    <TextInput
      style={styles.input}
      placeholder="Digite seu email"
    />

    <Text style={styles.text}> Senha </Text>
    <TextInput
      style={styles.input}
      placeholder="Digite sua senha"
    />

    <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 20, color: 'white'}}> Cadastrar </Text>
      </TouchableOpacity>

    {/*<Button
      style={styles.button}
      title="Cadastrar"
      color="#008000"
      accessibilityLabel="Botão de Cadastro"
    />*/}
  </View>
)};

const TelaEsqueciSenha = () => {
  return(
    <View style={styles.container}>
      
    <Text style={styles.title}> Esqueci minha senha </Text>

    <Text style={styles.text}> Email </Text>
    <TextInput
      style={styles.input}
      placeholder="Insira seu email"
    />

    <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 20, color: 'white'}}> Enviar </Text>
      </TouchableOpacity>
      {/*<Button
        style={styles.button}
        title="Enviar"
        color="#008000"
        accecibilityLabel="Botão de Envio"
      />*/}
    </View>
)};

export default TelaLogin;