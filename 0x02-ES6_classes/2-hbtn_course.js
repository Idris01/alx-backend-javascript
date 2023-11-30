export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== typeof '') throw new TypeError('Name must be a string');
    if (typeof length !== typeof 1) throw new TypeError('Length must be a number');
    if (!Array.isArray(students)) throw new TypeError('Students must be a array');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== typeof '') throw new TypeError('Name must be a string');
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== typeof 1) throw new TypeError('Length must be a number');
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students)) throw new TypeError('Students must be a array');
    this._students = students;
  }
}
