function Error() {
  console.log("Lo siento putito, no se pudo hacer la consulta de la API 🤣");
}

const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Do Something Asyncs"), 3000)
      : reject(new Error("Test Error"));
  });
};

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

console.log("Before");
doSomething();
console.log("After");

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (Error) {
    // console.log(error);
  }
};

console.log("Before 1");
anotherFunction();
console.log("After 1");
