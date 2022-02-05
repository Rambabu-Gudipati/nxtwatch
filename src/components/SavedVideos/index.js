import {Link} from 'react-router-dom'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import Header from '../Header'
import nxtWatchContext from '../../Context/nxtWatchContext'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  HomeBgContainer,
  PremiumBanner,
  PremiumLeftContainer,
  PremiumBannerText,
  HomeBottomContainer,
  HomeVideoListContainer,
  HomeLargeRightBottomContainer,
  HomeLargeLeftBottomContainer,
  HomeLargeLeftOptionsContainer,
  HomeLargeLeftOptions,
  OptionsText,
  HomeLargeLeftContactContainer,
  ContactText,
  ContactLogoContainer,
  ContactLogo,
  ContactDescription,
  FailureContainer,
  FailureImg,
  Heading,
  Description,
} from './styledComponent'

const SavedVideos = () => {
  const renderNoSearch = () => (
    <FailureContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <Heading>No saved videos found</Heading>
      <Description>You can save your videos while watching them</Description>
    </FailureContainer>
  )

  const renderSuccessView = () => (
    <nxtWatchContext.Consumer>
      {value => {
        const {savedVideoData} = value
        return (
          <>
            {savedVideoData.length === 0 ? (
              renderNoSearch()
            ) : (
              <HomeVideoListContainer>
                {savedVideoData.map(each => (
                  <TrendingVideoCard key={each.id} videoDetails={each} />
                ))}
              </HomeVideoListContainer>
            )}
          </>
        )
      }}
    </nxtWatchContext.Consumer>
  )

  return (
    <>
      <Header />
      <HomeBgContainer>
        <HomeLargeLeftBottomContainer>
          <HomeLargeLeftOptionsContainer>
            <Link to="/">
              <HomeLargeLeftOptions>
                <AiFillHome size={22} /> <OptionsText>Home</OptionsText>
              </HomeLargeLeftOptions>
            </Link>
            <Link to="/trending">
              <HomeLargeLeftOptions>
                <AiFillFire size={22} />
                <OptionsText>Trending</OptionsText>
              </HomeLargeLeftOptions>
            </Link>
            <Link to="/gaming">
              <HomeLargeLeftOptions>
                <SiYoutubegaming size={22} />
                <OptionsText>Gaming</OptionsText>
              </HomeLargeLeftOptions>
            </Link>
            <Link to="/saved-videos">
              <HomeLargeLeftOptions>
                <MdPlaylistAdd size={22} />
                <OptionsText>Saved videos</OptionsText>
              </HomeLargeLeftOptions>
            </Link>
          </HomeLargeLeftOptionsContainer>
          <HomeLargeLeftContactContainer>
            <ContactText>CONTACT US</ContactText>
            <ContactLogoContainer>
              <ContactLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ContactLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ContactLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactLogoContainer>
            <ContactDescription>
              Enjoy! Now to see your channels and recommendations!
            </ContactDescription>
          </HomeLargeLeftContactContainer>
        </HomeLargeLeftBottomContainer>

        <HomeLargeRightBottomContainer>
          <PremiumBanner>
            <PremiumLeftContainer>
              <AiFillFire size={32} color="#ff0000" />
            </PremiumLeftContainer>
            <PremiumBannerText>Saved Videos</PremiumBannerText>
          </PremiumBanner>
          <HomeBottomContainer>{renderSuccessView()}</HomeBottomContainer>
        </HomeLargeRightBottomContainer>
      </HomeBgContainer>
    </>
  )
}

export default SavedVideos
