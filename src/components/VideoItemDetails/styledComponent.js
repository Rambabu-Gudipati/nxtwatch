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
  background-color: #ebebeb;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  width: 100%;
`
export const PremiumLeftContainer = styled.button`
  height: 60px;
  width: 60px;
  background-color: #cccccc;
  border: none;
  border-radius: 30px;
  margin-right: 15px;
`

export const PremiumBannerText = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #181818;
`

export const HomeBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  background-color: #f1f5f9;
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

export const HomeVideoListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  flex-wrap: wrap;
`

export const HomeLargeRightBottomContainer = styled.div`
  @media (min-width: 768px) {
    min-width: 80%;
    padding: 10px;
    background-color: ${props => props.videoBgColor};
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
    min-height: 100vh;
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

export const VideoDetailsContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin-top: 20px;
`
export const VideoPlayerContainer = styled.div`
  min-height: 400px;
  width: 100%;
`
export const VideoDetailsRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
`
export const VideoName = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.textColor};
  margin-bottom: 10px;
`

export const VideoMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
  }
`

export const VideoSmallDetailsRightBottom = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
  justify-content: flex-start;
  list-style-type: disc;
  @media (min-width: 768px) {
    align-items: flex-end;
    margin: 0px;
  }
`
export const VideoDetailsListName = styled.p`
  display: flex;
  font-size: 16px;
  font-weight: 400;
  margin-right: 25px;
  color: #616e7c;
`
export const VideoDetailsList = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #616e7c;
  margin-right: 25px;
`

export const VideoLikeSaveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
  }
`
export const LikeSaveBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
`

export const BtnText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #616e7c;
  margin: 0px;
  margin-left: 7px;
`

export const HLine = styled.hr`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const ChannelDetailsMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const ChannelDetailsLarge = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 20px;
  }
`

export const ChannelNameLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`

export const ChannelLogo = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 15px;
  @media (min-width: 768px) {
    align-self: flex-start;
  }
`
export const ChannelDetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const ChannelName = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.textColor};
  margin: 0px;
  margin-bottom: 10px;
`
export const ChannelSub = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 0px;
  color: #616e7c;
`
export const VideoDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.textColor};
  margin: 0px;
  @media (min-width: 768px) {
    margin-top: 30px;
  }
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
