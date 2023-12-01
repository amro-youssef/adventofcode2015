const fs = require('fs');

function exercise1() {
    const contents = fs.readFileSync('input.txt', 'utf-8');
    let count = 0;
    contents.toString().split(/\r?\n/).forEach((line) => {
        const [firstElf, secondElf] = line.split(",");
        let firstElfStartSection = parseInt(firstElf.split("-")[0]);
        let firstElfEndSection = parseInt(firstElf.split("-")[1]);

        let secondElfStartSection = parseInt(secondElf.split("-")[0]);
        let secondElfEndSection = parseInt(secondElf.split("-")[1]);
        console.log(firstElfStartSection, firstElfEndSection, secondElfStartSection, secondElfEndSection);

        let firstSectionContainedWithinSecond = (firstElfStartSection <= secondElfStartSection) && (firstElfEndSection >= secondElfEndSection);
        let secondSectionContainedWithinFirst = (secondElfStartSection <= firstElfStartSection) && (secondElfEndSection >= firstElfEndSection);

        let firstSectionOverlapsSecond = (firstElfStartSection <= secondElfStartSection) && (secondElfStartSection <= firstElfEndSection);
        let b =  (firstElfStartSection <= secondElfEndSection) && (secondElfEndSection <= firstElfEndSection);

        if (firstSectionOverlapsSecond || b || firstSectionContainedWithinSecond || secondSectionContainedWithinFirst) {
            count++;
        }
    });
    console.log(count);
}

exercise1();