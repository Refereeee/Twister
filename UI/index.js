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
        createdAt: new Date('2022-03-25T23:00:00'),
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
        createdAt: new Date('2022-03-08T23:25:00'),
        author: 'Barack Obama',
        comments: [{
            id: '1000',
            text: 'I look for every opportunity to talk about Doom 64s lighting. It\'s sublime on a CRT',
            createdAt: new Date('2022-03-08T23:35:05'),
            author: 'Bill Gates',
        },
            {
                id: '1001',
                text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
                createdAt: new Date('2022-03-08T23:45:15'),
                author: 'Daniel Adams',
            },
            {
                id: '1002',
                text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
                createdAt: new Date('2022-03-08T23:55:25'),
                author: 'Ricardo Cromento',
            }
        ],
    },
    {
        id: '7',
        text: 'Sunday is for anime series on Netflix, game ( elden ring ) and chill. Wanna join me?',
        createdAt: new Date('2022-03-07T23:25:00'),
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
                createdAt: new Date('2022-03-07T23:45:15'),
                author: 'Daniel Adams',
            },
            {
                id: '1102',
                text: 'Doom 64 actually had a really cool aesthetic. For what was supposed to be a spinoff/port, i',
                createdAt: new Date('2022-03-07T23:55:25'),
                author: 'Ricardo Cromento',
            }
        ],
    },
    {
        id: '8',
        text: 'It has been over a year since wild polio paralyzed a child in Pakistan, presenting',
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
        text: 'By acting now and know how funding organizations like ',
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
        text: 'By acting know how funding organizations like ',
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
    }

    static validate(comment){
        for(const [key,value] of Object.entries(comment)){
            if(!Object.keys(Comment.validateStructure).includes(key)){
                return false
            }
            if(!Comment.validateStructure[key](value)){
                return false
            }
        }
        if(!Object.keys(Comment.validateStructure).every(key => Object.keys(comment).includes(key))){
            return false
        }
        return true
    }

    constructor(options) {

        if(!Comment.validate(options)){
            throw new Error('Comment validate failed')
        }

        this._id = options.id
        this._createdAt = options.createdAt
        this._author = options.author
        this._text = options.text
    }

    get id() {
        return this._id
    }


    get createdAt() {
        return this._createdAt
    }


    get author() {
        return this._author;
    }


    get text() {
        return this._text
    }

}

const comment = new Comment({
    id: "50000",
    createdAt: new Date('2022-03-03T23:55:25'),
    author: "Bill Gates",
    text: "Public calls to violence have no place on Telegram",
})

console.log(comment)

class Tweet {

    static maxValueLength = 280;

    static validateStructure = {
        id: (val) => typeof val === 'string' && val.trim().length,
        createdAt: (val) => typeof val === 'object' && val instanceof Date,
        text: (val) => typeof val === 'string' && val.length <= Tweet.maxValueLength && val.length,
        author: (val) => typeof val === 'string' && val.trim().length,
        comments: (val) => Array.isArray(val)
    }

    static validate(tweet){
        for(const [key,value] of Object.entries(tweet)){
            if(!Object.keys(Tweet.validateStructure).includes(key)){
                return false
            }
            if(!Tweet.validateStructure[key](value)){
                return false
            }
        }
        if(!Object.keys(Tweet.validateStructure).every(key => Object.keys(tweet).includes(key))){
            return false
        }
        return true
    }

    constructor(options) {

        if(!Tweet.validate(options)){
            throw new Error('Tweet validate failed')
        }

        this._id = options.id
        this._createdAt = options.createdAt
        this._author = options.author
        this._text = options.text
        this._comments = options.comments
    }

    get id() {
        return this._id
    }


    get createdAt() {
        return this._createdAt
    }


    get author() {
        return this._author;
    }


    get text() {
        return this._text
    }

