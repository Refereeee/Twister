import { TweetFeed } from '../TweetFeed/TweetFeed.js';

export class Header {
  constructor() {
    this.user = null;
  }

  static nickname(name) {
    return name.split(' ').slice(1);
  }

  static validateUser(user) {
    return typeof user === 'string' && user.trim().length;
  }

  setCurrentUser(user) {
    if (!TweetFeed.validateUser(user)) {
      throw new Error('Validate user error');
    }

    this.user = user;
  }

  get userName() {
    return this.user;
  }
}
