import {editTweet, removeTweet, showTweet} from '../../index.js';

export class TweetFeedView {
  static month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  constructor(containerId) {
    this.tweetContainer = document.querySelector(containerId);
  }

  static nickname = (name) => name.split(' ').slice(1);

  static postsTime(el) {
    if ((Date.now() - el.createdAt) < 86_400_000) { // 24 * 60 * 60 * 1000
      return `${((Date.now() - el.createdAt.getTime()) / 36000).toFixed()}h.`; // 1000 / 60 /60
    }
    return `${el.createdAt.getDate()}${TweetFeedView.month[el.createdAt.getMonth()]} ${el.createdAt.getHours()}h.`;
  }

  display(list) {
    const backMainArrow = document.querySelector('.back__main');
    const tweetViewContainer = document.querySelector('#tweet');
    const login = document.querySelector('#login');
    const posts = document.querySelector('.posts');
    const filters = document.querySelector('#filters');
    const registration = document.querySelector('#registration');
    registration.classList.add('hidden');
    login.classList.add('hidden');
    tweetViewContainer.classList.add('hidden');
    backMainArrow.classList.add('hidden');
    posts.classList.remove('hidden');
    filters.classList.remove('hidden');
    console.log(list);
    list.forEach((el) => {
      this.tweetContainer.insertAdjacentHTML(
         'afterbegin',
         `<div class="posts__public" data-tweet="${el.id}" id="tweet_${el.id}">
                <div class="posts__user_img"><img src="./images/${`${TweetFeedView.nickname(el.author)}.png`}" alt="picture" class="posts__add_picture">
                </div>
                <div class="posts__user">
                      <h3>${el.author}</h3>
                      <span class="posts__nickname">${`@${TweetFeedView.nickname(el.author)}`}</span>
                      <div class="svg-edit"><img src="./svg/edit.svg" class="edit" alt="edit" data-tweet="${el.id}"><div class="dropdown-content"><a href="#" class="edit-tweet" data-tweet="${el.id}">edit</a><a href="#" class="remove-tweet" data-tweet="${el.id}">remove</a></div></div>
                      <div class="posts__content">
                        <span class="posts_time">${TweetFeedView.postsTime(el)}</span>
                        <article class="posts_main_text" data-tweet="${el.id}">${el.text}</article>
                        <div class="posts__comment">
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 7C16 10.866 12.418 14 8 14C6.58005 14.006 5.17955 13.6698 3.917 13.02L0 14L1.338 10.877C0.493 9.767 0 8.434 0 7C0 3.134 3.582 0 8 0C12.418 0 16 3.134 16 7ZM5 6H3V8H5V6ZM13 6H11V8H13V6ZM7 6H9V8H7V6Z" fill="#377DFF"/></svg>
                          <span class="posts__comment_number">${el.comments.length}</span>
                        </div>
                    </div>
                </div>
              </div>`,
      );
      const token = JSON.parse(localStorage.getItem('token'));
      this.tweetContainer.querySelector(`#tweet_${el.id}`).addEventListener('click', (e) => {
        showTweet(e.currentTarget.dataset.tweet);
      });
      const textValue = this.tweetContainer.querySelector(`#tweet_${el.id} .posts_main_text`)
      this.tweetContainer.querySelector(`#tweet_${el.id} .edit-tweet`).addEventListener('click', (e) => {
        e.stopPropagation();
        if(el.author === token.login){
          const findId = e.currentTarget.dataset.tweet;
          textValue.setAttribute('contentEditable', true);
          e.preventDefault();
          textValue.focus();

          textValue.addEventListener('blur',()=>{
            editTweet(findId,textValue.textContent)
          })
        }
        else{
          e.preventDefault();
        }
        })

        this.tweetContainer.querySelector(`#tweet_${el.id} .remove-tweet`).addEventListener('click',(e)=>{
          // console.log(el.author);
          e.stopPropagation();

            if (token) {
              if(el.author === token.login){
                  removeTweet(e.currentTarget.dataset.tweet);
              }
              else{
                e.preventDefault();
              }
            }
        })
    });
  }

  clear() {
    this.tweetContainer.innerHTML = '';
  }
}
