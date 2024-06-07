const p = new Promise((res, rej) => {
  res('first');
});

p.then((result) => {
  //
  console.log(result);
  return 'second';
})
  .then((result) => {
    console.log(result);
    return 'third';
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
