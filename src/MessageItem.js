import React from 'react';
import { View, Text, Image } from 'react-native';
import avatar from './assets/avatar.png';
import tick from './assets/tick.png';
import styles from './Styles';

const MessageItem = React.memo(({ message }) => {
  return (
    <View style={styles.msgPrimaryContainer}>
      <View style={styles.msgSecondaryContainer}>
        <Text style={styles.messageText}>{message.text}</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.timestampText}>
            {message.timestamp.toLocaleString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
          <Image source={tick} style={styles.tick} />
        </View>
      </View>
      <Image source={avatar} style={styles.avatar} />
    </View>
  );
});

export default MessageItem;
