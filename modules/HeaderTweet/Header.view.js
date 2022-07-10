// import { TweetFeed } from '../TweetFeed/TweetFeed.js';
import { Header } from './Header.js';

export class HeaderView {
  constructor(id) {
    this.containerId = document.querySelector(id);
  }

  display(userName) {
    const userOn = this.containerId.querySelector('.header__user');
    const userOff = this.containerId.querySelector('.header__buttons');

    if (!userName) {
      userOn.classList.add('hidden');
      userOff.classList.remove('hidden');
      console.log(userName);
    }

    if (Header.validateUser(userName)) {
      userOff.classList.add('hidden');
      userOn.classList.remove('hidden');

      userOn.querySelector('h3').textContent = userName;
      userOn.querySelector('img').src = `./images/${`${Header.nickname(userName)}.png`}`;
    }
  }

  clear() {
    this.containerId.innerHTML = '';
  }
}
