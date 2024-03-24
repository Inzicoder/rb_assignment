import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import Realm from 'realm';
import send from './assets/send.png';
import styles from './Styles';
import MessageItem from './MessageItem';

// Define the message schema
const MessageSchema = {
  name: 'Message',
  properties: {
    id: 'string',
    text: 'string',
    timestamp: 'date',
  },
};

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [realm, setRealm] = useState(null);
  const scrollRef = React.useRef(null);
  useEffect(() => {
    Realm.open({schema: [MessageSchema]}).then(openedRealm => {
      setRealm(openedRealm);
      const allMessages = openedRealm.objects('Message');
      setMessages(allMessages);

      return () => {
        // Clean up function to close the realm when component unmounts
        if (openedRealm !== null && !openedRealm.isClosed) {
          openedRealm.close();
        }
      };
    });
  }, []);

  const saveMessage = async () => {
    try {
      realm.write(() => {
        realm.create('Message', {
          id: String(new Date().getTime()),
          text: message,
          timestamp: new Date(),
        });
      });

      const allMessages = realm.objects('Message');

      setMessages(allMessages);

      setMessage('');
    } catch (error) {
      console.error('Error saving message:', error);
    }
  };

  const loadMoreData = () => {
    if (realm) {
      const oldestMessageTimestamp =
        messages[messages.length - 1]?.timestamp || new Date();
      const moreMessages = realm
        .objects('Message')
        .filtered('timestamp < $0', oldestMessageTimestamp)
        .sorted('timestamp', true)
        .slice(0, 10);

      if (moreMessages.length > 0) {
        setMessages(prevMessages => {
          const uniqueIds = new Set(prevMessages.map(message => message.id));

          const filteredMessages = moreMessages.filter(
            message => !uniqueIds.has(message.id),
          );

          return [...prevMessages, ...filteredMessages];
        });
      }
    }
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({item}) => <MessageItem message={item} />}
        keyExtractor={item => item.id}
        style={styles.flatList}
        inverted={false} // To display messages from bottom to top
        onMomentumScrollEnd={loadMoreData}
        onMomentumScrollEndThreshold={0.1}
        ref={it => (scrollRef.current = it)}
        onContentSizeChange={() =>
          scrollRef.current?.scrollToEnd({animated: false})
        }
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here..."
          value={message}
          onChangeText={text => setMessage(text)}
        />

        <TouchableOpacity onPress={saveMessage}>
          <Image source={send} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatPage;
