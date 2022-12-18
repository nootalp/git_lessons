const { Person } = require("./person");
const person = new Person("Gabriel");

require("./modules/path");
require("./modules/fs"); 

console.log(person.sayMyName());
