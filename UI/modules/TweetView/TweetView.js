export class TweetView {
  constructor(containerId) {
    this.containerId = document.querySelector(containerId);
  }

  static month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  static nickname = (name) => name.split(' ').slice(1);

  static commentTime = (el) => {
    if ((Date.now() - el.createdAt) < 86_400_000) {
      return `${((Date.now() - el.createdAt.getTime()) / 1000 / 60 / 60).toFixed()}h.`;
    }
    return `${el.createdAt.getDate()}${TweetView.month[el.createdAt.getMonth()]} ${el.createdAt.getHours()}h.`;
  };

  static postMinutes = (el) => {
    if (el.createdAt.getMinutes() < 10) {
      return `0${el.createdAt.getMinutes()}`;
    }
    return el.createdAt.getMinutes();
  };

  static getAmPm = (el) => {
    if (el.createdAt.getHours() >= 12) {
      return 'PM';
    }
    return 'AM';
  };

  static postTime = (el) => `${el.createdAt.getHours()}:${TweetView.postMinutes(el)} ${TweetView.getAmPm(el)} | ${TweetView.month[el.createdAt.getMonth()]} ${el.createdAt.getDate()}, ${el.createdAt.getFullYear()}`;

  display(tweet) {
    const posts = document.querySelector('.posts');
    const filters = document.querySelector('#filters');
    const login = document.querySelector('#login');
    const registration = document.querySelector('#registration');
    const back = document.querySelector('.back__main');
    back.classList.remove('hidden');
    this.containerId.classList.remove('hidden');
    registration.classList.add('hidden');
    login.classList.add('hidden');
    filters.classList.add('hidden');
    posts.classList.add('hidden');
    this.containerId.insertAdjacentHTML(
      'afterbegin',
      `<div class="twit__wrapper">
              <div class="posts__public">
                  <div class="posts__user_img">
                    <img src="./images/${TweetView.nickname(tweet.author)}.png" alt="picture" class="posts__add_picture">
                  </div>
                  <div class="posts__user">
                      <h3>${tweet.author}</h3>
                      <span class="posts__nickname">@${TweetView.nickname(tweet.author)}</span>
                        <img src="../../svg/edit.svg" class="svg-edit" alt="edit"> 
                    <div class="posts__content">
                          <span class="posts_time">${TweetView.postTime(tweet)}</span>
                          <article>${tweet.text}</article>
                      <div class="posts__comment">
                           <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 7C16 10.866 12.418 14 8 14C6.58005 14.006 5.17955 13.6698 3.917 13.02L0 14L1.338 10.877C0.493 9.767 0 8.434 0 7C0 3.134 3.582 0 8 0C12.418 0 16 3.134 16 7ZM5 6H3V8H5V6ZM13 6H11V8H13V6ZM7 6H9V8H7V6Z" fill="#377DFF"/></svg>
                           <span class="posts__comment_number">${tweet.comments.length}</span>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          <div class="twit__comments">
          </div>`,
    );
    const commentsHtml = document.querySelector('.twit__comments');
    tweet.comments.forEach((el) => {
      commentsHtml.insertAdjacentHTML(
        'afterbegin',
        `<div class="twit__comment">
                    <div class="posts__user_img"><img src="./images/${TweetView.nickname(el.author)}.png" alt="picture" class="posts__add_picture">
                    </div>
                    <div class="posts__user">
                        <h3>${el.author}</h3>
                        <span class="posts__nickname">@${TweetView.nickname(el.author)}</span>=
                        <div class="posts__content">
                            <span class="posts_time">${TweetView.commentTime(el)}</span>
                            <article>${el.text}</article>
                        </div>
                    </div>
                </div>`,
      );
    });
  }

  clear() {
    this.containerId.innerHTML = '';
  }
}
