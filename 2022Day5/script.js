const fs = require('fs');

let stacks = [[],[],[],[],[],[],[],[],[]];
function exercise1() {
    const crates = fs.readFileSync('crates.txt', 'utf-8').toString().split(/\r?\n/);
    const moves = fs.readFileSync('moves.txt', 'utf-8').toString().split(/\r?\n/);

    // start=top, end=bottom

   crates.forEach((line) => {
        let count = 0;
        for (let i = 1; i < line.length; i += 4){
            //console.log(count, i);
            if (line[i] != ' ' && line[i] != '/\r' && line[i] != '\n/'){
                stacks[count].push(line[i]);
            }
            count++;
        }
   });
   
   // moves {first} from {second} to {third}
   const movesList = []
   moves.forEach((line) => {
       const move = line.split(/\D+/).filter(Boolean).map(Number);

    //    for (let char of line){
    //        if (isCharNumber(char)) {
    //             move.push(char);
    //         }
    //     }
        movesList.push(move);
    });
    carryOutMoves(movesList)
    console.log(stacks);
    //console.log(movesList);
   //console.log(moves)
}

function carryOutMoves(movesList) {
    for (const move of movesList) {
        const numberToMove = parseInt(move[0]);
        const stackToMoveFrom = parseInt(move[1]);
        const stackToMoveTo = parseInt(move[2]);

        //console.log(`Moving ${numberToMove} items from stack ${stackToMoveFrom} to stack ${stackToMoveTo}`);
        if (stacks[stackToMoveFrom - 1].length < numberToMove) {
            continue;
        }

        const itemsToMove = stacks[stackToMoveFrom - 1].splice(0, numberToMove);
        //console.log(stacks[stackToMoveFrom - 1]);
        //stacks[stackToMoveTo - 1].unshift(itemsToMove);
        for (let i = itemsToMove.length - 1; i >= 0; i--) {
            stacks[stackToMoveTo - 1].unshift(itemsToMove[i]);
        }
        // for (let i = 0; i < numberToMove; i++) {
        //     // move top item of stacktomovefrom (front of stack)  to front of other stack
        //     const itemToMove = stacks[stackToMoveFrom - 1].shift();
        //     stacks[stackToMoveTo - 1].unshift(itemToMove);

        // }
    }
}

function isCharNumber(c) {
    return c >= '0' && c <= '9';
  }

exercise1();