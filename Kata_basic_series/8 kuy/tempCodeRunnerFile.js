function points(games) {
  let totalPoints = 0;
  console.log("totalPoints", totalPoints);
  for (let i = 0; i < games.length; i++) {
    const match = games[i].split(":");
    console.log("match", match);
    console.log("match[0]", match[0]);
    console.log("match[1]", match[1]);
    console.log("totalPoints", totalPoints);
    if (match[0] > match[1]) {
      totalPoints += 3;
      console.log("totalPoints", totalPoints);
    } else if (match[0] === match[1]) {
      totalPoints += 1;
    }
    totalPoints += 0;
  }

  return totalPoints;
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);