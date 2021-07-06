import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, { G, Path, Circle, Defs, Rect, ClipPath } from "react-native-svg";
import styles from '../stylesheets/checkoutModalStyles.js';


const removeButton = ({remove}) => {
return (
  <TouchableOpacity style={styles.removeButton} onPress={remove} >
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx="12.5" cy="12.5" r="12.5" fill="#A5DFF0"/>
    <G clip-path="url(#clip0)">
    <Path d="M15.1915 8.32899L12.5501 10.9704C11.6697 10.0903 10.789 9.20938 9.90844 8.32899C8.8898 7.31037 7.31083 8.88987 8.32862 9.90878C9.20931 10.7886 10.0903 11.6697 10.97 12.5501C10.0899 13.4309 9.20943 14.3113 8.32862 15.1914C7.31083 16.2097 8.88994 17.7888 9.90844 16.7712C10.7888 15.8905 11.6695 15.0097 12.5499 14.1296L15.1913 16.7712C16.21 17.7895 17.7893 16.2099 16.7711 15.1914C15.8904 14.3107 15.01 13.4303 14.1291 12.5498C15.0099 11.6691 15.8903 10.7885 16.7711 9.90792C17.7895 8.88987 16.2101 7.31037 15.1913 8.32956" fill="#424242"/>
    </G>
    <Defs>
    <ClipPath id="clip0">
    <Rect width="13" height="13" fill="white" transform="translate(4 4)"/>
    </ClipPath>
    </Defs>
    </Svg>
  </TouchableOpacity>
  )

}

export default removeButton;
