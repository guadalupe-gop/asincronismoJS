// ES6
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey!");
    } else {
      reject("Whoooops!");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Whoooops!");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
