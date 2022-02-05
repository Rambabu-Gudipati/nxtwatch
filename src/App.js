import {Component} from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'

import nxtWatchContext from './Context/nxtWatchContext'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import SavedVideos from './components/SavedVideos'

import './App.css'

class App extends Component {
  state = {
    isDark: false,
    savedVideoData: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  updatedVideo = videoData => {
    const {savedVideoData} = this.state
    const checkVideo = savedVideoData.filter(each => each.id === videoData.id)

    if (checkVideo.length === 0) {
      this.setState(prevState => ({
        savedVideoData: [...prevState.savedVideoData, videoData],
      }))
    }
  }

  render() {
    const {savedVideoData, isDark} = this.state
    return (
      <nxtWatchContext.Provider
        value={{
          isDark,
          savedVideoData,
          changeTheme: this.changeTheme,
          updateSavedVideo: this.updateSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />

          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </nxtWatchContext.Provider>
    )
  }
}

export default App
