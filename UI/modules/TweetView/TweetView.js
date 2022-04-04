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
    return `${el.createdAt.getDate()}${TweetView[el.createdAt.getMonth()]} ${el.createdAt.getHours()}h.`;
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
                      <svg width="27" height="8" viewBox="0 0 27 8" id="svg-edit" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_b_136_208)"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.16667 3.58333C6.16667 5.01007 5.01007 6.16667 3.58333 6.16667C2.1566 6.16667 1 5.01007 1 3.58333C1 2.1566 2.1566 1 3.58333 1C4.26848 1 4.92556 1.27217 5.41003 1.75664C5.8945 2.24111 6.16667 2.89819 6.16667 3.58333Z" stroke="#377DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9833 3.58333C15.9833 5.01007 14.8267 6.16667 13.4 6.16667C11.9732 6.16667 10.8167 5.01007 10.8167 3.58333C10.8167 2.1566 11.9732 1 13.4 1C14.8267 1 15.9833 2.1566 15.9833 3.58333Z" stroke="#377DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25.8002 3.58333C25.8002 5.01007 24.6436 6.16667 23.2169 6.16667C21.7901 6.16667 20.6335 5.01007 20.6335 3.58333C20.6335 2.1566 21.7901 1 23.2169 1C24.6436 1 25.8002 2.1566 25.8002 3.58333Z" stroke="#377DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><filter id="filter0_b_136_208" x="-108" y="-108" width="223.167" height="223.167" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImage" stdDeviation="54"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_136_208"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_136_208" result="shape"/></filter></defs></svg>
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
                        <span class="posts__nickname">@${TweetView.nickname(el.author)}</span>
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
