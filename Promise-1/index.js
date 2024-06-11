const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("--- Oops ---");
    resolve('>>> Success! <<<');
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// After 2 seconds, I saw 'Promise rejected! 😞' and '--- Oops ---' logged to the console.

// **2)** What happens when you call both `resolve` and `reject`? Test this.
// It was still rejected because the first one called was `reject`.

// **3)** Does the order matter you call resolve and reject matter? Test this. 
// Yes, the order matters. If `resolve` is called first, the promise will be resolved. If `reject` is called first, the promise will be rejected.

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// The promise will be resolved/rejected based on the first call. The subsequent calls will be ignored.
