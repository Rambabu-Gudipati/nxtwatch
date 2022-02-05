import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 45%;
  height: 300px;
  padding: 0px;
  margin-bottom: 30px;
  @media (min-width: 576px) {
    margin-bottom: 10px;
    height: 400px;
    width: 30%;
  }
`
export const Thumbnail = styled.img`
  margin-bottom: 1px;
  width: 100%;
  height: 300px;
  @media (min-width: 576px) {
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  @media (min-width: 576px) {
  }
`

export const VideoDetailsRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const VideoName = styled.p`
  font-size: 16px;
  font-weight: 800;
  color: ${props => props.textColor};
  margin-bottom: 0px;
  @media (min-width: 576px) {
    font-size: 20px;
  }
`
export const VideoSmallDetailsRightBottom = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0px;
  justify-content: flex-start;
  list-style-type: disc;
  @media (min-width: 576px) {
    flex-direction: row;
  }
`

export const VideoDetailsList = styled.p`
  display: flex;
  font-size: 12px;
  font-weight: 400;
  color: #616e7c;
  @media (min-width: 576px) {
    font-size: 16px;
    margin-right: 15px;
  }
`
