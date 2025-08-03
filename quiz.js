function checkAnswer() {
  const correctAnswer = "4";
  const feedback = document.getElementById("feedback");
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  if (!selectedOption) {
    feedback.textContent = "Please select an answer.";
    return;
  }

  const userAnswer = selectedOption.value;

  if (userAnswer === correctAnswer) {
    // This line must exactly match the required text
    feedback.textContent = "Correct! Well done."; // Changed "correct" to "Correct"
  } else {
    feedback.textContent = "That is incorrect. Please try again.";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
