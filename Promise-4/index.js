const food = new Promise((resolve, reject) => {
    resolve('steak');
  })


// resolve food here: 



// **Challenge 1** Resolve your promise with the name of your favorite food. 
// Do this by calling the `resolve` with an argument. 

// **Challenge 2** Resolve the promise `food` with the `.then()` syntax 
// and print your favorite food to the console. 
food.then(favoriteFood => console.log(favoriteFood));

