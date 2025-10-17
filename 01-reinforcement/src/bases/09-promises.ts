const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(100);
    reject("Mi amigo se perdió");
  }, 2000);
});

myPromise
  .then((myMoney) => {
    console.log(`My money is back: ${myMoney}`);
  })
  .catch((reason) => console.log(reason))
  .finally(() => console.log("A seguir con la vida..."));
