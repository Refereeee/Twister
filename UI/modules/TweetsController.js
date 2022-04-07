import { getFeed, newFilters, setCurrentUser } from '../index.js';
import { userCollection } from './userCollection/userCollection.js';

export class TweetsController {
  constructor() {
    this.filter = '';
    this.showMyTweets();
    newFilters.display();
    this.filterView();
    this.pagination();
    // this.formSubmit();
    this.signIn();
    this.signUp();
    this.numMinFeeds = 0;
    this.numMaxFeeds = 10;
  }

  showMyTweets() {
    const showLoadTweets = () => getFeed(this.numMinFeeds, this.numMaxFeeds);
    document.addEventListener('DOMContentLoaded', showLoadTweets);
  }

  addFilterConfig({
    author, dateFrom, dateTo, text, hashTags,
  }) {
    const filterConfig = {};
    if (author) {
      filterConfig.author = author;
    }
    if (dateFrom) {
      filterConfig.dateFrom = dateFrom;
    }
    if (dateTo) {
      filterConfig.dateTo = dateTo;
    }
    if (text) {
      filterConfig.text = text;
    }
    if (hashTags) {
      filterConfig.hashTags = hashTags;
    }

    this.filter = filterConfig;
    console.log(this.filter);
    getFeed(0, 10, this.filter);
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
    const loadMore = document.querySelector('.posts__button');
    loadMore.addEventListener('click', () => {
      console.log(this.filter);
      getFeed(this.numMinFeeds, this.numMaxFeeds + 10, this.filter);
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
        setCurrentUser(user.login);
        if (user) {
          getFeed();
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
}
