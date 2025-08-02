function checkAnswer() {
  // Set the correct answer
  const correctAnswer = "4";

  // Select the checked radio input with name="quiz"
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // If no option is selected
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer.";
    return;
  }

  // Get the user's selected value
  const userAnswer = selectedOption.value;

  // Compare and provide feedback
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "That is correct! Well done.";
  } else {
    document.getElementById("feedback").textContent = "That is incorrect. Please try again.";
  }
}

// Attach click event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);