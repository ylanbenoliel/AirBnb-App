import styled from 'styled-components'

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #F5F5F5
`

const Logo = styled.Image`
  height: 30%;
  marginBottom: 40px;
`

const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  backgroundColor: #FFF; 
  alignSelf: stretch; 
  marginBottom: 15px; 
  marginHorizontal: 20px; 
  fontSize: 16px; 
`

const ErrorMessage = styled.TouchableHighlight`
  padding: 20px;
  borderRadius: 5px;
  backgroundColor: #FC6663;
  alignSelf: stretch;
  margin: 15px;
  marginHorizontal: 20px;
`

const ButtonText = styled.Text`
  color: #FFF;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`
const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
  marginTop: 20px;
`

const SignUpLinkText = styled.Text`
  color: #999;
  fontWeight: bold;
  fontSize: 16px;
  fontAlign: center;
`

export { Container, Logo, Input, ErrorMessage, ButtonText, SignUpLink, SignUpLinkText }