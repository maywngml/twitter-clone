import { StyleSheet, FlatList, View, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import Tweet from '@/components/Tweet';
import tweets from '@/assets/data/tweets';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      <Pressable>
        <Link href='/new-tweet' asChild>
          <Entypo
            name='plus'
            size={24}
            color='white'
            style={styles.floatingButton}
          />
        </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  floatingButton: {
    backgroundColor: '#1c9bf0',
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 13,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 15,
    bottom: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
});
