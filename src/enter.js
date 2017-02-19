import styles from "./style.css";
document.write("It works.");
document.write(require('./module.js'))

let person = require('./test.js');
person.user("Ho",21);

let eventUntil = require('./eventUntil.js');
eventUntil("great");

let newOne = require('./new.js');
newOne();
