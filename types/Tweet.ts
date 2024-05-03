export type TweetItem = {
  id: string;
  user: {
    id: string;
    username: string;
    name: string;
    image: string;
  };
  createdAt: string;
  content: string;
  image?: string;
  numberOfComments: number;
  numberOfRetweets: number;
  numberOfLikes: number;
  impressions?: number;
};
