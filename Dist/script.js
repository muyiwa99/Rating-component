// Selecting my elements
const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submit = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

// Event listenr to remove main container and display the thank- you dialogue
submit.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

// Event listener to remove thanks dialoge and add main
rateAgain.addEventListener("click", () => {
  thanksContainer.classList.add("hidden");
  mainContainer.style.display = "block";
});

// Passing the clicked on rating to the span in the thank you acknowledgement message.
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
