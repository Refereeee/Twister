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
    }
    ,
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
    }, {
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
        hashTags: 'person',
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
        hashTags: 'person',
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
        hashTags: 'person',
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
        hashTags: 'person',
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
        hashTags: 'person',
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
        hashTags: 'person',
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
        hashTags: 'person',
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
        hashTags: 'person',
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
];




const myModule = (function () {
    let user = "Bill Gates";

    let tweetsState = [...tweets];

    const sorting = (skip=0,top=10) => {
        return tweetsState.sort((a, b) => a.createdAt - b.createdAt).slice(skip, skip + top)
    }

    const filterByAuthor = () => {
        if (filterConfig?.author) {
            return tweetsState = tweetsState.filter(el => el.author === user);
        }
    }

    const filterByDate = () => {
        if (filterConfig?.dateFrom && filterConfig?.dateTo) {
            return tweetsState = tweetsState.filter(el => el.createdAt >= filterConfig.dateFrom && el.createdAt <= filterConfig.dateTo)
        }
        if (filterConfig?.dateFrom) {
            return tweetsState = tweetsState.filter(el => el.createdAt > filterConfig.dateFrom)
        }
        if (filterConfig?.dateTo) {
            return tweetsState = tweetsState.filter(el => el.createdAt < filterConfig?.dateTo)
        }
    }


    const filterByHashtags = () => {
        if (filterConfig?.hashTags) {
            return tweetsState = tweetsState.filter(el => {
                if (filterConfig.hashTags.includes(el.hashTags)) {
                    return el
                }
            })
        }
    }

    const filterByText = () => {
        if (filterConfig?.text) {
            return tweetsState = tweetsState.filter(el => {
                if (el.text.includes(filterConfig.text)) {
                    return el
                }
            })
        }
    }


    const getTweets = (skip = 0, top = 10, filterConfig = {}) => {
        if (filterConfig === {}) {
            return sorting(skip,top)
        }

        if (filterConfig !== undefined) {
            filterByAuthor()
            filterByDate()
            filterByHashtags()
            filterByText()
            return sorting(skip,top)
        }
    }

    const getTweet = id => tweets.find(el => el.id === `${id}`);

    const validateTweet = tweet => {
        if (typeof tweet.id === "string" && typeof tweet.createdAt === "object" && (typeof tweet.text === "string" && tweet.text.length <= 280) && (typeof tweet.author === "string" && tweet.author.length > 0) && Array.isArray(tweet.comments)) {
            return true
        }
        return false
    }

    const validateComments = com => {
        if (typeof com.id === "string" && typeof com.createdAt === "object" && (typeof com.text === "string" && com.text.length <= 280) && (typeof com.author === "string" && com.author.length > 0)) {
            return true
        }
        return false
    }

    const addTweet = text => {
        const newTweet = new Object();
        newTweet.id = String(+(new Date()));
        newTweet.createdAt = new Date();
        newTweet.author = user;
        newTweet.text = text;
        newTweet.comments = [];
        if (validateTweet(newTweet)) tweets.push(newTweet)
    }

    const editTweet = (id, text) => {
        const editObj = getTweet(id);
        if (validateTweet(editObj) && editObj.author === user && (typeof text === "string" && text.length <= 280)) {
            editObj.text = text;
            return true
        }
        return false
    }

    const removeTweet = id => {
        const objRemove = getTweet(id);
        const numInArr = tweets.findIndex(el => el.id === id)
        if (objRemove.author === user) {
            tweets.splice(numInArr, 1)
            return true
        }
        return false
    }

    const addComment = (id, text) => {
        const comArr = getTweet(id).comments;
        console.log(comArr);
        const comObj = new Object();
        comObj.id = String(+(new Date()));
        comObj.text = text;
        comObj.createdAt = new Date();
        comObj.author = user;
        if (validateComments(comObj)) {
            comArr.push(comObj)
            return true
        }
        return false
    }


    const changeUser = (usr) => user = usr



    return {
        filterByAuthor,
        filterByDate,
        filterByHashtags,
        filterByText,
        sorting,
        getTweets,
        getTweet,
        addTweet,
        editTweet,
        removeTweet,
        addComment,
        changeUser,
    };


})()

const filterConfig = {
    author: "Bill Gates",
    dateFrom: new Date('2022-03-02T23:55:25'),
    dateTo: new Date('2022-03-15T23:55:25'),
    hashTags: ['newbie', 'person'],
    text: 'know'
}


console.log(myModule.getTweets())

console.log(editTweet(13, 'new fallen'))
console.log(getTweet(13))
console.log(removeTweet("13"))
console.log(tweets);
console.log(addComment(5, 'i feel you'));
console.log(getTweet(5));
console.log(changeUser("Barak Obama"));
console.log(tweets)


