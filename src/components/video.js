import React from 'react';
import { Video } from 'expo-av';
import Splash from './splash.js';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


class IntroVideo extends React.Component {
  constructor(props) {
    super(props);
    this.vid = require('../../assets/opening_video.mov');
    this.pressed = false;
  }

  _handleVideoRef = component => {
    this.playbackObject = component;
    this.playbackObject.setOnPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
  }
  
  _onPlaybackStatusUpdate = playbackStatus => {
    this.playbackStatus = playbackStatus;
    // console.log('this is playbackstatusupdate')
    if (!playbackStatus.isLoaded) {
      // Update your UI for the unloaded state
      if (playbackStatus.error) {
        console.log(`Encountered a fatal error during playback: ${playbackStatus.error}`);
        // Send Expo team the error on Slack or the forums so we can help you debug!
      }
    } else {
      // Update your UI for the loaded state
  
      if (playbackStatus.isPlaying) {
        // console.log('this is playing')
      } else {
        // console.log('not playing')
      }

      if (playbackStatus.isBuffering) {
        // Update your UI for the buffering state
      }
  
      if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
        // The player has just finished playing and will stop. Maybe you want to play something else?
        this.props.navigation.navigate('Splash');
      }
    }
  };

  handlePress() {
    this.pressed = true;
  }
  
  render() {
    return (
      <TouchableOpacity onPress={() => this.handlePress()}>
        <Video
          ref={this._handleVideoRef}
          source={this.vid}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="stretch"
          shouldPlay
          style={{ width: '100%', height: '100%' }}
          
        />  
      </TouchableOpacity>
    )
  }
}

export default IntroVideo;