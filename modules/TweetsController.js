import {
  addTweet,
  newFilters, setCurrentUser,
} from '../index.js';
import { userCollection } from './UserCollection/UserCollection.js';

export class TweetsController {
  constructor({ tweetFeed, tweetFeedView, loadMoreSelector }) {
    this.filter = '';
    this.offset = 0;
    this.limit = 10;
    this.tweetFeed = tweetFeed;
    this.tweetFeedView = tweetFeedView;
    this.loadMore = document.querySelector(loadMoreSelector);

    // this.editTweetListener();
    // this.formSubmit();
    newFilters.display();
    this.filterView();
    this.signIn();
    this.signUp();
    this.pagination();
    this.backMainPage();
    this.logOut();
    this.addPostView();

    document.addEventListener('DOMContentLoaded', () => {
      this.tweetFeedView.clear();
      this.showMyTweetsView({});
    });
  }

  showMyTweetsView(filter) {
    const { count, page } = this.tweetFeed.getPage(this.offset, this.limit, filter);
    if (page) {
      this.tweetFeedView.display(page);
    }

    if (count <= this.offset + this.limit) {
      this.loadMore.style.display = 'none';
    }
  }

  addFilterConfig(filterConfig) {
    this.tweetFeedView.clear();
    this.filter = filterConfig;
    this.offset = 0;
    this.limit = 10;
    this.showMyTweetsView(this.filter);
  }

  filterView() {
    const filtersBtn = document.querySelector('.filters__btn');

    const filterName = document.querySelector('.filters__name_select');

    const filtersHashtags = document.querySelector('.filters__hashtags_select');

    const filterDateFrom = document.querySelector('.filters__date_from');

    const filterDateTo = document.querySelector('.filters__date_to');

    const filtersText = document.querySelector('.filters__text_value');

    filtersBtn.addEventListener('click', () => this.addFilterConfig({
      author: filterName.value,
      dateFrom: filterDateFrom.value,
      dateTo: filterDateTo.value,
      text: filtersText.value,
      hashTags: filtersHashtags.value,
    }));
  }

  pagination() {
    this.loadMore.addEventListener('click', () => {
      // console.log(this.filter);
      this.offset += this.limit;
      this.showMyTweetsView(this.filter);
    });
  }

  signIn() {
    const loginButton = document.querySelector('.header__buttons_enter ');
    const form = document.querySelector('.sign_in_form');
    const loginFormSection = document.querySelector('#login');
    const posts = document.querySelector('.posts');
    const filters = document.querySelector('#filters');
    const tweet = document.querySelector('#tweet');
    const registration = document.querySelector('#registration');

    loginButton.addEventListener('click', () => {
      tweet.classList.add('hidden');
      filters.classList.add('hidden');
      posts.classList.add('hidden');
      registration.classList.add('hidden');
      loginFormSection.classList.remove('hidden');
    });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const login = formData.get('login');
      const password = formData.get('password');

      if (login) {
        const token = userCollection.login(login, password);
        if (token) {
          localStorage.setItem('token', token);
        }
      }

      const token = localStorage.getItem('token');
      if (token) {
        const user = userCollection.verify(token);
        if (user) {
          // getFeed(this.numMinFeeds, this.numMaxFeeds);
          this.showMyTweetsView({});
          setCurrentUser(user.login);
          this.showAddPost(user.login);
          // return user;
        }
        if (!user) {
          document.location.href = document.location.pathname;
        }
      }
      return false;
    });
  }

  signUp() {
    const registrationButton = document.querySelector('.header__buttons_reg');
    const form = document.querySelector('.sign_up_form');
    const loginFormSection = document.querySelector('#login');
    const registerFormSection = document.querySelector('#registration');
    const posts = document.querySelector('.posts');
    const filters = document.querySelector('#filters');
    const tweet = document.querySelector('#tweet');
    // const login = document.querySelector('#registration');

    registrationButton.addEventListener('click', () => {
      tweet.classList.add('hidden');
      filters.classList.add('hidden');
      posts.classList.add('hidden');
      registerFormSection.classList.remove('hidden');
      loginFormSection.classList.add('hidden');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        userCollection.register({
          login: formData.get('login'),
          password: formData.get('password'),
        });
        document.location.href = document.location.pathname;
      });
    });
  }

  logOut() {
    const logOutUser = document.querySelector('.header__user svg');
    logOutUser.addEventListener('click', () => {
      userCollection.remove('token');
      this.removeAddPost();
      this.tweetFeedView.clear();
      this.showMyTweetsView({});
      setCurrentUser('');
    });
  }

  backMainPage() {
    const back = document.querySelector('.back__main');
    back.addEventListener('click', () => {
      document.location.href = document.location.pathname;
    });
  }

  addPostView() {
    const textareaAdd = document.querySelector('.posts__textarea textarea');
    const buttonAdd = document.querySelector('.posts__files_btn');
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      buttonAdd.addEventListener('click', () => {
        addTweet(textareaAdd.value);
      });
    }
  }

  static nickname(name) {
    return name.split(' ').slice(1);
  }

  showAddPost(login) {
    const addPostElem = document.querySelector('.posts__add');
    if (addPostElem.classList.contains('hidden')) {
      addPostElem.classList.add('block');
      addPostElem.classList.remove('hidden');
      addPostElem.querySelector('img').src = `./images/${`${TweetsController.nickname(login)}.png`}`;
    }
  }

  removeAddPost() {
    const addPostElem = document.querySelector('.posts__add');
    if (addPostElem.classList.contains('block')) {
      addPostElem.classList.add('hidden');
      addPostElem.classList.remove('block');
    }
  }
}
