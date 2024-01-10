function countGrade(scores) {
  const scoreObj = {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    X: 0,
  };

  scores.filter((score) => {
    if (score === 100) {
      scoreObj["S"] += 1;
    } else if (score >= 90 && score < 100) {
      scoreObj["A"] += 1;
    } else if (score >= 80 && score < 90) {
      scoreObj["B"] += 1;
    } else if (score >= 60 && score < 80) {
      scoreObj["C"] += 1;
    } else if (score >= 0 && score < 60) {
      scoreObj["D"] += 1;
    } else if (score === -1) {
      scoreObj["X"] += 1;
    }
    return true; // Повертаємо true, оскільки ми використовуємо filter, але його результат насправді не використовується.
  });

  return scoreObj;
}

console.log(countGrade([50, 60, 70, 80, 90, 100]));