import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import VideoListEntry from '../components/VideoListEntry.js';
// import { stat } from 'fs';


const mapStateToProps = function(state) {
  return {
    videos: state.videoList
  }
}
const mapDispatchToProps = dispatch => ({
  handleVideoListEntryTitleClick: video => dispatch(changeVideo(video))
})

var VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideoList)

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
