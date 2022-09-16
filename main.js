// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
FULL_HEART.class = `.activated-heart`

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
const hearts = document.querySelectorAll("span.like-glyph")

hearts.forEach(hearts => hearts.addEventListener("click", likeCallback))

function likeCallback(hearts) {
  console.log(hearts.target)
  mimicServerCall()
  .then(() => {
    if (hearts.target.innerText === EMPTY_HEART) {
      hearts.target.innerText = FULL_HEART
    }
    else if (hearts.target.innerText === FULL_HEART) {
      hearts.target.innerText = EMPTY_HEART
    }
  })
  .catch(() => {
    const erMsg = document.getElementById("modal")
    console.log(erMsg)
    erMsg.className = "show"

    setTimeout(() => {
      const erMsg = document.getElementById("modal")
      console.log(erMsg)
      erMsg.className = "hidden"}, 3000)}

  )}
  })
   
  




// // When a user clicks on an empty heart: Invoke `mimicServerCall` to simulate making a server request
// function findLikes() {
//   const likeArr = document.querySelectorAll(".like-glyph")

//   likeArr.forEach((singularLike) => {
//     singularLike.addEventListener("click", () => console.log("YOU FOUND ME"))
//   })
// }

// function clickListener() {
//   document.addEventListener('click', (event) => {
// // if I click on hearts then  console.log YOU LIKE 
//     if(event.target.classList[0] === 'like-glyph') {
//       //PROMISE ASYNCH WE NEED A .THEN 
//       mimicServerCall()
//       .then(resp => {
//         event.target.classList.remove("activated-heart");
//         event.target.innerHTML = FULL_HEART;
//       }

//       activated;
//     })
//       .catch(error => {
//         console.log(error);
//         errorModal.remove("hidden");
//         setTimeout(() => {
//           hideError();
//         }, 3000);
//       });
//     }
//   });
// }

 


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
