import { Tweet } from '../Tweet.js';

export class Filters {
  constructor(tweets, filtersView) {
    this.list = [];
    this.filtersView = filtersView;
    this.filter = '';
    this.addAll(tweets);
    this.arrUniqNames = [];
    this.uniqHashtags = [];
    this.findUniqNames();
    this.findHashTags();
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

  findUniqNames() {
    const arrNames = [];

    this.list.forEach((el) => arrNames.push(el.author));
    this.arrUniqNames = Array.from(new Set(arrNames));
    // return this.arrUniqNames;
  }

  findHashTags() {
    const hashtags = [];

    this.list.forEach(({ text }) => {
      const words = text.split(' ');

      words.forEach((word) => {
        if (word[0] === '#') {
          hashtags.push(word);
        }
      });
    });
    this.uniqHashtags = [...new Set(hashtags)];
  }

  display() {
    this.filtersView.display(this.arrUniqNames, this.uniqHashtags);
  }

  // static addFilterConfig({
  //   author, createdAt, createdFrom, text, hashTags,
  // }) {
  //   const filterConfig = {};
  //   if (author) {
  //     filterConfig.author = author;
  //   }
  //   if (createdAt) {
  //     filterConfig.createdAt = createdAt;
  //   }
  //   if (createdFrom) {
  //     filterConfig.createdFrom = createdFrom;
  //   }
  //   if (text) {
  //     filterConfig.text = text;
  //   }
  //   if (hashTags) {
  //     filterConfig.hashTags = hashTags;
  //   }
  //
  //   this.filter = filterConfig;
  //   console.log(this.filter);
  // }
}
