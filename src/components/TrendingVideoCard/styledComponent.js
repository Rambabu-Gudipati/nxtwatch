import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0px;
  margin-bottom: 30px;
  @media (min-width: 576px) {
    margin-bottom: 10px;
    height: 400px;
    flex-direction: row;
  }
`
export const Thumbnail = styled.img`
  margin-bottom: 10px;
  width: 100%;
  height: 300px;
  @media (min-width: 576px) {
    width: 50%;
    height: 300px;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 10px;
  @media (min-width: 576px) {
    padding-left: 15px;
    height: 300px;
    width: 50%;
  }
`
export const VideoProfile = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 15px;
  @media (min-width: 576px) {
    display: none;
  }
`
export const VideoDetailsRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 10px;
  align-items: flex-start;
`
export const VideoName = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.textColor};
  margin-bottom: 5px;
  @media (min-width: 576px) {
    font-size: 20px;
  }
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
  color: #616e7c;
  @media (min-width: 576px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`
export const VideoDetailsLargeName = styled.p`
  display: flex;
  font-size: 12px;
  font-weight: 400;
  margin-right: 20px;
  color: #616e7c;
  @media (min-width: 576px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`
export const VideoDetailsList = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #616e7c;
  margin-left: 20px;
  margin-right: 20px;
  @media (min-width: 576px) {
    font-size: 16px;
  }
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
