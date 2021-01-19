function callback(mensaje) {
  console.log(mensaje);
}

function createQuote(quote, fn) {
  var myQuote = "Like I always say, " + quote;
  fn(myQuote); //2
}

createQuote("eat your vegetables", callback); //1
