console.log('My Scripts')
let p = new Promise((resolve, reject) => {
  let a = 1 + 3;
  if (a == 2) {
    resolve("Success Sum");
  } else {
    reject("Failed Sum");
  }
});

p.then((firstMessage) => {
  console.log("This is the Then Success Sum!!" + firstMessage);
}).catch((firstMessage) => {
  console.log("This is the Failed Sum!!" + firstMessage);
});