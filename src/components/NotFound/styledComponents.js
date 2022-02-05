import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const PremiumBanner = styled.div`
  display: flex;
  background-color: ${props => props.upperBgColor};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  width: 100%;
`
export const PremiumLeftContainer = styled.button`
  height: 60px;
  width: 60px;
  background-color: ${props => props.bgColor};
  border: none;
  border-radius: 30px;
  margin-right: 15px;
`

export const PremiumBannerText = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${props => props.textColor};
`

export const HomeBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  background-color: ${props => props.bgMainColor};
  @media (min-width: 768px) {
    padding: 30px;
  }
`
export const HomeSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px #94a3b8 solid;
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: 576px) {
    width: 70%;
  }
`

export const HomeLargeRightBottomContainer = styled.div`
  @media (min-width: 768px) {
    min-width: 80%;
  }
`

export const HomeLargeLeftBottomContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 250px;
    height: 90vh;
  }
`
export const HomeLargeLeftOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`
export const HomeLargeLeftOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: #181818;
  padding-left: 15px;
`
export const OptionsText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.textColor};
  margin-left: 15px;
`

export const HomeLargeLeftContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 15px;
`
export const ContactText = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.textColor};
`

export const ContactLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const ContactLogo = styled.img`
  margin-right: 15px;
  width: 25px;
  height: 25px;
`

export const ContactDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.textColor};
`

export const Heading = styled.h1`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
  font-family: 'Roboto';
  color: ${props => props.textColor};
`
export const Description = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #424242;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
`
export const ImageElement = styled.img`
  height: 450px;
  width: 750px; ;
`
