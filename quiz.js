function checkAnswer() {
  // correct answer
  const correctAnswer = "4";

  // select the checked radio button
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // guard clause if no option is selected
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer.";
    return;
  }

  const userAnswer = selectedOption.value;

  // check if the answer is correct
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "That is correct, well done! Try again!";
  } else {
    document.getElementById("feedback").textContent = "That is incorrect, please try again.";
  }
}

// add the event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
