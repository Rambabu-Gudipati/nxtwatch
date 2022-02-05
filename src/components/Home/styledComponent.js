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
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px;
  width: 100%;
`
export const PremiumLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
`
export const Logo = styled.img`
  margin-bottom: 15px;
  width: 150px;
  height: 50px;
`
export const PremiumBannerText = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #181818;
`
export const PremiumCloseBtn = styled.button`
  background-color: transparent;
  border: none;
`
export const PremiumBannerBtn = styled.button`
  font-size: 20px;
  font-weight: 500;
  color: #231f20;
  background-color: transparent;
  height: 50px;
  border: 1px solid #231f20;
  padding: 10px;
`
export const HomeBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  background-color: ${props => props.bgMainColor};
  padding: 30px;
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
export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  padding-left: 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #606060;
  outline: none;
  background-color: transparent;
  height: 40px;
`
export const SearchBtn = styled.button`
  font-size: 20px;
  height: 40px;
  width: 70px;
  font-weight: 500;
  color: #231f20;
  background-color: transparent;
  border: none;
  border-left: 1px #94a3b8 solid;
  padding: 10px;
`

export const HomeVideoListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
  flex-wrap: wrap;
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
  text-decoration: none;
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
  color: ${props => props.textColor};
  font-weight: 600;
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
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  color: #3b82f6;
  width: 100%;
  min-height: 70vh;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  color: #3b82f6;
  width: 100%;
  min-height: 90vh;
`
export const FailureImg = styled.img`
  margin-right: 15px;
  width: 50%;
  margin-bottom: 10px;
`

export const Heading = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.textColor};
  margin-bottom: 10px;
`
export const Description = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
  color: ${props => props.textColor};
`

export const RetryBtn = styled.button`
  font-size: 20px;
  height: 40px;
  font-size: 16px;
  width: 70px;
  font-weight: 500;
  color: #ffffff;
  background-color: #00306e;
  border: none;
  border-radius: 5px;
  padding: 10px;
`
