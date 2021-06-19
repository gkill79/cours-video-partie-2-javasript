// SELECTEURS
// document.querySelector("h4").style.background = "yellow";

// const baliseHTML = document.querySelector("h4");

// baliseHTML.style.background = "yellow";

//Click event
const questionContainer = document.querySelector(".click-event");

// console.log(questionContainer);
// questionContainer.style.borderRadius = "150px";
questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-clicked");
});