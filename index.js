import { tweets } from './mock/tweets.js';
import { TweetFeed } from './modules/TweetFeed/TweetFeed.js';
import { FilterView } from './modules/Filters/FilterView.js';
import { Filters } from './modules/Filters/Filters.js';
import { TweetFeedView } from './modules/TweetFeed/TweetFeedView.js';
import { TweetView } from './modules/TweetView/TweetView.js';
import { HeaderView } from './modules/HeaderTweet/Header.view.js';
import { Header } from './modules/HeaderTweet/Header.js';
// import { UserSignInView } from './modules/UserCollection/UserSignInView.js';
import { TweetsController } from './modules/TweetsController.js';
import { userCollection } from './modules/UserCollection/UserCollection.js';

const headerView = new HeaderView('#container__user');
const tweetFeedView = new TweetFeedView('#posts__loaded');
const tweetFeed = new TweetFeed(tweets, tweetFeedView);
const newHeader = new Header();
const newFilterView = new FilterView('#filters');
export const newFilters = new Filters(tweets, newFilterView);
const newTweetView = new TweetView('#tweet');

// const newUserLoginView = new UserSignInView('#login');

// export const loginView = () => {
//   newUserLoginView.display();
// };

// const newShowTweet = new TweetFeed(tweets, newTweetView);

// const filterConfig = {
//   author: 'Pavel Durov',
//   // hashTag: '#FINE',
//   dateFrom: new Date('2022-03-05T23:55:25'),
//   dateTo: new Date('2022-03-20T23:55:25'),
//   // text: 'know',
// };

const newTweetsController = new TweetsController({
  tweetFeed,
  tweetFeedView,
  loadMoreSelector: '.posts__button',
  addPostView: '.posts__add',
});

export const setCurrentUser = (name) => {
  newHeader.setCurrentUser(name);
  tweetFeed.setCurrentUser(name);
  headerView.display(newHeader.userName);
};

export const addTweet = (text) => {
  if (tweetFeed.addTweet(text)) {
    tweetFeedView.display(tweetFeed.getList());
  }
};

export const editTweet = (id, text) => {
  if (tweetFeed.editTweet(id, text)) {
    tweetFeedView.clear();
    tweetFeedView.display(tweetFeed.getList());
  }
};

export const removeTweet = (id) => {
  if (tweetFeed.removeTweet(id)) {
    tweetFeedView.clear();
    tweetFeedView.display(tweetFeed.getList());
  }
};

export const showTweet = (id) => {
  if (tweetFeed.showTweet(id)) {
    newTweetView.display(tweetFeed.showTweet(id));
  }
};

export const addComment = (id, text) => {
  tweetFeed.addComment(id, text);
  newTweetView.display(tweetFeed.showTweet(id));
};

// const searchParams = new URLSearchParams(document.location.search);

// const login = searchParams.get('login');
// if (login) {
//   const token = userCollection.login(login, searchParams.get('password'));
//   if (token) {
//     localStorage.setItem('token', token);
//   }
//   document.location.href = document.location.pathname;
// }
document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  if (token) {
    const user = userCollection.verify(token);
    if (user) {
      setCurrentUser(user.login);
      newTweetsController.showAddPost(user.login);
    }
  }
});

// setCurrentUser('Bill Gates');
// getFeed(0, 20);
// getFeed(0, 10, filterConfig);
// addTweet('kyky');
// editTweet('13', 'otec');
// removeTweet('14');
// showTweet('8');

// newFilters.display();

// localStorage.setItem('tweets', JSON.stringify(tweets));
// localStorage.getItem('tweets');
// console.log(JSON.parse(tweets));
