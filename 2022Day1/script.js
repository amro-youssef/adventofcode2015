const fs = require('fs');

function question1() {
    const contents = fs.readFileSync('input.txt');
    let temp = [];
    let result = [];
    contents.toString().split(/\r?\n/).forEach((item) => {

        //console.log('item: ', item);
        if (item !== '') {
            temp.push(parseInt(item))
        } else {
            result.push(temp);
            temp = [];
        }
      });

      let topThreeValues = [];
      // loop through 3 times
      let summedArray = result.map(subArray => subArray.reduce((acc, current) => acc + current, 0));
      let copyOfSummedArray = [...summedArray];

      
      for (let i = 0; i < 3; i++) {
        //console.log(summedArray);
        let maxNumCalories = Math.max(...copyOfSummedArray);
        copyOfSummedArray = copyOfSummedArray.filter(item => item !== maxNumCalories)
        topThreeValues.push(maxNumCalories)
      }

      console.log(topThreeValues);
      let sumOfTopThreeValues = topThreeValues.reduce((acc, current) => acc + current, 0);
      console.log(sumOfTopThreeValues);
}

function question2() {
    const contents = fs.readFileSync('input.txt', 'utf-8');
    const values = contents.split(/\r?\n/).map(item => parseInt(item)).filter(item => !isNaN(item));
    
    // Calculate the sums of every three consecutive values
    const sums = [];
    for (let i = 0; i < values.length - 2; i++) {
      const sum = values[i] + values[i + 1] + values[i + 2];
      sums.push(sum);
    }
  
    // Sort the sums in descending order
    sums.sort((a, b) => b - a);
  
    // Find the top three sums
    const topThreeSums = sums.slice(0, 3);
  
    // Calculate the total of the top three sums
    const total = topThreeSums.reduce((acc, current) => acc + current, 0);
  
    console.log(total);
  }
question2();

//question1();