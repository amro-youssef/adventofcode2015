const fs = require('fs');

function exercise1() {
    const contents = fs.readFileSync('input.txt', 'utf-8');
    let total = 0;
    contents.toString().split(/\r?\n/).forEach((line) => {
        let lineLength = line.length;
        let firstCompartment = line.slice(0, lineLength / 2)
        let secondCompartment = line.slice(lineLength / 2, lineLength)

        let [sharedLetter] = firstCompartment.split('').filter(item => secondCompartment.includes(item));
        total += getAlphabetValue(sharedLetter);
    });

    console.log(total);
}

function exercise2() {
    const contents = fs.readFileSync('input.txt', 'utf-8');
    let total = 0;
    const rucksacks = contents.toString().split(/\r?\n/)
    
    for (let i = 0; i < rucksacks.length; i = i + 3) {
        let firstCompartment = rucksacks[i];
        let secondCompartment = rucksacks[i+1];
        let thirdCompartment = rucksacks[i+2];

        total += findCommonCharacterValue(firstCompartment, secondCompartment, thirdCompartment);
    }
    console.log(total);
}

function findCommonCharacterValue(firstCompartment, secondCompartment, thirdCompartment) {
    let commonItem = firstCompartment.split('').filter(item => secondCompartment.includes(item)).filter(item => thirdCompartment.includes(item));
    return getAlphabetValue(commonItem[0]);
    // console.log(commonItem);
    // for (let firstLetter of firstCompartment) {
    //     for (let secondLetter of secondCompartment){
    //         for (let thirdLetter of thirdCompartment) {
    //             if ((firstLetter === secondLetter) && (firstLetter === thirdLetter)){
    //                 return getAlphabetValue(firstLetter);
    //             }
    //         }
    //     }
    // }

}

function getAlphabetValue(char) {
    if (char >= 'a' && char <= 'z') {
        return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }
    // Check if the character is uppercase (A-Z)
    else if (char >= 'A' && char <= 'Z') {
        return char.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
    }
    else {
        return -1;
    }
}

exercise2();