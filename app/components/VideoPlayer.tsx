import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {WebView} from 'react-native-webview';
import CustomButton from './CustomButton';

interface VideoPlayerProps {
  visible: boolean;
  onClose: () => void;
  videoKey: string; // YouTube video key
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  visible,
  onClose,
  videoKey,
}) => {
  const {width, height} = Dimensions.get('window');

  const injectedJavaScript = `
  document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    if (video) {
      video.addEventListener('ended', function() {
        window.ReactNativeWebView.postMessage('videoEnded');
      });
    }
  });
  true; // Note: This is required to ensure the JS is evaluated
`;

  const onMessage = (event: any) => {
    // Handle messages from WebView
    if (event.nativeEvent.data === 'videoEnded') {
      onClose(); // Close the modal when video ends
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.container}>
        <WebView
          source={{uri: `https://www.youtube.com/embed/${videoKey}?autoplay=1`}}
          style={{width, height}}
          javaScriptEnabled={true}
          mediaPlaybackRequiresUserAction={false} // Important for autoplay
          onMessage={onMessage}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            zIndex: 1000,
          }}>
          <Button onPress={onClose} title="Done" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  doneButton: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
});

export default VideoPlayer;
