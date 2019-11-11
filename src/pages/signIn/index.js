import React, { useState } from 'react';
import { View, Text, StatusBar, AsyncStorage } from 'react-native';
import { StackActions, NavigationAction } from 'react-navigation'

import api from '../../services/api'

import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText
} from './styles';

export default function signIn(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleEmailChange(email) {
    setEmail(email)
  }
  function handlePasswordChange(password) {
    setPassword(password)
  }

  function handleSignInPress() {

  }

  function handleCreateAccountPress() {

  }

  return (
    <Container>
      <StatusBar hidden />
      <Logo
        source={require('../../images/airbnb_logo.png')} resizeMode="contain" />
      <Input
        placeholder="Endereço de e-mail"
        value={email}
        onChangeText={handleEmailChange}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={handlePasswordChange}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {error.length !== 0 && <ErrorMessage>{error}</ErrorMessage>}
      <Button onPress={() => handleSignInPress}>
        <ButtonText>Entrar</ButtonText>
      </Button>
      <SignUpLink onPress={() => handleCreateAccountPress}>
        <SignUpLinkText>Criar conta grátis</SignUpLinkText>
      </SignUpLink>
    </Container>
  )
}
