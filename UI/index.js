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
const newHeader = new Header(headerView);
const newFilterView = new FilterView('#filters');
const newFilters = new Filters(tweets, newFilterView);
const newTweetView = new TweetView('#tweet');
const newShowTweet = new TweetFeed(tweets, newTweetView);

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
  newHeader.display();
  return true;
};

const addTweet = (text) => {
  tweetFeed.addTweet(text);
  tweetFeed.display();
  return true;
};

const getFeed = (skip = 0, top = 0, filter = {}) => {
  tweetFeed.getPage(skip, top, filter);
  tweetFeed.display();
};

const editTweet = (id, text) => {
  tweetFeed.editTweet(id, text);
  tweetFeed.display();
};

const removeTweet = (id) => {
  tweetFeed.removeTweet(id);
  tweetFeed.display();
};

const showTweet = (id) => {
  newShowTweet.showTweet(id);
  newShowTweet.display();
};

// setCurrentUser('Bill Gates');
// // getFeed(0, 10);
// getFeed(0, 5, filterConfig);
// addTweet('kyky');
// editTweet('13', 'otec');
// removeTweet('14');
showTweet('6');

newFilters.display();
