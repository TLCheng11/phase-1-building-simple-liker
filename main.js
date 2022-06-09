// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.querySelectorAll(".like-glyph").forEach(heart => {
  heart.addEventListener("click", e => {
    mimicServerCall()
    .then(() => {
      if (e.target.className === "like-glyph") {
        e.target.className = "activated-heart";
        e.target.textContent = FULL_HEART;
      } else if (e.target.className === "activated-heart") {
        e.target.className = "like-glyph";
        e.target.textContent = EMPTY_HEART;
      }
    })
    .catch(() => {
      const errorBox = document.querySelector(".hidden");
      errorBox.className = "";
      setTimeout(() => errorBox.className = "hidden", 3000);
    })
  })
})





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
