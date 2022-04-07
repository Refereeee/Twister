import { usersMock } from '../../mock/users.js';

export class UserCollection {
  // eslint-disable-next-line no-shadow
  constructor(usersMock) {
    this.users = [];
    const storage = localStorage.getItem('server-users') || JSON.stringify(usersMock);
    try {
      this.users = JSON.parse(storage);
    } catch (e) {
      this.users = usersMock;
    }
    this.save();
  }

  save() {
    localStorage.setItem('server-users', JSON.stringify(this.users));
  }

  register(user) {
    this.users.push(user);
    this.save();
  }

  login(login, password) {
    const user = this.users.find((user) => user.login === login && user.password === password);

    if (user) {
      return JSON.stringify(user); // Это типа токен JWT
    }

    return false;
  }

  verify(token) {
    try {
      const { login, password } = JSON.parse(token); // JWT

      const user = this.users.find((user) => user.login === login && user.password === password);

      if (user) {
        return user;
      }
    } catch (e) {
      return false;
    }

    return false;
  }
}

export const userCollection = new UserCollection(usersMock);
