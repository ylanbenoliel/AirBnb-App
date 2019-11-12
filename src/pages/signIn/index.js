import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'

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

  async function handleSignInPress() {
    if (email.length === 0 || password.length === 0) {
      setError('Preencha usuário e senha para continuar!');
    } else {
      try {
        const response = await api.post('/sessions', {
          email: email,
          password: password,
        });

        await AsyncStorage.setItem('@AirBnbApp:token', response.data.token);

        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Main' }),
          ],
        });
        props.navigation.dispatch(resetAction);
      } catch (_err) {
        setError('Houve um problema com o login, verifique suas credenciais!');
      }
    }
  };

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
      <Button onPress={ handleSignInPress}>
        <ButtonText>Entrar</ButtonText>
      </Button>
      <SignUpLink onPress={() => props.navigation.navigate('SignUp')}>
        <SignUpLinkText>Criar conta grátis</SignUpLinkText>
      </SignUpLink>
    </Container>
  )
}
