import styled from 'styled-components'

export const VideoListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0px;
  margin-bottom: 30px;
  background-color: ${props => props.bgMainColor};
  @media (min-width: 576px) {
    height: 400px;
    width: 45%;
  }
  @media (min-width: 768px) {
    height: 450px;
    width: 30%;
  }
`
export const Thumbnail = styled.img`
  margin-bottom: 10px;
  width: 100%;
  height: 300px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`
export const VideoProfile = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 15px;
`
export const VideoDetailsRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const VideoName = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${props => props.textColor};
  margin-bottom: 5px;
  text-decoration: none;
`
export const VideoSmallDetailsRightBottom = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
  justify-content: flex-start;
  list-style-type: disc;
  @media (min-width: 576px) {
    display: none;
  }
`
export const VideoDetailsListName = styled.p`
  display: flex;
  font-size: 12px;
  font-weight: 500;
  margin-right: 20px;
  color: #424242;
  text-decoration: none;
  @media (min-width: 576px) {
    margin-bottom: 10px;
  }
`
export const VideoDetailsLargeName = styled.p`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  margin-right: 20px;
  color: #424242;
  text-decoration: none;
  @media (min-width: 576px) {
    margin-bottom: 10px;
  }
`
export const VideoDetailsList = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #424242;
  margin-left: 20px;
  margin-right: 20px;
`

export const VideoLargeDetailsRightBottom = styled.div`
  display: none;
  @media (min-width: 576px) {
    display: flex;
    flex-direction: column;
    padding: 0px;
    justify-content: flex-start;
  }
`
export const VideoLarge2DetailsRightBottom = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
  justify-content: flex-start;
  list-style-type: disc;
`
