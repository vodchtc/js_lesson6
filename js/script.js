//1) 
let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"];
let teamA = [],
    teamH = [];
for (let i = 0; i < harryPotterTeam.length; i++) {
    if (harryPotterTeam[i].includes('a')) teamA.push(harryPotterTeam[i]);
    if (harryPotterTeam[i].includes('H')) teamH.push(harryPotterTeam[i]);
}

console.log(teamA);
console.log(teamH);



//2)

let arr = [6, 3, "ten", 1, true, "4"];
console.log(arr.filter(item => typeof(item) == 'number').reduce((sum, current) => sum + current, 0));
console.log(arr.filter(item => typeof(item) == 'number').reduce((mul, current) => mul * current, 1));


//3)

let numArr = [1, 3, 5, 7, 9, 11];
undefined

function squareArray(arr) {
    return arr.map(item => Math.pow(item, 2))
}



//4)

let students = [
    { name: 'Alexey', id: 123, marks: 9 }, { name: 'Vitalik', id: 101, marks: 5 }, { name: 'Tanya', id: 200, marks: 7 }, { name: 'Sasha', id: 115, marks: 10 }
];
students.find(item => item.id == 101);


//5)

let javaScriptTypes = ["number", "null", "undefined", "string"];
javaScriptTypes.push("boolean", "bigint", "object", "symbol");

console.log(javaScriptTypes);

//6) 

let parfume = ["Ex Nihilo", "Killian", "BDK", "Replica"]
parfume[parfume.length - 1] = "Jo Malone";
console.log(parfume);