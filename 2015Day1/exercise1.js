const fs = require('fs');


fs.readFile('input.txt', (err, data) => {
    console.time('santa-time')
    let level = 0;
    let count = 0;
    if (err) throw err;
    for (let character of data.toString()) {
        count++;
        if (character == '('){
            level++;
        } else if (character == ')'){
            level--;
            if (level == -1){
                console.log(count);
                break;
            }
        }

    }
    console.timeEnd('santa-time');
    // console.log(level);
    // console.log(count);
}
);  


