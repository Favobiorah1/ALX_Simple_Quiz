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
    // Exact match for correct answer feedback
    feedback.textContent = "Correct! Well done.";
  } else {
    // Exact match for incorrect answer feedback
    feedback.textContent = "That's incorrect. Try again!";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
