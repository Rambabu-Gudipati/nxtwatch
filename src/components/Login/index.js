import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  InputLabel,
  UserInputField,
  PasswordInputField,
  MainContainer,
  InnerContainer,
  Image,
  FormContainer,
  InputContainer,
  CheckBox,
  ShowPassword,
  InputCheckBox,
  ImageContainer,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isChecked: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChecked = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderShowPassword = () => {
    const {isChecked} = this.state
    return (
      <>
        <CheckBox
          type="checkbox"
          id="showPassword"
          onChange={this.onChecked}
          checked={isChecked}
        />
        <ShowPassword htmlFor="showPassword">Show Password</ShowPassword>
      </>
    )
  }

  renderPasswordField = () => {
    const {password, isChecked} = this.state
    const passwordImage = isChecked ? 'text' : 'password'

    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <PasswordInputField
          type={passwordImage}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UserInputField
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <MainContainer>
        <InnerContainer>
          <FormContainer onSubmit={this.submitForm}>
            <ImageContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                className="login-website-logo-desktop-img"
                alt="website logo"
              />
            </ImageContainer>
            <InputContainer>{this.renderUsernameField()}</InputContainer>
            <InputContainer>{this.renderPasswordField()}</InputContainer>
            <InputCheckBox>{this.renderShowPassword()}</InputCheckBox>

            <LoginButton type="submit">Login</LoginButton>
            {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
          </FormContainer>
        </InnerContainer>
      </MainContainer>
    )
  }
}

export default Login
