import React from 'react'

const nxtWatchContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  savedVideoData: [],
  updateSavedVideo: () => {},
})
export default nxtWatchContext
