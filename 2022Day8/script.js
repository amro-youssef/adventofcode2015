const fs = require('fs');

function exercise1() {
    const input = fs.readFileSync('input.txt', 'utf-8').toString()//.split(/\r?\n/);
    const inputArray = input.split(/\r?\n/).map(row => row.split('').map(Number));

    const numRows = inputArray.length;
    const numColumns = inputArray[0].length;

    // outisde layer of trees
    let visibleTreeCount = (2 * numRows) + (2 * numColumns) - 4;
    for (let rowIndex = 1; rowIndex < numRows - 1; rowIndex++) {
        for (let columnIndex = 1; columnIndex < numColumns - 1; columnIndex++) {
            const currentElement = inputArray[rowIndex][columnIndex];
            const row = inputArray[rowIndex];
            const column = getColumn(inputArray, columnIndex);

            const treesAbove = column.slice(0, rowIndex);
            const treesBelow = column.slice(rowIndex + 1);
            const treesLeft = row.slice(0, columnIndex);
            const treesRight = row.slice(columnIndex + 1);

            const visibleFromAbove = isBiggerThanAll(currentElement, treesAbove);
            const visibleFromBelow = isBiggerThanAll(currentElement, treesBelow);
            const visibleFromLeft = isBiggerThanAll(currentElement, treesLeft);
            const visibleFromRight = isBiggerThanAll(currentElement, treesRight);
            
            if (visibleFromAbove || visibleFromBelow || visibleFromLeft || visibleFromRight) {
                visibleTreeCount++;
            }
        }
    }
    console.log(visibleTreeCount);

}

function exercise2() {
    const input = fs.readFileSync('input.txt', 'utf-8').toString()//.split(/\r?\n/);
    const inputArray = input.split(/\r?\n/).map(row => row.split('').map(Number));

    const numRows = inputArray.length;
    const numColumns = inputArray[0].length;

    let highestScenicScore = 0;
    for (let rowIndex = 1; rowIndex < numRows - 1; rowIndex++) {
        for (let columnIndex = 1; columnIndex < numColumns - 1; columnIndex++) {
            const currentElement = inputArray[rowIndex][columnIndex];
            const row = inputArray[rowIndex];
            const column = getColumn(inputArray, columnIndex);

            const treesAbove = column.slice(0, rowIndex);
            const treesBelow = column.slice(rowIndex + 1);
            const treesLeft = row.slice(0, columnIndex);
            const treesRight = row.slice(columnIndex + 1);

            const viewingDistanceAbove = findIndexOfFirstBiggestBackwards(currentElement, treesAbove);
            const viewingDistanceBelow = findIndexOfFirstBiggest(currentElement, treesBelow);
            const viewingDistanceLeft = findIndexOfFirstBiggestBackwards(currentElement, treesLeft);
            const viewingDistanceRight = findIndexOfFirstBiggest(currentElement, treesRight);

            let scenicScore = (viewingDistanceAbove * viewingDistanceBelow * viewingDistanceLeft * viewingDistanceRight);
            highestScenicScore = Math.max(highestScenicScore, scenicScore);


        }
    }
    console.log("Viewing distance", highestScenicScore);
}


function findIndexOfFirstBiggest(number, list) {
    const treesSoFar = [];
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] >= number) {
            break;
        }
        treesSoFar.push(list[i]);
        count++;
    }
    
    return count;
}


function findIndexOfFirstBiggestBackwards(number, list) {
    const treesSoFar = [];
    let count = 0
    for (let i = list.length - 1; i >= 0; i--) {
        if (list[i] >= number) {
            break;
        }
        treesSoFar.push(list[i]);
        count++;
    }
    return count;
}

// used to find whether any items in the list are bigger than the provided number
function isAnyGreaterThanNumber(number, list) {
    return list.some(item => item > number);
}

function getColumn(array, columnIndex) {
    return array.map(row => row[columnIndex])
}

function isBiggerThanAll(number, list) {
    return list.every(item => number > item);
}

exercise2();