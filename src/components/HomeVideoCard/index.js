import {Link} from 'react-router-dom'
import nxtWatchContext from '../../Context/nxtWatchContext'

import {
  VideoListItem,
  Thumbnail,
  VideoDetailsContainer,
  VideoProfile,
  VideoDetailsRightContainer,
  VideoName,
  VideoSmallDetailsRightBottom,
  VideoLargeDetailsRightBottom,
  VideoLarge2DetailsRightBottom,
  VideoDetailsListName,
  VideoDetailsLargeName,
  VideoDetailsList,
} from './styledComponent'

const HomeVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const timeAgo = date => {
    const formattedDate = new Date(date)
    const seconds = Math.floor((new Date() - formattedDate) / 1000)

    let interval = seconds / 31536000

    if (interval > 1) {
      return `${Math.floor(interval)} years ago`
    }
    interval = seconds / 2592000
    if (interval > 1) {
      return `${Math.floor(interval)} months ago`
    }
    interval = seconds / 86400
    if (interval > 1) {
      return `${Math.floor(interval)} days ago`
    }
    interval = seconds / 3600
    if (interval > 1) {
      return `${Math.floor(interval)} hours ago`
    }
    interval = seconds / 60
    if (interval > 1) {
      return `${Math.floor(interval)} minutes ago`
    }
    return `${Math.floor(interval)} seconds ago`
  }

  return (
    <nxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        const textColor = isDark ? '#f9f9f9' : '#181818'

        return (
          <VideoListItem>
            <Link to={`/videos/${id}`}>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <VideoProfile
                  src={channel.profile_image_url}
                  alt="channel logo"
                />
                <VideoDetailsRightContainer>
                  <VideoName textColor={textColor}>{title}</VideoName>
                  <VideoSmallDetailsRightBottom>
                    <VideoDetailsListName key="name">
                      {channel.name}
                    </VideoDetailsListName>
                    <VideoDetailsList key="views">{`${viewCount} views`}</VideoDetailsList>
                    <VideoDetailsList key="time">
                      {timeAgo(publishedAt)}
                    </VideoDetailsList>
                  </VideoSmallDetailsRightBottom>

                  <VideoLargeDetailsRightBottom>
                    <VideoDetailsLargeName key="name">
                      {channel.name}
                    </VideoDetailsLargeName>
                    <VideoLarge2DetailsRightBottom>
                      <VideoDetailsListName key="views">{`${viewCount} views`}</VideoDetailsListName>
                      <VideoDetailsList key="time">
                        {timeAgo(publishedAt)}
                      </VideoDetailsList>
                    </VideoLarge2DetailsRightBottom>
                  </VideoLargeDetailsRightBottom>
                </VideoDetailsRightContainer>
              </VideoDetailsContainer>
            </Link>
          </VideoListItem>
        )
      }}
    </nxtWatchContext.Consumer>
  )
}
export default HomeVideoCard
