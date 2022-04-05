// export class GlobalBehavior {
//   #objectsForSetUser = [];
//
//   #objectsForTweets = [];
//
//   #objectForFeed;
//
//   #objectForFeedView;
//
//   constructor(objectsForSetUser, objectsForTweets, objectForFeed, objectForFeedView) {
//     objectsForSetUser.forEach((object) => {
//       if (!object?.setCurrentUser || typeof object?.setCurrentUser !== 'function') {
//         throw new Error(`${object.className.name} do not have method setCurrentUser`);
//       }
//       this.#objectsForSetUser.push(object);
//     });
//
//     const objectsForTweetsMethods = ['addTweet', 'editTweet', 'removeTweet'];
//
//     objectsForTweets.forEach((object) => {
//       if (!objectsForTweetsMethods.every((method) => object?.[method] && typeof object?.[method] === 'function')) {
//         throw new Error(`${object.className.name} do not have method some method`);
//       }
//
//       this.#objectsForTweets.push(object);
//     });
//
//     this.#objectForFeed = objectForFeed;
//     this.#objectForFeedView = objectForFeedView;
//   }
//
//   setCurrentUser(name) {
//     this.#objectsForSetUser.forEach((el) => el.setCurrentUser(name));
//   }
//
//   addTweet(text) {
//     this.#objectsForTweets.forEach((el) => el.addTweet(text));
//   }
//
//   editTweet(id, text) {
//     this.#objectsForTweets.forEach((el) => el.editTweet(id, text));
//   }
//
//   removeTweet(id) {
//     this.#objectsForTweets.forEach((el) => el.removeTweet(id));
//   }
//
//   getFeed(skip = 0, top = 10, filterConfig = {}) {
//     this.#objectForFeedView.setFeed(this.#objectForFeed.getPage(skip, top, filterConfig));
//   }
//
//   showTweet(id) {
//     this.#objectForFeedView.showTweet(this.#objectForFeed.getArr(id));
//   }
// }
