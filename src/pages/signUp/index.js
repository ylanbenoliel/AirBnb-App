import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'
import api from '../../services/api'
import {
  Container,
  Logo,
  SuccessMessage,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignInLink,
  SignInLinkText,
} from './styles';

export default function signUp(props) {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  function handleUsernameChange(username) {
    setUsername(username)
  }

  function handleEmailChange(email) {
    setEmail(email)
  }

  function handlePasswordChange(password) {
    setPassword(password)
  }

  function handleBackToLoginPress() {
    props.navigation.goBack()
  }

  async function handleSignUpPress() {
    if (email.length === 0 || password.length === 0) {
      return setError('Preencha todos os campos para continuar!')
    }
    try {
      await api.post('/users', {
        username,
        email,
        password
      })
      setError('')
      setSuccess('Conta criada com sucesso, redirecionando para o login!')
      setTimeout(() => {
        goToLogin()
      }, 2500);

    } catch (err) {
      setError('Houve um problema com o cadastro, verifique os dados preenchidos!')
    }
  }

  function goToLogin() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'SignIn' })
      ]
    })
    props.navigation.dispatch(resetAction)
  }

  return (
    <Container>
      <StatusBar hidden />
      <Logo
        source={require('../../images/airbnb_logo.png')}
        resizeMode='contain'
      />
      {success.length !== 0 && <SuccessMessage>{success}</SuccessMessage>}
      <Input
        placeholder='Nome de usuário'
        value={username}
        onChangeText={handleUsernameChange}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Input
        placeholder='Endereço de email'
        value={email}
        onChangeText={handleEmailChange}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Input
        placeholder='Senha'
        value={password}
        onChangeText={handlePasswordChange}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
      />
      {error.length !== 0 && <ErrorMessage>{error}</ErrorMessage>}
      <Button onPress={handleSignUpPress}>
        <ButtonText>Criar conta</ButtonText>
      </Button>
      <SignInLink onPress={handleBackToLoginPress}>
        <SignInLinkText>Voltar ao login</SignInLinkText>
      </SignInLink>
    </Container>
  );
}
