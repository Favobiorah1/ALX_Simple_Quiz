function checkAnswer() {
  const correctAnswer = "4";

  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer.";
    return;
  }

  const userAnswer = selectedOption.value;

  if (userAnswer === correctAnswer) {
    // ⚠️ Must match exactly: "correct! Well done."
    document.getElementById("feedback").textContent = "correct! Well done.";
  } else {
    document.getElementById("feedback").textContent = "That is incorrect. Please try again.";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
