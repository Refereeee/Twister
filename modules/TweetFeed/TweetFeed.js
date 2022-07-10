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
    // this.addAll(tweets);
    this.storageKey = 'list';
    this.restore();
  }

  static sorting(a, b) {
    return a.createdAt - b.createdAt;
  }

  filterStructure = {
    author: (val, list) => (val ? list.filter(({ author }) => author === val) : list),
    text: (val, list) => (val ? list.filter(({ text }) => text.toLowerCase().includes(val.toLowerCase())) : list),
    hashTags: (val, list) => (val ? list.filter(({ text }) => text.split(' ').includes(val)) : list),
    dateTo: (val, list) => (val ? list.filter(({ createdAt }) => createdAt <= new Date(val)) : list),
    dateFrom: (val, list) => (val ? list.filter(({ createdAt }) => createdAt >= new Date(val)) : list),
  };

  filter(filterConfig, list) {
    for (const [key, value] of Object.entries(filterConfig)) {
      list = this.filterStructure[key](value, list);
    }
    return list;
  }

  getPage(skip = 0, top = 10, filterConfig = {}) {
    const filtered = this.filter(filterConfig, [...this.list]);

    return {
      count: filtered.length,
      page: filtered.sort(TweetFeed.sorting).slice(skip, skip + top),
    };
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
    this.save();
    return true;
  }

  showTweet(id) {
    return this.list.find((el) => el.id === id);
  }

  editTweet(id, text) {

    const editObj = this.get(id);

    if (TweetFeed.validateUser(this.user) && TweetFeed.validateText(text)) {
      console.log(id)
      // console.log(text);
      // console.log(editObj);
      editObj.text = text;
      this.save();
      return true;
    }

    return false;
  }

  removeTweet(id) {
    const numInArr = this.list.findIndex((el) => el.id === id);

    if (TweetFeed.validateUser(this.user)) {
      this.list.splice(numInArr, 1);
      this.save();
      return true;
    }

    return false;
  }

  addComment(id, text) {
    this.get(id).comments;
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
    this.get(id).comments.push(newComment);
    this.save();
    return true;
  }

  setCurrentUser(user) {
    // if (!TweetFeed.validateUser(user)) {
    //   throw new Error('Validate user error');
    // }

    this.user = user;
  }

  getList() {
    console.log(this.list.length);
    return this.list;
  }

  restore() {
    const data = localStorage.getItem(this.storageKey) || JSON.stringify(fetchList());

    try {
      this.listProcess(JSON.parse(data));
      this.save();
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
