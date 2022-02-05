import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {WiDaySunny} from 'react-icons/wi'
import {AiFillHome, AiFillFire} from 'react-icons/ai'

import {IoMdClose} from 'react-icons/io'
import {RiMoonFill} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import nxtWatchContext from '../../Context/nxtWatchContext'

import './index.css'
import {
  NavbarContainer,
  Logo,
  NavMobileMenuContainer,
  MenuBtn,
  NavLargeMenuContainer,
  Profile,
  LogoutBtn,
  ModalContainer,
  CloseButton,
  HomeLargeLeftOptionsContainer,
  HomeLargeLeftOptions,
  OptionsText,
  LogoutContainer,
  LogoutMessage,
  ConfirmBtn,
  PopBtnContainer,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nxtWatchContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        const bgColor = isDark ? '#231f20' : '#f9f9f9'
        const textColor = isDark ? '#f9f9f9' : '#181818'
        const btnColor = isDark ? '#f9f9f9' : '#3b82f6'
        const logoSrc = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <NavbarContainer bgColor={bgColor}>
            <Link to="/">
              <MenuBtn type="button">
                <Logo src={logoSrc} alt="website logo" />
              </MenuBtn>
            </Link>
            <NavMobileMenuContainer>
              <MenuBtn type="button" onClick={changeTheme}>
                {isDark ? (
                  <WiDaySunny size={30} color="#f9f9f9" />
                ) : (
                  <RiMoonFill size={30} />
                )}
              </MenuBtn>
              <Popup
                modal
                trigger={
                  <MenuBtn type="button">
                    <GiHamburgerMenu size={30} color={textColor} />
                  </MenuBtn>
                }
                className="popup-content"
              >
                {close => (
                  <ModalContainer bgColor={bgColor}>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      <IoMdClose size="30" color={textColor} />
                    </CloseButton>

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
                          <OptionsText textColor={textColor}>
                            Trending
                          </OptionsText>
                        </HomeLargeLeftOptions>
                      </Link>
                      <Link to="/gaming">
                        <HomeLargeLeftOptions>
                          <SiYoutubegaming size={22} color={textColor} />
                          <OptionsText textColor={textColor}>
                            Gaming
                          </OptionsText>
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
                  </ModalContainer>
                )}
              </Popup>

              <MenuBtn type="button" onClick={onClickLogout}>
                <FiLogOut size={30} color={textColor} />
              </MenuBtn>
            </NavMobileMenuContainer>
            <NavLargeMenuContainer>
              <MenuBtn type="button" onClick={changeTheme} data-testid="theme">
                {isDark ? (
                  <WiDaySunny size={30} color="#f9f9f9" />
                ) : (
                  <RiMoonFill size={30} />
                )}
              </MenuBtn>
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutBtn type="button" btnColor={btnColor}>
                    Logout
                  </LogoutBtn>
                }
                position="center center"
              >
                {close => (
                  <>
                    <LogoutContainer>
                      <LogoutMessage>
                        Are you sure, you want to logout
                      </LogoutMessage>
                      <PopBtnContainer>
                        <CloseButton
                          type="button"
                          data-testid="closeButton"
                          onClick={() => close()}
                        >
                          Cancel
                        </CloseButton>
                        <ConfirmBtn type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmBtn>
                      </PopBtnContainer>
                    </LogoutContainer>
                  </>
                )}
              </Popup>
            </NavLargeMenuContainer>
          </NavbarContainer>
        )
      }}
    </nxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
