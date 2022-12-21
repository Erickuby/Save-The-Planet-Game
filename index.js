// JavaScript to handle the quiz form submission and scoring
const form = document.querySelector('#quiz');

form.addEventListener('submit', event => {
  event.preventDefault();

  let score = 0;

  // Check the answer to the first question
  const q1 = form.elements.q1;
  if (q1.value === 'Berlin') {
    score++;
  }
  // Check the answer to the first question
  const q2 = form.elements.q1;
  if (q1.value === 'Paris') {
    score++;
  }
  // Check the answer to the first question
  const q3 = form.elements.q1;
  if (q1.value === 'Rome') {
    score++;
  }
  // Check the answer to the first question
  const q4 = form.elements.q1;
  if (q1.value === 'London') {
    score++;
  }
  // Check the answer to the first question
  const q5 = form.elements.q1;
  if (q1.value === 'Berlin') {
    score++;
  }
  
  // Check the answers to the other questions
  // ...

  // Display the score
  alert(`You scored ${score} out of 5`);
});
