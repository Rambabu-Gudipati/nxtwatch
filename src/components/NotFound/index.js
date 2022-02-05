import {Link} from 'react-router-dom'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import Header from '../Header'
import nxtWatchContext from '../../Context/nxtWatchContext'

import {
  HomeBgContainer,
  HomeLargeLeftBottomContainer,
  HomeLargeLeftOptionsContainer,
  HomeLargeLeftOptions,
  OptionsText,
  HomeLargeLeftContactContainer,
  ContactText,
  ContactLogoContainer,
  ContactLogo,
  ContactDescription,
  Heading,
  Description,
  NotFoundContainer,
  ImageElement,
} from './styledComponents'

const NotFound = () => (
  <nxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const bgColor = isDark ? '#231f20' : '#f9f9f9'

      const textColor = isDark ? '#f9f9f9' : '#181818'
      const notfoundImage = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <HomeBgContainer bgColor={bgColor}>
            <HomeLargeLeftBottomContainer>
              <HomeLargeLeftOptionsContainer>
                <Link to="/">
                  <HomeLargeLeftOptions>
                    <AiFillHome size={22} color={textColor} />
                    <OptionsText textColor={textColor}>Home</OptionsText>
                  </HomeLargeLeftOptions>
                </Link>
                <Link to="/trending">
                  <HomeLargeLeftOptions>
                    <AiFillFire size={22} color={textColor} />
                    <OptionsText textColor={textColor}>Trending</OptionsText>
                  </HomeLargeLeftOptions>
                </Link>
                <Link to="/gaming">
                  <HomeLargeLeftOptions>
                    <SiYoutubegaming size={22} color={textColor} />
                    <OptionsText textColor={textColor}>Gaming</OptionsText>
                  </HomeLargeLeftOptions>
                </Link>
                <Link to="/saved-videos">
                  <HomeLargeLeftOptions>
                    <MdPlaylistAdd size={22} color={textColor} />
                    <OptionsText textColor={textColor}>
                      Saved videos
                    </OptionsText>
                  </HomeLargeLeftOptions>
                </Link>
              </HomeLargeLeftOptionsContainer>
              <HomeLargeLeftContactContainer>
                <ContactText textColor={textColor}>CONTACT US</ContactText>
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
                <ContactDescription textColor={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactDescription>
              </HomeLargeLeftContactContainer>
            </HomeLargeLeftBottomContainer>
            <NotFoundContainer>
              <ImageElement src={notfoundImage} alt="not found" />
              <Heading textColor={textColor}>Page Not Found</Heading>
              <Description>
                we are sorry, the page you requested could not be found
              </Description>
            </NotFoundContainer>
          </HomeBgContainer>
        </>
      )
    }}
  </nxtWatchContext.Consumer>
)

export default NotFound
