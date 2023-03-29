const fs = require('fs');

const start = new Date();

const names1 = fs.readFileSync('./names1.txt', 'utf-8').toString().split('\n')

const names2 = fs.readFileSync('./names2.txt', 'utf-8').toString().split('\n')

const duplicates = [];

for(name1 of names1){
    for(name2 of names2){
        if(name1 === name2){
            duplicates.push(names1)
        }
    }
}


const end = new Date();
console.log(`${duplicates.length} duplicates`)
console.log(`runtime: ${end - start} ms`)