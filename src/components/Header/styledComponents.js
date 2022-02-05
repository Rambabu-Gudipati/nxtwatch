import styled from 'styled-components'

export const NavbarContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 15px;
  padding-right: 20px;
  padding-left: 20px;
`
export const Logo = styled.img`
  width: 150px;
  height: 30px;
`

export const NavMobileMenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  @media (min-width: 576px) {
    width: 30%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`
export const MenuBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const NavLargeMenuContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
  }
`
export const Profile = styled.img`
  height: 40px;
`
export const LogoutBtn = styled.button`
  background-color: transparent;
  border: 1px solid;
  border-color: ${props => props.btnColor};
  color: ${props => props.btnColor};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 90px;
  border-radius: 5px;
  height: 30px;
`
export const ModalContainer = styled.div`
  flex-grow: 1;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 458px;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`
export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  margin-top: 32px;
  outline: none;
  cursor: pointer;
`

export const HomeLargeLeftOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 70vh;
`
export const HomeLargeLeftOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 15px;
`
export const OptionsText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.textColor};
  margin-left: 15px;
`
export const LogoutContainer = styled.div`
  margin-top: 12px;
  margin-left: 48px;
  margin-bottom: 48px;
  margin-right: 48px;
`
export const LogoutMessage = styled.p`
  font-family: 'Roboto';
  cursor: pointer;
  color: ${props => props.textColor};
`
export const PopBtnContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`
export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  cursor: pointer;
`
