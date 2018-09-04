function addScore(currentScore, eaten) {
  switch (eaten) {
  case 'dot':
    scoreToAdd = 10;
    break;
  case 'powerPellet':
    scoreToAdd = 50;
    break;
  case 'firstGhost':
    scoreToAdd = 200;
    break;
  case 'secondGhost':
    scoreToAdd = 400;
    break;
  case 'thirdGhost':
    scoreToAdd = 800;
    break;
  case 'fourthGhost':
    scoreToAdd = 1600;
    break;
  case 'cherry':
    scoreToAdd = 100;
    break;
  }

  return currentScore + scoreToAdd;
}

var score = 0;

score = addScore(score, 'dot');
score = addScore(score, 'powerPellet');
score = addScore(score, 'firstGhost');
score = addScore(score, 'secondGhost');
score = addScore(score, 'thirdGhost');
score = addScore(score, 'fourthGhost');
score = addScore(score, 'cherry');
console.log('Your score: ' + score);
