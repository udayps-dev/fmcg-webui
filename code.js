


function fetchData(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Step ${x} completed`);
    }, 1000); // Simulate a 1-second operation
  });
}


// (async function() {
//   console.log('==START==');
//   console.log(await fetchData(1));
//   console.log(await fetchData(2));
//   console.log(await fetchData(3));
//   console.log('==END==');
// })();

console.log('==START==');

let x =fetchData(1).then(data => {
  console.log(data);
  return fetchData(2);
})
