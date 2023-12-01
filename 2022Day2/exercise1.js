const fs = require('fs');

const POINTS_FOR_WIN = 6;
const POINTS_FOR_DRAW = 3;
const POINTS_FOR_LOSS = 0;

const POINTS_FOR_ROCK = 1;
const POINTS_FOR_PAPER = 2;
const POINTS_FOR_SCISSORS = 3;
function exercise1() {
    const contents = fs.readFileSync('input.txt', 'utf-8');

    let numOfPoints = 0;
    contents.toString().split(/\r?\n/).forEach((line) => {
        let gameMoves = line.split(" ");
        let firstMove = gameMoves[0];
        let secondMove = gameMoves[1];

        switch(firstMove) {
            case 'A':
                switch(secondMove) {
                    case 'X':
                        numOfPoints += POINTS_FOR_ROCK;
                        numOfPoints += POINTS_FOR_DRAW;
                        break;
                    case 'Y':
                        numOfPoints += POINTS_FOR_PAPER;
                        numOfPoints += POINTS_FOR_WIN;
                        break;
                    case 'Z':
                        numOfPoints += POINTS_FOR_SCISSORS;
                        numOfPoints += POINTS_FOR_LOSS;
                        break;
                }
                break;
            case 'B':
                switch(secondMove) {
                    case 'X':
                        numOfPoints += POINTS_FOR_ROCK;
                        numOfPoints += POINTS_FOR_LOSS;
                        break;
                    case 'Y':
                        numOfPoints += POINTS_FOR_PAPER;
                        numOfPoints += POINTS_FOR_DRAW;
                        break;
                    case 'Z':
                        numOfPoints += POINTS_FOR_SCISSORS;
                        numOfPoints += POINTS_FOR_WIN;
                        break;
                }
                break;
            case 'C':
                switch(secondMove) {
                    case 'X':
                        numOfPoints += POINTS_FOR_ROCK;
                        numOfPoints += POINTS_FOR_WIN;
                        break;
                    case 'Y':
                        numOfPoints += POINTS_FOR_PAPER;
                        numOfPoints += POINTS_FOR_LOSS;
                        break;
                    case 'Z':
                        numOfPoints += POINTS_FOR_SCISSORS;
                        numOfPoints += POINTS_FOR_DRAW;
                        break;
                }
                break;
        }

    });
    console.log(numOfPoints);
}

const POINTS = {
    'AX': [1, 3],
    'AY': [2, 6],
    'AZ': [3, 0],
    'BX': [1, 0],
    'BY': [2, 3],
    'BZ': [3, 6],
    'CX': [1, 6],
    'CY': [2, 0],
    'CZ': [3, 3],
  };
  
  function exercise1alternative() {
    const contents = fs.readFileSync('input.txt', 'utf-8');
    let numOfPoints = 0;
  
    contents.toString().split(/\r?\n/).forEach((line) => {
      const [firstMove, secondMove] = line.split(" ");
      const key = firstMove + secondMove;
  
      if (POINTS[key]) {
        const [firstMovePoints, secondMovePoints] = POINTS[key];
        numOfPoints += firstMovePoints + secondMovePoints;
      }
    });
  
    console.log(numOfPoints);
  }

function exercise2() {
    const contents = fs.readFileSync('input.txt', 'utf-8');

    let numOfPoints = 0;
    contents.toString().split(/\r?\n/).forEach((line) => {
        let gameMoves = line.split(" ");
        let firstMove = gameMoves[0];
        let outcome = gameMoves[1];

        switch(firstMove) {
            case 'A':
                switch(outcome) {
                    case 'X':
                        numOfPoints += POINTS_FOR_SCISSORS;
                        numOfPoints += POINTS_FOR_LOSS;
                        break;
                    case 'Y':
                        numOfPoints += POINTS_FOR_ROCK;
                        numOfPoints += POINTS_FOR_DRAW;
                        break;
                    case 'Z':
                        numOfPoints += POINTS_FOR_PAPER;
                        numOfPoints += POINTS_FOR_WIN;
                        break;
                }
                break;
            case 'B':
                switch(outcome) {
                    case 'X':
                        numOfPoints += POINTS_FOR_ROCK;
                        numOfPoints += POINTS_FOR_LOSS;
                        break;
                    case 'Y':
                        numOfPoints += POINTS_FOR_PAPER;
                        numOfPoints += POINTS_FOR_DRAW;
                        break;
                    case 'Z':
                        numOfPoints += POINTS_FOR_SCISSORS;
                        numOfPoints += POINTS_FOR_WIN;
                        break;
                }
                break;
            case 'C':
                switch(outcome) {
                    case 'X':
                        numOfPoints += POINTS_FOR_PAPER;
                        numOfPoints += POINTS_FOR_LOSS;
                        break;
                    case 'Y':
                        numOfPoints += POINTS_FOR_SCISSORS;
                        numOfPoints += POINTS_FOR_DRAW;
                        break;
                    case 'Z':
                        numOfPoints += POINTS_FOR_ROCK;
                        numOfPoints += POINTS_FOR_WIN;
                        break;
                }
                break;
        }
    });
    console.log(numOfPoints);
}

exercise2();