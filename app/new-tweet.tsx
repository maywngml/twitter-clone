import { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import { Link, useRouter } from 'expo-router';

const user = {
  id: 'u1',
  username: 'VadimNotJustDev',
  name: 'Vadim',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
};

export default function NewTweet() {
  const [text, setText] = useState<string>('');
  const router = useRouter();

  const onTweetPress = () => {
    console.log('Posting the tweet', text);
    setText('');
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href='../' style={{ fontSize: 18 }}>
            Cancel
          </Link>
          <Pressable onPress={onTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <Image src={user.image} style={styles.image} />
          <TextInput
            value={text}
            onChangeText={(newValue) => setText(newValue)}
            placeholder="What's happening?"
            multiline
            numberOfLines={5}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1c9bf0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
});
