const app = require("../app");

console.log(app().if(true)
    .then(() => 'a')
    .else(() => 'b')
);

console.log(app().if(true)
    .then(() => 'a')
    .getResult()
);