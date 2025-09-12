export class Note {
  constructor({ id = Date.now(), title = "", content = "" }) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  update({ title, content }) {
    return new Note({
      id: this.id,
      title: title ?? this.title,
      content: content ?? this.content,
    });
  }
}
