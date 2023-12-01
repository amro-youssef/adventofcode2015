const fs = require('fs');

function exercise1() {
    const input = fs.readFileSync('input.txt', 'utf-8').toString();
    //console.log(getBufferLength(input));
    console.log(get14LengthBuffer(input))
}

function getBufferLength(input) {
    let firstChar = input[0];
    let secondChar = input[1];
    let thirdChar = input[2];

    for (let i = 3; i < input.length; i++) {
        //let tempFourthChar = fourthChar
        let fourthChar = input[i];
        if (isArrayUnique([firstChar, secondChar, thirdChar, fourthChar])) {
            console.log([firstChar, secondChar, thirdChar, fourthChar])
            return i+1;
        }
        thirdCharTemp = thirdChar;
        thirdChar = fourthChar;
        secondCharTemp = secondChar;
        secondChar = thirdCharTemp;
        firstChar = secondCharTemp;
    }
    return -1;
}

function get14LengthBuffer(input) {
    let bufferString = input.slice(0, 14);
    console.log(typeof(bufferString))

    for (let i = 15; i < input.length; i++) {
        bufferString = bufferString += input[i];
        bufferString = bufferString.substring(1);
        console.log(bufferString);
        if (isArrayUnique(bufferString)) {
            return i + 1;
        }
    }

}

function isArrayUnique(array) {
    const set = new Set(array);
    return set.size === array.length;
}

exercise1();