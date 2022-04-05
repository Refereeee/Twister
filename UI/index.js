import { tweets } from './mock/tweets.js';
import { TweetFeed } from './modules/TweetFeed/TweetFeed.js';
import { FilterView } from './modules/Filters/FilterView.js';
import { Filters } from './modules/Filters/Filters.js';
import { TweetFeedView } from './modules/TweetFeed/TweetFeedView.js';
import { TweetView } from './modules/TweetView/TweetView.js';
import { HeaderView } from './modules/HeaderTweet/Header.view.js';
import { Header } from './modules/HeaderTweet/Header.js';

const headerView = new HeaderView('#container__user');
const tweetFeedView = new TweetFeedView('#posts__loaded');
const tweetFeed = new TweetFeed(tweets, tweetFeedView);
const newHeader = new Header();
const newFilterView = new FilterView('#filters');
const newFilters = new Filters(tweets, newFilterView);
const newTweetView = new TweetView('#tweet');
// const newShowTweet = new TweetFeed(tweets, newTweetView);

const filterConfig = {
  author: 'Bill Gates',
  hashTag: '#FINE',
  dateFrom: new Date('2022-02-02T23:55:25'),
  dateTo: new Date('2022-03-20T23:55:25'),
  text: 'know',
};

const setCurrentUser = (name) => {
  newHeader.setCurrentUser(name);
  tweetFeed.setCurrentUser(name);
  headerView.display(newHeader.userName);
};

const addTweet = (text) => {
  if (tweetFeed.addTweet(text)) {
    tweetFeed.display(tweetFeed.getList());
  }
};

const getFeed = (skip = 0, top = 10, filter = {}) => {
  if (tweetFeed.getPage(skip, top, filter)) {
    tweetFeedView.display(tweetFeed.getState());
  }
};

const editTweet = (id, text) => {
  if (tweetFeed.editTweet(id, text)) {
    tweetFeedView.display(tweetFeed.getList());
  }
};

const removeTweet = (id) => {
  if (tweetFeed.removeTweet(id)) {
    tweetFeedView.display(tweetFeed.getList());
  }
};

const showTweet = (id) => {
  if (tweetFeed.showTweet(id)) {
    newTweetView.display(tweetFeed.showTweet(id));
  }
};

setCurrentUser('Bill Gates');
getFeed(0, 20);
getFeed(0, 10, filterConfig);
addTweet('kyky');
editTweet('13', 'otec');
removeTweet('14');
showTweet('8');

newFilters.display();
