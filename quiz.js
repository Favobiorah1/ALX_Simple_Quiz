function checkAnswer() {
  const correctAnswer = "4";

  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  const feedback = document.getElementById("feedback");

  if (!selectedOption) {
    feedback.textContent = "Please select an answer.";
    return;
  }

  const userAnswer = selectedOption.value.trim();

  if (userAnswer === correctAnswer) {
    feedback.textContent = "correct! Well done.";
  } else {
    feedback.textContent = "That is incorrect. Please try again.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit-answer");
  if (submitBtn) {
    submitBtn.addEventListener("click", checkAnswer);
  }
});