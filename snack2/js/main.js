let student1 = {
    id: 213,
    name: 'Marco della Rovere',
    grades: 78,
}
let student2 = {
    id: 110,
    name: 'Paola Cortellessa',
    grades: 96,
}
let student3 = {
    id: 250,
    name: 'Andrea Mantegna',
    grades: 48,
}

let student4 = {
    id: 145,
    name: 'Gaia Borromini',
    grades: 74,
}
let student5 = {
    id: 196,
    name: 'Luigi Grimaldello ',
    grades: 68,
}
let student6 = {
    id: 102,
    name: 'Piero della Francesca',
    grades: 50,
}
let student7 = {
    id: 120,
    name: 'Francesca da Polenta',
    grades: 84,
}


const students = [student1, student2, student3, student4, student5, student6, student7];

// const studentsNames = [];

// students.filter((element)=>{
//     studentsNames.push(element.name.toUpperCase());
// });

// console.log(studentsNames);

// let studentList = [];
// students.forEach((student)=>{
//     studentList.push(student.name.toUpperCase());
// });

let tags = students.map((element)=> element.name.toUpperCase());

// console.log(studenti);

// let studentsOver70Grade = students.filter((element)=>{
//     if(element.grades > 70){
//         return true
//     }else return false;
// });

let studentsOver70 = students.filter((element)=> element.grades > 70 ? true : false)
.map((element)=> element.name.toUpperCase());


// let over120 = students.filter((element)=>{
//     if(element.grades > 70 && element.id > 120){
//         return true
//     }else return false
// });


let over120 = students.filter((element)=> element.grades > 70 && element.id > 120 ? true : false)
.map((element)=> element.name.toUpperCase());





console.log(tags);
console.log(studentsOver70);
console.log(over120);

