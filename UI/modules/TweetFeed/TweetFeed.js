import { Tweet } from '../Tweet.js';
import { Comment } from '../Comment.js';
import { fetchList } from '../../fetcher.js';

export class TweetFeed {
  static maxValueLength = 280;

  static validateUser(user) {
    return typeof user === 'string' && user.trim().length;
  }

  static validateText(text) {
    return typeof text === 'string' && text.length <= TweetFeed.maxValueLength;
  }

  constructor() {
    this.user = null;
    this.list = [];
    this.tweetsState = [];
    // this.addAll(tweets);
    this.storageKey = 'list';
    this.restore();
  }

  filterByAuthor(filterConfig) {
    if (filterConfig?.author) {
      this.tweetsState = this.tweetsState.filter((el) => el.author === filterConfig.author);
    }
  }

  filterByDate(filterConfig) {
    if (filterConfig?.dateFrom && filterConfig?.dateTo) {
      this.tweetsState = this.tweetsState.filter((el) => el.createdAt >= new Date(filterConfig.dateFrom)
         && el.createdAt <= new Date(filterConfig.dateTo));
    }
    if (filterConfig?.dateFrom) {
      this.tweetsState = this.tweetsState.filter((el) => el.createdAt > new Date(filterConfig.dateFrom));
    }
    if (filterConfig?.dateTo) {
      this.tweetsState = this.tweetsState.filter((el) => el.createdAt < new Date(filterConfig.dateTo));
    }
  }

  filterByText(filterConfig) {
    if (filterConfig?.text) {
      this.tweetsState = this.tweetsState.filter((el) => {
        if (el.text.toLowerCase().includes(filterConfig.text.toLowerCase())) {
          return el;
        }
      });
    }
  }

  filterByHashtag(filterConfig) {
    if (filterConfig?.hashTags) {
      this.tweetsState = this.tweetsState.filter((el) => {
        const arrText = el.text.split(' ');
        // const diff = (a1, a2) => a1.filter(i => a2.includes(i));
        // if (diff(arrText, filterConfig?.hashTags).length === filterConfig?.hashTags.length) {
        //   return el;
        // }
        if (arrText.includes(filterConfig.hashTags)) {
          return el;
        }
      });
    }
  }

  sorting(skip = 0, top = 10) {
    return this.tweetsState.sort((a, b) => a.createdAt - b.createdAt).slice(skip, skip + top);
  }

  getPage(skip = 0, top = 10, filterConfig = {}) {
    this.tweetsState = [...this.list];
    if (Object.keys(filterConfig).length === 0) {
      this.tweetsState = this.sorting(skip, top);
      return this.tweetsState;
    }
    this.filterByAuthor(filterConfig);
    this.filterByDate(filterConfig);
    this.filterByText(filterConfig);
    this.filterByHashtag(filterConfig);
    this.tweetsState = this.sorting(skip, top);
    return this.tweetsState;
  }

  getState() {
    return this.tweetsState;
  }

  get(id) {
    return this.list.find((el) => el.id === `${id}`);
  }

  addTweet(text) {
    const date = new Date();
    const options = {
      id: String(+date),
      text,
      createdAt: date,
      author: this.user,
      comments: [],
    };

    if (!Tweet.validate(options)) {
      return false;
    }
    // this.list = [];
    const newTweet = new Tweet(options);
    this.list.push(newTweet);

    return true;
  }

  showTweet(id) {
    return this.list.find((el) => el.id === id);
  }

  editTweet(id, text) {
    const editObj = this.get(id);

    if (TweetFeed.validateUser(this.user) && TweetFeed.validateText(text)) {
      editObj.text = text;
      return true;
    }

    return false;
  }

  removeTweet(id) {
    const numInArr = this.list.findIndex((el) => el.id === id);

    if (TweetFeed.validateUser(this.user)) {
      this.list.splice(numInArr, 1);
      return true;
    }

    return false;
  }

  addComment(id, text) {
    const comArr = this.get(id).comments;
    const date = new Date();

    const options = {
      id: String(+date),
      text,
      createdAt: date,
      author: this.user,
    };

    if (!Comment.validate(options)) {
      return false;
    }

    const newComment = new Comment(options);
    comArr.push(newComment);
    return true;
  }

  setCurrentUser(user) {
    if (!TweetFeed.validateUser(user)) {
      throw new Error('Validate user error');
    }

    this.user = user;
  }

  addAll(tws) {
    const garbage = [];

    if (!Array.isArray(tws)) {
      throw new Error('Error of tweets is not array');
    }

    for (const tw of tws) {
      if (typeof tw !== 'object' || !Tweet.validate(tw)) {
        garbage.push(tw);
      } else {
        this.list.push(tw);
      }
    }
    return garbage;
  }

  getList() {
    return this.list;
  }

  restore() {
    const data = localStorage.getItem(this.storageKey) || JSON.stringify(fetchList());

    try {
      this.listProcess(JSON.parse(data));
    } catch (e) {
      this.listProcess(fetchList());
      this.save();
    }
  }

  listProcess(list) {
    list.forEach((tweet) => {
      if (Tweet.validate(tweet)) {
        this.list.push(new Tweet(tweet));
      }
    });
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.list));
  }
}
