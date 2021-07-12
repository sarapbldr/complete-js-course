
/*let dolphinsScore = 97 + 40 + 101;
let koalasScore = 97 + 40 + 101;
*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinScore = calcAverage(85, 54, 71);
console.log(dolphinScore);

const koalaScore = calcAverage(23, 34, 27);
console.log(koalaScore);

function checkWinner(avgDolphins, avgKoalas) {
  const competitionResult = avgDolphins < avgKoalas ? `Koalas wins the competition! ${avgKoalas} vs ${avgDolphins}.`
  : `Dolphins wins the competition! ${avgDolphins} vs ${avgKoalas}.`;
  return competitionResult;
}

console.log(checkWinner(dolphinScore, koalaScore));
