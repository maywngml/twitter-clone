import { Text, View, StyleSheet, Image } from 'react-native';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import type { TweetItem } from '@/types/Tweet';

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>['name'];
  text?: string | number;
};

function IconButton({ icon, text }: IconButtonProps) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <EvilIcons name={icon} size={22} color='gray' />
      <Text style={{ fontSize: 12, color: 'gray' }}>123</Text>
    </View>
  );
}

export default function Tweet({ tweet }: { tweet: TweetItem }) {
  const {
    user,
    content,
    image,
    numberOfComments,
    numberOfRetweets,
    numberOfLikes,
    impressions,
  } = tweet;

  return (
    <View style={styles.container}>
      <Image src={user.image} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.name}>{user.username} •2h</Text>
          <Entypo
            name='dots-three-horizontal'
            size={16}
            color='gray'
            style={{ marginLeft: 'auto' }}
          />
        </View>
        <Text style={styles.content}>{content}</Text>
        {image && <Image src={image} style={styles.image} />}
        <View style={styles.footer}>
          <IconButton icon='comment' text={numberOfComments} />
          <IconButton icon='retweet' text={numberOfRetweets} />
          <IconButton icon='heart' text={`${numberOfLikes}`} />
          <IconButton icon='chart' text={impressions || 0} />
          <IconButton icon='share-apple' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: '600',
  },
  username: {
    color: 'gray',
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 15,
  },
  footer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
});
