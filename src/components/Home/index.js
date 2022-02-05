import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {MdClose, MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {AiOutlineSearch, AiFillHome, AiFillFire} from 'react-icons/ai'

import nxtWatchContext from '../../Context/nxtWatchContext'
import Header from '../Header'
import HomeVideoCard from '../HomeVideoCard'

import {
  HomeBgContainer,
  PremiumBanner,
  PremiumLeftContainer,
  Logo,
  PremiumBannerText,
  PremiumBannerBtn,
  PremiumCloseBtn,
  HomeBottomContainer,
  HomeSearchContainer,
  SearchInput,
  SearchBtn,
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
  LoaderContainer,
  FailureContainer,
  FailureImg,
  Heading,
  Description,
  RetryBtn,
} from './styledComponent'

const apiStatusConstant = {
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    searchInput: '',
    videoData: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getHomeData()
  }

  apiSuccess = data => {
    const updatedData = data.videos.map(each => ({
      id: each.id,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      channel: each.channel,
      viewCount: each.view_count,
      publishedAt: each.published_at,
    }))
    this.setState({
      videoData: updatedData,
      apiStatus: apiStatusConstant.success,
    })
  }

  apiFailure = () => {
    this.setState({apiStatus: apiStatusConstant.failure})
  }

  getHomeData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      this.apiSuccess(data)
    } else {
      this.apiFailure()
    }
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  OnClickSearch = () => {
    this.getHomeData()
  }

  renderNoSearch = () => (
    <FailureContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <Heading>No Search results found</Heading>
      <Description>Try different key words or remove search filter</Description>
      <RetryBtn>Retry</RetryBtn>
    </FailureContainer>
  )

  renderSuccessView = () => {
    const {videoData} = this.state
    return (
      <>
        {videoData.length === 0 ? (
          this.renderNoSearch()
        ) : (
          <HomeVideoListContainer>
            {videoData.map(each => (
              <HomeVideoCard key={each.id} videoDetails={each} />
            ))}
          </HomeVideoListContainer>
        )}
      </>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  onClickFailRetry = () => {
    this.getHomeData()
  }

  renderFailureView = () => (
    <nxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const textColor = isDark ? '#f9f9f9' : '#181818'
        const failureImg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer>
            <FailureImg src={failureImg} alt="failure view" />
            <Heading textColor={textColor}>Oops! Something Went Wrong</Heading>
            <Description textColor={textColor}>
              We are having some trouble to complete your request. Please try
              again.
            </Description>
            <Link to="/">
              <RetryBtn type="button">Retry</RetryBtn>
            </Link>
          </FailureContainer>
        )
      }}
    </nxtWatchContext.Consumer>
  )

  finalRenderView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.inProgress:
        return this.renderLoadingView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <nxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? '#231f20' : '#f9f9f9'
          const bgMainColor = isDark ? '#181818' : '#f9f9f9'
          const textColor = isDark ? '#f9f9f9' : '#181818'
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
                        <OptionsText textColor={textColor}>
                          Trending
                        </OptionsText>
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

                <HomeLargeRightBottomContainer>
                  <PremiumBanner data-testid="banner">
                    <PremiumLeftContainer>
                      <Logo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <PremiumBannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </PremiumBannerText>
                      <PremiumBannerBtn type="button">
                        GET IT NOW
                      </PremiumBannerBtn>
                    </PremiumLeftContainer>
                    <PremiumCloseBtn type="button" data-testid="close">
                      <MdClose size={28} />
                    </PremiumCloseBtn>
                  </PremiumBanner>
                  <HomeBottomContainer
                    bgMainColor={bgMainColor}
                    data-testid="home"
                  >
                    <HomeSearchContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.changeSearchInput}
                      />
                      <SearchBtn
                        type="button"
                        data-testId="searchButton"
                        onClick={this.OnClickSearch}
                      >
                        <AiOutlineSearch color={textColor} />
                      </SearchBtn>
                    </HomeSearchContainer>
                    {this.finalRenderView()}
                  </HomeBottomContainer>
                </HomeLargeRightBottomContainer>
              </HomeBgContainer>
            </>
          )
        }}
      </nxtWatchContext.Consumer>
    )
  }
}

export default Home
