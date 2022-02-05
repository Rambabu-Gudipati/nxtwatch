import {
  VideoListItem,
  Thumbnail,
  VideoDetailsContainer,
  VideoDetailsRightContainer,
  VideoName,
  VideoSmallDetailsRightBottom,
  VideoDetailsList,
} from './styledComponent'

import nxtWatchContext from '../../Context/nxtWatchContext'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <nxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        const textColor = isDark ? '#f9f9f9' : '#181818'

        return (
          <VideoListItem to={`/videos/${id}`}>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetailsContainer>
              <VideoDetailsRightContainer>
                <VideoName textColor={textColor}>{title}</VideoName>
                <VideoSmallDetailsRightBottom>
                  <VideoDetailsList>{`${viewCount} views`}</VideoDetailsList>
                  <VideoDetailsList>Worldwide</VideoDetailsList>
                </VideoSmallDetailsRightBottom>
              </VideoDetailsRightContainer>
            </VideoDetailsContainer>
          </VideoListItem>
        )
      }}
    </nxtWatchContext.Consumer>
  )
}
export default GamingVideoCard
