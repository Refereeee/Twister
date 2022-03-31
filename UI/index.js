const tweets = [
  {
    id: '1',
    text: 'This week, over 700,000 new users are signing up for Telegram each day.',
    createdAt: new Date('2022-03-09T23:00:00'),
    author: 'Pavel Durov',
    comments: [{
      id: '901',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-09T23:02:05'),
      author: 'Bill Gates',
    },
      {
        id: '902',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-09T23:03:15'),
        author: 'Daniel Adams',
      },
      {
        id: '903',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-09T23:04:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '2',
    text: 'I can\'t wait for Nightdive to do Quake II and include the N64 version. ',
    createdAt: new Date('2022-03-28T23:00:00'),
    author: 'Kriztoffer Swank',
    comments: [{
      id: '200',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-25T23:02:05'),
      author: 'Bill Gates',
    },
      {
        id: '201',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-25T23:03:15'),
        author: 'Daniel Adams',
      },
      {
        id: '202',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-25T23:04:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '3',
    text: 'I can\'t wait for Nightdive to do Quake II and include the N64 version. ',
    createdAt: new Date('2022-03-09T23:15:00'),
    author: 'Golden Axe',
    comments: [{
      id: '400',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-09T23:16:05'),
      author: 'Bill Gates',
    },
      {
        id: '401',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-09T23:17:15'),
        author: 'Daniel Adams',
      },
      {
        id: '402',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-09T23:18:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '4',
    text: 'Fifteen Decisive Battles of the World',
    createdAt: new Date('2022-03-10T23:25:00'),
    author: 'Golden Axe',
    comments: [{
      id: '500',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-10T23:35:05'),
      author: 'Bill Gates',
    },
      {
        id: '501',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-10T23:45:15'),
        author: 'Daniel Adams',
      },
      {
        id: '502',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-10T23:55:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '5',
    text: 'Overwatch players dont win anything',
    createdAt: new Date('2022-03-11T23:25:00'),
    author: 'Matthew DeLisi',
    comments: [{
      id: '700',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-11T23:35:05'),
      author: 'Bill Gates',
    },
      {
        id: '701',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-11T23:45:15'),
        author: 'Daniel Adams',
      },
      {
        id: '702',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-11T23:55:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '6',
    text: 'I just tested positive for COVID. I’ve had a scratchy throat for a couple days',
    createdAt: new Date('2022-01-08T23:25:00'),
    author: 'Barack Obama',
    comments: [{
      id: '1000',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-02-08T23:35:05'),
      author: 'Bill Gates',
    },
      {
        id: '1001',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-01-08T23:45:15'),
        author: 'Daniel Adams',
      },
      {
        id: '1002',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-01-08T23:55:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '7',
    text: 'Sunday is for anime series on Netflix, game ( elden ring ) and chill. Wanna join me?',
    createdAt: new Date('2022-02-07T23:25:00'),
    author: 'Duen Duang',
    comments: [{
      id: '1100',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-07T23:35:05'),
      author: 'Bill Gates',
    },
      {
        id: '1101',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-01-07T23:45:15'),
        author: 'Daniel Adams',
      },
      {
        id: '1102',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-01-07T23:55:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '8',
    text: 'It has been over a year since wild polio paralyzed a child in Pakistan, presenting #FINE',
    createdAt: new Date('2022-03-05T23:25:00'),
    author: 'Bill Gates',
    comments: [{
      id: '1200',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-05T23:35:05'),
      author: 'Bill Gates',
    },
      {
        id: '1201',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-05T23:45:15'),
        author: 'Daniel Adams',
      },
      {
        id: '1202',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-05T23:55:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '9',
    text: 'An incredible opportunity to stop this disease for good',
    createdAt: new Date('2022-03-04T23:25:00'),
    author: 'Pavel Durov',
    comments: [{
      id: '1300',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-04T23:35:05'),
      author: 'Bill Gates',
    },
      {
        id: '1301',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-04T23:45:15'),
        author: 'Daniel Adams',
      },
      {
        id: '1302',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-04T23:55:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '10',
    text: 'Exactly 7 years ago Telegram started as an iPhone app. Today we are launching encrypted Video Call',
    createdAt: new Date('2022-03-03T23:25:00'),
    author: 'Pavel Durov',
    comments: [{
      id: '1400',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-03T23:35:05'),
      author: 'Bill Gates',
    },
      {
        id: '1401',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-03T23:45:15'),
        author: 'Daniel Adams',
      },
      {
        id: '1402',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-03T23:55:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '11',
    text: 'Epic Games  know has defied the App Store Monopoly. ',
    createdAt: new Date('2022-03-01T23:25:00'),
    author: 'Jeff Bezos',
    comments: [{
      id: '1500',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-02T23:35:05'),
      author: 'Bill Gates',
    },
      {
        id: '1501',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-02T23:45:15'),
        author: 'Daniel Adams',
      },
      {
        id: '1502',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-02T23:55:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '12',
    text: 'I know not a single soul would care but can I borrow enough money to start a small business.',
    createdAt: new Date('2022-03-14T23:15:00'),
    author: 'Jeff Bezos',
    comments: [{
      id: '301',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-14T23:16:05'),
      author: 'Bill Gates',
    },
      {
        id: '302',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-14T23:17:15'),
        author: 'Daniel Adams',
      },
      {
        id: '303',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-14T23:18:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '13',
    text: 'By acting now and know how funding organizations like #KNOW #FINE',
    createdAt: new Date('2022-03-12T23:25:00'),
    author: 'Bill Gates',
    comments: [{
      id: '800',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-12T23:35:05'),
      author: 'Bill Gates',
    },
      {
        id: '801',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-12T23:45:15'),
        author: 'Daniel Adams',
      },
      {
        id: '802',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-12T23:55:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '14',
    text: 'By acting know how funding organizations like #FINE',
    createdAt: new Date('2022-03-10T23:15:00'),
    author: 'Bill Gates',
    comments: [{
      id: '2200',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-12T23:16:05'),
      author: 'Bill Gates',
    },
      {
        id: '2201',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-12T23:17:15'),
        author: 'Daniel Adams',
      },
      {
        id: '2202',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-12T23:18:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '15',
    text: 'By acting know how like ',
    createdAt: new Date('2022-03-16T23:25:00'),
    author: 'Bill Gates',
    comments: [{
      id: '2300',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-16T23:35:05'),
      author: 'Bill Gates',
    },
      {
        id: '2301',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-16T23:45:15'),
        author: 'Daniel Adams',
      },
      {
        id: '2302',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-16T23:55:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '16',
    text: 'By look for every opportunity to talk about Doom 64s lighting',
    createdAt: new Date('2022-03-17T23:20:00'),
    author: 'Bill Gates',
    comments: [{
      id: '2400',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-17T23:20:05'),
      author: 'Bill Gates',
    },
      {
        id: '2401',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-17T23:23:15'),
        author: 'Daniel Adams',
      },
      {
        id: '2402',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-12T23:25:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '17',
    text: 'Telegram: the app at the heart of Ukraine’s propaganda battle',
    createdAt: new Date('2022-03-18T23:20:00'),
    author: 'Bill Gates',
    comments: [{
      id: '2500',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-18T23:20:05'),
      author: 'Bill Gates',
    },
      {
        id: '2501',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-18T23:23:15'),
        author: 'Daniel Adams',
      },
      {
        id: '2502',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-18T23:25:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '18',
    text: 'Happy New Year!',
    createdAt: new Date('2022-03-11T23:20:00'),
    author: 'Bill Gates',
    comments: [{
      id: '2600',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-19T23:20:05'),
      author: 'Bill Gates',
    },
      {
        id: '2601',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-19T23:23:15'),
        author: 'Daniel Adams',
      },
      {
        id: '2602',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-19T23:25:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '19',
    text: 'Public calls to violence have no place on Telegram',
    createdAt: new Date('2022-03-14T23:20:00'),
    author: 'Bill Gates',
    comments: [{
      id: '2600',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-19T23:20:05'),
      author: 'Bill Gates',
    },
      {
        id: '2601',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-19T23:23:15'),
        author: 'Daniel Adams',
      },
      {
        id: '2602',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-19T23:25:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '20',
    text: 'Unlike 2013, 2020 is a year when most mobile apps (including Telegram) are best used on an Android phone.',
    createdAt: new Date('2022-03-14T23:20:00'),
    author: 'Bill Gates',
    comments: [{
      id: '2600',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-19T23:20:05'),
      author: 'Bill Gates',
    },
      {
        id: '2601',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-19T23:23:15'),
        author: 'Daniel Adams',
      },
      {
        id: '2602',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-19T23:25:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
  {
    id: '21',
    text: 'Unlike 2011, 2019 is a year when most mobile apps (including Telegram) are best used on an Android phone.',
    comments: [{
      id: '2800',
      text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
      createdAt: new Date('2022-03-19T23:20:05'),
      author: 'Bill Gates',
    },
      {
        id: '2801',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-19T23:23:15'),
        author: 'Daniel Adams',
      },
      {
        id: '2802',
        text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
        createdAt: new Date('2022-03-19T23:25:25'),
        author: 'Ricardo Cromento',
      }
    ],
  },
];

class Comment {

  static maxValueLength = 280;

  static validateStructure = {
    id: (val) => typeof val === 'string' && val.trim().length,
    createdAt: (val) => typeof val === 'object' && val instanceof Date,
    text: (val) => typeof val === 'string' && val.length <= Comment.maxValueLength && val.length,
    author: (val) => typeof val === 'string' && val.trim().length,
  };

  static validate(comment) {
    for (const [key, value] of Object.entries(comment)) {
      if (!Object.keys(Comment.validateStructure)
        .includes(key)) {
        return false;
      }
      if (!Comment.validateStructure[key](value)) {
        return false;
      }
    }
    if (!Object.keys(Comment.validateStructure)
      .every(key => Object.keys(comment)
        .includes(key))) {
      return false;
    }
    return true;
  }

  constructor(options) {

    if (!Comment.validate(options)) {
      throw new Error('Comment validate failed');
    }

    this._id = options.id;
    this._createdAt = options.createdAt;
    this._author = options.author;
    this._text = options.text;
  }

  get id() {
    return this._id;
  }

  // get id (){
  //   return this.id
  // }
  set id(id) {
    `can not change on ${id}`;
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(date) {
    return `can not change this date on ${date}`;
  }

  get author() {
    return this._author;
  }

  get text() {
    return this._text;
  }

  set text(newText) {
    return (Comment.validateStructure.text(newText)) ? this._text = newText : this._text;
  }
}

const comment = new Comment({
  id: '50000',
  createdAt: new Date('2022-03-03T23:55:25'),
  author: 'Bill Gates',
  text: 'Public calls to violence have no place on Telegram',
});
comment.text = 6;

// console.log(comment);

class Tweet {

  static maxValueLength = 280;

  static validateStructure = {
    id: (val) => typeof val === 'string' && val.trim().length,
    createdAt: (val) => typeof val === 'object' && val instanceof Date,
    text: (val) => typeof val === 'string' && val.length <= Tweet.maxValueLength && val.length,
    author: (val) => typeof val === 'string' && val.trim().length,
    comments: (val) => Array.isArray(val)
  };

  static validate(tweet) {
    for (const [key, value] of Object.entries(tweet)) {
      if (!Object.keys(Tweet.validateStructure)
        .includes(key)) {
        return false;
      }
      if (!Tweet.validateStructure[key](value)) {
        return false;
      }
    }
    if (!Object.keys(Tweet.validateStructure)
      .every(key => Object.keys(tweet)
        .includes(key))) {
      return false;
    }
    return true;
  }

  constructor(options) {

    if (!Tweet.validate(options)) {
      throw new Error('Tweet validate failed');
    }

    this._id = options.id;
    this._createdAt = options.createdAt;
    this._author = options.author;
    this._text = options.text;
    this._comments = options.comments;
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
    return (Tweet.validateStructure.text(text)) ? this._text = text : this._text;
  }

  get comments() {
    return this._comments;
  }

}

// const tweet = new Tweet({
//     id: "35",
//     createdAt: new Date('2022-03-02T23:55:25'),
//     text: "Public calls to violence have no place on Telegram",
//     author: "Bill Gates",
//     comments: []
// })
//
// console.log(tweet)

class TweetFeed {

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
    this.tweets = tweets;
    this.addAll(this.tweets);
  }

  filterByAuthor() {
    if (filterConfig?.author) {
      return this.tweetsState = this.tweetsState.filter(el => el.author === filterConfig.author);
    }
  }

  filterByDate() {
    if (filterConfig?.dateFrom && filterConfig?.dateTo) {
      return this.tweetsState = this.tweetsState.filter(el => el.createdAt >= filterConfig.dateFrom && el.createdAt <= filterConfig.dateTo);
    }
    if (filterConfig?.dateFrom) {
      return this.tweetsState = this.tweetsState.filter(el => el.createdAt > filterConfig.dateFrom);
    }
    if (filterConfig?.dateTo) {
      return this.tweetsState = this.tweetsState.filter(el => el.createdAt < filterConfig?.dateTo);
    }
  }

  filterByText() {
    if (filterConfig?.text) {
      return this.tweetsState = this.tweetsState.filter(el => {
        if (el.text.includes(filterConfig.text)) {
          return el;
        }
      });
    }
  }

  filterByHashtag() {
    if (filterConfig?.hashTag) {
      return this.tweetsState = this.tweetsState.filter(el => {
        const arrText = el.text.split(' ');
        // const diff = (a1, a2) => a1.filter(i => a2.includes(i));
        // if (diff(arrText, filterConfig?.hashTags).length === filterConfig?.hashTags.length) {
        //   return el;
        // }
        if (arrText.includes(filterConfig.hashTag)) {
          return el;
        }
      });
    }
  }

  sorting(skip = 0, top = 10) {
    return this.tweetsState.sort((a, b) => a.createdAt - b.createdAt)
      .slice(skip, skip + top);
  }

  getPage(skip = 0, top = 10, filterConfig = {}) {
    this.tweetsState = [...this.list];
    if (Object.keys(filterConfig).length === 0) {
      return this.sorting(skip, top);
    } else {
      this.filterByAuthor();
      this.filterByDate();
      this.filterByText();
      this.filterByHashtag();
      return this.sorting(skip, top);
    }

  }

  get(id) {
    return this.list.find(el => el.id === `${id}`);
  }

  addTweet(text) {

    const date = new Date();
    const options = {
      id: String(+date),
      text,
      createdAt: date,
      author: this.user,
      comments: []
    };

    if (!Tweet.validate(options)) {
      return false;
    }

    const newTweet = new Tweet(options);
    this.list.push(newTweet);

    return true;
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

    const objRemove = this.get(id);
    const numInArr = this.list.findIndex(el => el.id === id);

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
      author: this.user
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

  clear() {
    this.list = [];
  }

  getList() {
    return this.list;
  }
}

const filterConfig = {
  author: 'Bill Gates',
  hashTag: '#FINE',
  dateFrom: new Date('2022-03-02T23:55:25'),
  dateTo: new Date('2022-03-15T23:55:25'),
  text: 'know'
};

const newTweetFeed = new TweetFeed();
console.log(newTweetFeed.getPage(0, 10, filterConfig));

class TweetFeedView {

  constructor(id) {
    this.containerId = id;
    this.list = [];
    this.tweets = tweets;
    this.addAll(this.tweets);
  }

  static month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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

  static pseudo = name => name.split(' ')
    .slice(1);

  static postsTime(el) {
    if ((Date.now() - el.createdAt) < 86400000) {
      return ((Date.now() - el.createdAt.getTime()) / 1000 / 60 / 60).toFixed() + 'h.';
    } else {
      return `${el.createdAt.getDate()}${TweetFeedView.month[el.createdAt.getMonth()]} ${el.createdAt.getHours()}h.`;
    }
  }

  setCurrentUser(user) {

    if (!TweetFeed.validateUser(user)) {
      throw new Error('Validate user error');
    }

    this.user = user;
  }

  display() {
    const tweetContainer = document.querySelector(this.containerId);
    this.list.forEach(el => {
      tweetContainer.insertAdjacentHTML('afterBegin',
        `<div class="posts__public">
                <div class="posts__user_img"><img src="./imgs/${TweetFeedView.pseudo(el.author) + '.png'}" alt="picture" class="posts__add_picture">
                </div>
                <div class="posts__user">
                      <h3>${el.author}</h3>
                      <span class="posts__psevdo">${'@' + TweetFeedView.pseudo(el.author)}</span>
                      <svg width="27" height="8" id="svg-edit" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_b_136_208)"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.16667 3.58333C6.16667 5.01007 5.01007 6.16667 3.58333 6.16667C2.1566 6.16667 1 5.01007 1 3.58333C1 2.1566 2.1566 1 3.58333 1C4.26848 1 4.92556 1.27217 5.41003 1.75664C5.8945 2.24111 6.16667 2.89819 6.16667 3.58333Z" stroke="#377DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9833 3.58333C15.9833 5.01007 14.8267 6.16667 13.4 6.16667C11.9732 6.16667 10.8167 5.01007 10.8167 3.58333C10.8167 2.1566 11.9732 1 13.4 1C14.8267 1 15.9833 2.1566 15.9833 3.58333Z" stroke="#377DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25.8002 3.58333C25.8002 5.01007 24.6436 6.16667 23.2169 6.16667C21.7901 6.16667 20.6335 5.01007 20.6335 3.58333C20.6335 2.1566 21.7901 1 23.2169 1C24.6436 1 25.8002 2.1566 25.8002 3.58333Z" stroke="#377DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><filter id="filter0_b_136_208" x="-108" y="-108" width="223.167" height="223.167" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImage" stdDeviation="54"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_136_208"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_136_208" result="shape"/></filter></defs></svg>
                      <div class="posts__content">
                        <span class="posts_time">${TweetFeedView.postsTime(el)}</span>
                        <article>${el.text}</article>
                        <div class="posts__comment">
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 7C16 10.866 12.418 14 8 14C6.58005 14.006 5.17955 13.6698 3.917 13.02L0 14L1.338 10.877C0.493 9.767 0 8.434 0 7C0 3.134 3.582 0 8 0C12.418 0 16 3.134 16 7ZM5 6H3V8H5V6ZM13 6H11V8H13V6ZM7 6H9V8H7V6Z" fill="#377DFF"/></svg>
                          <span class="posts__comment_number">${el.comments.length}</span>
                        </div>
                    </div>
                </div>
              </div>`);
    });
    console.log(this.list);
  }

  addTweet(text) {
    const date = new Date();
    const options = {
      id: String(+date),
      text,
      createdAt: date,
      author: this.user,
      comments: []
    };

    if (!Tweet.validate(options)) {
      return false;
    }

    const newTweet = new Tweet(options);
    this.list.push(newTweet);

    return true;
  }

  get(id) {
    return this.list.find(el => el.id === `${id}`);
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

    // const objRemove = this.get(id);
    const numInArr = this.list.findIndex(el => el.id === id);

    if (TweetFeed.validateUser(this.user)) {
      this.list.splice(numInArr, 1);
      return true;
    }

    return false;
  }

  getFeed(arr) {
    this.list = arr;
  }

}

// const tf = (new TweetFeed('Bill Gates', tweets));
// console.log(tf.edit('13','123'));
// console.log(tf.add('123'));
// console.log(tf.getList())
// console.log(tf.get('13'))
// console.log(tf.getPage(0, 10, filterConfig));
// console.log(tf.getPage(0,10,filterConfig))
// console.log(tf.getPage())

class HeaderView {

  constructor(id) {
    this.containerId = id;
    this.user = 'Bill Gates';
    // this.display(this.user);
  }

  static pseudo(name) {
    const pseudo = name.split(' ');
    return pseudo.slice(1);
  }

  static validateUser(user) {
    return typeof user === 'string' && user.trim().length;
  }

  display() {
    const userOn = document.querySelector(this.containerId)
      .querySelector('.header__user');
    const userOff = document.querySelector(this.containerId)
      .querySelector('.header__buttons');
    const userName = userOn.querySelector('h3');
    // <img src="./imgs/bill.png" alt="user_icon"/>
    const userPicture = userOn.querySelector('img');
    if (this.user === null) {
      userOn.classList.add('dn');
      userOff.classList.add('df');
    }
    if (HeaderView.validateUser(this.user)) {
      userOff.classList.add('dn');
      userOn.classList.add('df');
      userName.textContent = this.user;
      userPicture.src = `./imgs/${HeaderView.pseudo(this.user) + '.png'}`;
    }
  }

  setCurrentUser(user) {
    if (!TweetFeed.validateUser(user)) {
      throw new Error('Validate user error');
    }
    this.user = user;
  }

}

class Global {
  constructor(arr) {
    this.arrHeadTf = arr;
  }

  setCurrentUser(name) {
    (this.arrHeadTf)[0].forEach(el => {
      el.setCurrentUser(name);
    });
  }

  addTweet(text) {
    (this.arrHeadTf)[1].forEach(el => {
      el.addTweet(text);
    });
  }

  editTweet(id, text) {
    (this.arrHeadTf)[1].forEach(el => {
      el.editTweet(id, text);
    });
  }

  removeTweet(id) {
    (this.arrHeadTf)[1].forEach(el => {
      el.removeTweet(id);
    });
  }

  getAdd(skip = 0, top = 10, filterConfig) {
    (this.arrHeadTf)[1][1].getFeed((this.arrHeadTf)[1][0].getPage(skip, top, filterConfig))
  }
}

const head = new HeaderView('#container__user');
const newTf = new TweetFeed();
const tweetsView = new TweetFeedView('#posts__loaded');
const newGlobal = new Global([[newTf, head, tweetsView], [newTf, tweetsView]]);

// newGlobal.setCurrentUser("Kriztoffer Swank");
// newGlobal.setCurrentUser('Bill Gates');
// newGlobal.addTweet('vasya');
// newGlobal.editTweet('13', 'parampampam');
// newGlobal.removeTweet('8');
// // newTf.addTweet('text');
newGlobal.getAdd(0,10,filterConfig)
// console.log(newTf.list);
//
head.display();
tweetsView.display();

class FilterView {

  constructor(id) {
    this.containerId = id;
    this.list = [];
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

  findUniqNames(list, filterName) {
    const arrNames = [];

    list.forEach(el => arrNames.push(el.author));
    const arrUniqNames = Array.from(new Set(arrNames));

    arrUniqNames.forEach(el => {
      const option = document.createElement('option');
      option.textContent = `${el}`;
      option.value = el;
      filterName.append(option);
    });
  }

  findHashtags(list, filter) {
    const hashtags = [];

    list.forEach(el => {
      const textArr = el.text.split(' ');
      textArr.forEach(el => {
        if (el[0] === '#') {
          hashtags.push(el);
        }
      });

    });
    const arrUniqHashtags = Array.from(new Set(hashtags));

    arrUniqHashtags.forEach(el => {
      const option = document.createElement('option');
      option.textContent = `${el}`;
      option.value = el;
      filter.append(option);
    });

  }

  addFilterConfig(author, dateFrom, dateTo, text, hashtags) {
    const filterConfig = {};
    if (author) {
      filterConfig.author = author;
    }
    if (dateFrom) {
      filterConfig.createdAt = dateFrom;
    }
    if (dateTo) {
      filterConfig.createdFrom = dateTo;
    }
    if (text) {
      filterConfig.text = text;
    }
    if (hashtags) {
      filterConfig.hashTags = hashtags;
    }
    console.log(filterConfig);
  }

  display(tws) {
    this.addAll(tws);
    const filterName = document.querySelector(this.containerId)
      .querySelector('.filters__name_select');
    const filterDateFrom = document.querySelector(this.containerId)
      .querySelector('.filters__date_from');
    const filterDateTo = document.querySelector(this.containerId)
      .querySelector('.filters__date_to');
    const filtersBtn = document.querySelector(this.containerId)
      .querySelector('.filters__btn');
    const filtersText = document.querySelector(this.containerId)
      .querySelector('.filters__text_value');
    const filtersHashtags = document.querySelector(this.containerId)
      .querySelector('.filters__hashtags_select');
    this.findUniqNames(this.list, filterName);
    this.findHashtags(this.list, filtersHashtags);
    filtersBtn.addEventListener('click', () => {
      return this.addFilterConfig(filterName.value, filterDateFrom.value, filterDateTo.value, filtersText.value, filtersHashtags.value);
    });
  }
}

const fw = new FilterView('#filters');
fw.display(tweets);

// export {TweetFeedView,HeaderView,Tweet,Comment,TweetFeed,tweets}






















