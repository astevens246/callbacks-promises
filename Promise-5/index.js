function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    if (timeOfDay === 'breakfast') {
      resolve('eggs');
    } else if (timeOfDay === 'lunch') {
      resolve('burger');
    }
    else if (timeOfDay === 'dinner') {
      resolve('steak');
    }
    else {
      reject("I don't eat between meal snacks!");
    }
  });
  
}

// whatToEat should return a promise. 
// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 
// If the `timeOfDay` is anything else reject the promise with 
// the the message: "I don't eat between meal snacks!"

// Handle the Promise returned from whatToEat here: 

whatToEat('lunch')
  .then((food) => {
    console.log('I will eat', food);
  })
  .catch((err) => {
    console.log(err);
  });

// Handle this Promise: 
whatToEat('elevens')
  .then((food) => {
    console.log('I will eat', food);
  })
  .catch((err) => {
    console.log(err);
  });
