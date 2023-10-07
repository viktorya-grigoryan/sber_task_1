import {encoded, translations} from './data.js'

// console.log("Let's rock")
// console.log(encoded, translations)

function decode(encoded, translations){
    for (let item of encoded){
        Object.keys(item).filter((i)=>{
            return (i.includes("Id") && i!=='groupId');
        }).forEach((i)=>{
            let value = item[i];
            item[i]=translations[value];
        });
    }
}
decode(encoded, translations);
console.log(encoded);

let uniqueIds = new Set();


 for (let item of encoded){
        Object.keys(item).filter((i)=>{
        return (i.includes("Id") && i!=='groupId');
    }).forEach((i)=>{
        if (item[i]!==undefined)
            uniqueIds.add(item[i])});
}
console.log(uniqueIds);
// console.log(decoded)
