import { Comment } from './Comment.js';

export class Tweet {
  static maxValueLength = 280;

  static validateStructure = {
    id: (val) => typeof val === 'string' && val.trim().length,
    createdAt: (val) => typeof val === 'object' && val instanceof Date,
    text: (val) => typeof val === 'string' && val.length <= Tweet.maxValueLength && val.length,
    author: (val) => typeof val === 'string' && val.trim().length,
    comments: (val) => Array.isArray(val) && val.every((com) => Comment.validate(com)),
  };

  constructor(options) {
    if (!Tweet.validate(options)) {
      throw new Error('TweetView validate failed');
    }

    this._id = options.id;
    this._createdAt = new Date(options.createdAt);
    this._author = options.author;
    this._text = options.text;
    this._comments = [];
    options.comments.forEach((comment) => {
      // if (!Comment.validate(comment)) {
      //   return
      // }
      this._comments.push(new Comment(comment));
    });
  }

  static validate(tweet) {
    for (const [key, value] of Object.entries(tweet)) {
      if (!Object.keys(Tweet.validateStructure || !Tweet.validateStructure[key](value))
        .includes(key)) {
        return false;
      }
    }
    if (!Object.keys(Tweet.validateStructure)
      .every((key) => Object.keys(tweet)
        .includes(key))) {
      return false;
    }
    return true;
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
  }

  get author() {
    return this._author;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    if (Tweet.validateStructure.text(text)) {
      this._text = text;
    }
  }

  get comments() {
    return this._comments;
  }

  toJSON() {
    return {
      id: this._id,
      author: this._author,
      text: this._text,
      createdAt: this._createdAt,
      comments: this._comments,
    };
  }
}
