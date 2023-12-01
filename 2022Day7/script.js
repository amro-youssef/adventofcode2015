const fs = require('fs');

// start=top, end=bottom
const dirObject = {
    dirContents: "",
    parent: null,
    next: new Set(),
    size: 0
}
const directories = [];

function exercise1() {
    const input = fs.readFileSync('input.txt', 'utf-8').toString().split(/\r?\n/);
    let current = createNewDirectoryObject("/");
    let root = current;

    input.forEach((line) => {
        if (line[0] === "$") {
            // move to outermost directory
            if (line.slice(2,6) === "cd /") {
                while (current.parent !== null) {
                    current = current.parent;
                }
            }
            // go back a directory
            else if (line.slice(2,7) === "cd ..") {
                if (current.parent !== null) {
                    current = current.parent;
                }
            }
            // move to directory
            else if (line.slice(2,4) === "cd") {
                let directoryName = line.split(" ")[2];
                let changed = false;
                for (const obj of directories) {
                    if (obj.dirContents === directoryName && obj.parent === current) {
                        changed = true;
                        current.next.add(obj);
                        current = obj;
                        break;
                    }
                }
                // create new directory
                if (!changed) {
                    const newDirectory = createNewDirectoryObject(directoryName);
                    current = newDirectory;
                }
                
                // should we add to current??
            }

            else if (line.slice(2,4) === "ls") {
            }
            
        }
        else if (line.slice(0,3) === "dir") {
            // add to children of current
            let directoryName = line.split(" ")[1];
            let changed = false;
            for (const obj of directories) {
                // need to deal with this if properly so that we're not confused by duplicate names
                if (obj.dirContents === directoryName && obj.parent === current) {
                    changed = true;
                    current.next.add(obj);
                    obj.parent = current;
                }
            }

            if (!changed) {
                const newDirectory = createNewDirectoryObject(directoryName);
                current.next.add(newDirectory);
                newDirectory.parent = current;
            }
            
        }
        // number directory
        else {
            // add size to something
            let fileSize = line.split(" ")[0];
            let directoryName = line.split(" ")[1];

            let changed = false;
            for (const obj of directories) {
                if (obj.dirContents === directoryName && obj.parent === current) {
                    changed = true;
                    current.next.add(obj);
                    obj.parent = current;

                }
            }

            current.size += parseInt(fileSize);
            // do we need to keep adding till we reach the parent
            while (current.parent !== null) {
                current = current.parent;
                current.size += parseInt(fileSize);
            }
            // let temp = current;
            // while (temp.parent !== null) {
            //     temp.parent.size += parseInt(fileSize);
            //     temp = temp.parent;
            // }

            //let currDir = ; 
            while (currDir) {
                currDir.size += parseInt(a);
                currDir = currDir.parent; 
            }
        }
    });

    // get sizes
    //console.log(directories);
    console.log(getTotalSizeOfDirectoriesBelowSize(100_000));
}

function createNewDirectoryObject(name) {
    const newDirectory = Object.create(dirObject);
    newDirectory.dirContents = name;
    directories.push(newDirectory);
    return newDirectory;
}

function getTotalSizeOfDirectoriesBelowSize(size) {
    let totalSize = 0;
    for (const obj of directories.slice(1)) {
        //totalSize += parseInt(obj.size)
        if (obj.size <= size) {
            totalSize += parseInt(obj.size);
        }
    }
    return totalSize;
}

exercise1();
// gave up