    get comments (){
        return this._comments
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

    _list =[]

    static maxValueLength = 280;
    static validateUser(user) {
        return typeof user === 'string' && user.trim().length;
    }

    constructor(user,tws) {

        if(!TweetFeed.validateUser(user)){
            throw new Error ('Validate user error')
        }
        this._user = user
        this._tweets = tws

    }

    get user (){
        return this._user
    }

    filterByAuthor() {
        if (filterConfig?.author) {
            return this._tweets = this._tweets.filter(el => el.author === this._user);
        }
    }

    filterByDate() {
        if (filterConfig?.dateFrom && filterConfig?.dateTo) {
            return this._tweets = this._tweets.filter(el => el.createdAt >= filterConfig.dateFrom && el.createdAt <= filterConfig.dateTo)
        }
        if (filterConfig?.dateFrom) {
            return this._tweets = this._tweets.filter(el => el.createdAt > filterConfig.dateFrom)
        }
        if (filterConfig?.dateTo) {
            return this._tweets = this._tweets.filter(el => el.createdAt < filterConfig?.dateTo)
        }
    }




    filterByText() {
        if (filterConfig?.text) {
            return this._tweets = this._tweets.filter(el => {
                if (el.text.includes(filterConfig.text)) {
                    return el
                }
            })
        }
    }
    sorting(skip = 0, top = 10) {
        return this._tweets = this._tweets.sort((a, b) => a.createdAt - b.createdAt).slice(skip, skip + top)
    }


    getPage(skip = 0, top = 10, filterConfig = {}) {
        if (Object.keys(filterConfig).length === 0) {
            return this.sorting(skip, top)
        } else {
            this.filterByAuthor()
            this.filterByDate()
            this.filterByText()
            return this.sorting(skip, top)
        }
    }

    get(id) {
        return tweets.find(el => el.id === `${id}`)
    }

    add(text) {

        const date = new Date();
        const options = {
            id: String(+date),
            text,
            createdAt:date,
            author: this._user,
            comments:[]
        };

        if(!Tweet.validate(options)) {
            return false
        }

        const newTweet = new Tweet(options);
        this._tweets.push(newTweet);

        return true
    }

    edit(id, text) {
        const editObj = this.get(id);

        if (Tweet.validate(editObj) && editObj.author === this._user && (typeof text === "string" && text.length <= TweetFeed.maxValueLength)) {
            editObj.text = text;
            return true
        }

        return false
    }

    remove(id) {

        const objRemove = this.get(id);
        const numInArr = this._tweets.findIndex(el => el.id === id)

        if (objRemove.author === this._user) {
            this._tweets.splice(numInArr, 1)
            return true
        }

        return false
    }

    addComment(id, text) {

        const comArr = this.get(id).comments;
        const date = new Date();

        const options = {
            id: String(+date),
            text,
            createdAt: date,
            author: this._user
        };

        if(!Comment.validate(options)) {
            return false

        }

        const newComment = new Comment(options);
        comArr.push(newComment);
        return true
    }

    changeUser(user) {

        if(!TweetFeed.validateUser(user)) {
            throw new Error('Validate user error')
        }

        this._user = user;
    }

    addAll(tws){

        const garbage = [];

        if(!Array.isArray(tws)){
            throw new Error('Error of tweets is not array')
        }

        for(const tw of tws) {
            if(typeof tw !== 'object' || !Tweet.validate(tw)){
                garbage.push(tw)
            }
            else{
                this._list.push(tw)
            }
        }
        return garbage
    }

    clear(){
        this._list = [];
    }

    get list (){
        return this._list
    }

    get tweets (){
        return this._tweets
    }
}

const filterConfig = {
    author: "Bill Gates",
    dateFrom: new Date('2022-03-02T23:55:25'),
    dateTo: new Date('2022-03-15T23:55:25'),
    text: 'know'
}
const tf = (new TweetFeed("Bill Gates",tweets));
console.log(tf.getPage())


// console.log(tf._edit('13','fast'));
// console.log(tf.get('13'));
// console.log(tf._remove('13'));
// console.log(tf._addComment('13','aiaiai'));
console.log(tf.changeUser("Vasya"));
// console.log(tf._addAll(tweets))
// console.log(tf.tweets);


