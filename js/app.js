// Array of Tweets 
var tweets = [
  {
    "content" : "MY DENTIST ASKED HIS ASSISTANT TO SUCTION (THE WATER OUT OF MY MOUTH)BUT I THOUGHT HE WAS TALKING TO ME SO I SUCKED HIS FINGER. IM MORTIFIED",
    "username" : "@sarbeaaaar",
    "created_at" : "01/03/2017",
    "age" : 25
  },
  {
    "content" : "I like it when they put 'the end' after a movie, so that you know not to stay sat in your seat for the rest of your life.",
    "username" : "@JimMFelton",
    "created_at" : "05/02/2016",
    "age" : 28
  },
  {
    "content" : "FIRST PERSON TO GET A CAT: haha this thing is an asshole I’m gonna keep it",
    "username" : "@thetators",
    "created_at" : "05/03/2016",
    "age" : 17
  },
  {
    "content" : "(to my date after each preview at a movie) the actual film will be much longer than that",
    "username" : "@bobvulfov",
    "created_at" : "05/02/2016",
    "age" : 24
  },
  {
    "content" : "Congratulations on becoming a contestant on the Price is Right. Please, put on this clothing from 1979 and follow me.",
    "username" : "@squirrel74wkgn",
    "created_at" : "05/02/2016",
    "age" : 20
  },
  {
    "content" : "inside washing machine - duvet cover: climb in my brothers. Every single piece of clothing: we shall build a new life in the big sock",
    "username" : "@jazzemu",
    "created_at" : "07/06/2020",
    "age" : 25
  },
  {
    "content" : "my daily routine is very simple. i wake up and i suffer",
    "username" : "@650Br4ndon",
    "created_at" : "06/27/2020",
    "age" : 16
  },
  {
    "content" : "call me zack cuz idk what the effron with me",
    "username" : "@illijay1k",
    "created_at" : "06/14/2020",
    "age" : 25
  },
  {
    "content" : "When you type an entire rant and decide not to press send",
    "username" : "@RogueZuko",
    "created_at" : "05/25/2020",
    "age" : 27
  },
  {
   "content" : "Taking inspiration from birds and every few minutes just letting out a big scream",
   "username" : "@figgled",
   "created_at" : "04/29/2020",
   "age" : 15 
  }
];

// For loop to iterate through array

// for(var counter = 0; counter < tweets.length; counter++) {
//       console.log(tweets[counter].content);
//       console.log(tweets[counter].username);
//       console.log(tweets[counter].created_at);
//   }


// W9E //
function checkOverEighteen(user) {
      if(user.age >= 18) {
          return true;
      } else if(user.age < 18) {
          return false;
      } else {
          console.log("Oops! There's been an error.")
      }
}


var isOverEighteen = tweets.filter(checkOverEighteen);
console.log(isOverEighteen);












