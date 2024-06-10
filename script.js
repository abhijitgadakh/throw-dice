document.getElementById("rollButton").addEventListener("click", rollDice);

function rollDice() {
  // Generate random numbers between 1 and 6 for each dice
  const diceA = getRandomNumber();
  const diceB = getRandomNumber();
  const diceC = getRandomNumber();

  // Update dice values on the page
  document.getElementById("diceA").textContent = diceA;
  document.getElementById("diceB").textContent = diceB;
  document.getElementById("diceC").textContent = diceC;

  // Determine the winner and update colors
  determineWinner(diceA, diceB, diceC);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function determineWinner(diceA, diceB, diceC) {
  // Get all dice elements
  const diceElements = [
    document.getElementById("diceA"),
    document.getElementById("diceB"),
    document.getElementById("diceC"),
  ];

  // Reset colors
  diceElements.forEach((dice) => {
    dice.style.backgroundColor = "";
  });

  // Determine the max score
  const maxScore = Math.max(diceA, diceB, diceC);
  const minScore = Math.min(diceA, diceB, diceC);

  // Find dice with the max score and min score
  const maxDice = [];
  const minDice = [];
  diceElements.forEach((dice) => {
    const score = parseInt(dice.textContent);
    if (score === maxScore) {
      maxDice.push(dice);
    }
    if (score === minScore) {
      minDice.push(dice);
    }
  });

  // Set colors based on scores
  if (maxDice.length === 1) {
    maxDice[0].style.backgroundColor = "green";
  } else {
    maxDice.forEach((dice) => {
      dice.style.backgroundColor = "blue";
    });
  }

  minDice.forEach((dice) => {
    dice.style.backgroundColor = "red";
  });

  diceElements.forEach((dice) => {
    const score = parseInt(dice.textContent);
    if (score !== maxScore && score !== minScore) {
      dice.style.backgroundColor = "yellow";
    }
  });

  // Update result text
  let resultText = "";
  if (maxDice.length === 1) {
    resultText = `Winner is ${
      diceElements.indexOf(maxDice[0]) === 0
        ? "Member A"
        : diceElements.indexOf(maxDice[0]) === 1
        ? "Member B"
        : "Member C"
    }!`;
  } else {
    resultText = "It's a draw!";
  }
  document.getElementById("result").textContent = resultText;
}
