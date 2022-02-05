import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
`
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 15px 15px 15px 15px #f1f5f9;
  padding: 35px;
  margin: 35px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px;
  max-width: 1110px;
`
export const ImageContainer = styled.div`
  text-align: center;
`
export const Image = styled.img`
  height: 50px;
  width: 180px;
  margin-bottom: 30px;
  text-align: center;
`
export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const UserInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  width: 300px;
  outline: none;
`
export const PasswordInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const CheckBox = styled.input`
  font-size: 15px;
`
export const ShowPassword = styled.label`
  font-size: 'Roboto';
`
export const InputCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`
export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  height: 30px;
  cursor: pointer;
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  color: #ff0000;
`
