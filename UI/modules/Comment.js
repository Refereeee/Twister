export class Comment {
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
      .every((key) => Object.keys(comment)
        .includes(key))) {
      return false;
    }
    return true;
  }

  constructor(options) {
    // if (!Comment.validate(options)) {
    //   throw new Error('Comment validate failed');
    // }

    this._id = options.id;
    this._createdAt = new Date(options.createdAt);
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
    `can not change this date on ${date}`;
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

  toJSON() {
    return {
      id: this._id,
      author: this._author,
      text: this._text,
      createdAt: this._createdAt,
    };
  }
}
