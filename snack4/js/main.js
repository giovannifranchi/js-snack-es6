'use scrict';

// function createArrayOfTeams(teamList){
//     return teamList.map((element)=> new Teams(element));
// }

// console.log(teamsImgList);


// const teamObjList = createArrayOfTeams(teamList);

// const teamObjRandom = teamObjList.map((element)=> {
//     return {
//         name: element.name,
//         points: createRndNum(0, maxPoints),
//         fouls: createRndNum(0, maxPoints),
//     }
// })


// const teamFinalList = teamObjRandom.map((element)=>{
//     const {name} = element;
//     const {fouls} = element;
//     return {name, fouls};
// });

// Other concise solution

// const finalTeams = teamList.map((element)=> new Teams(element))
// .map((element)=> {
//     return {
//         name: element.name,
//         points: createRndNum(0, maxPoints),
//         fouls: createRndNum(0, maxPoints),
//     }
// })
// .map((element)=>{
//     const {name} = element;
//     const {fouls} = element;
//     return {name, fouls};
// });

// console.log(teamObjList, 'obj list');

// console.log(teamObjList);
// console.log(teamObjRandom);
// console.log(teamFinalList);
// console.log(finalTeams);



function createRndNum(min ,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function createTeamRow(template, arrayOfObj, container){
    const fragment = document.createDocumentFragment();
    arrayOfObj.forEach(element =>{
        const content = template.content.cloneNode(true);
        const name = content.querySelector('.team-name');
        const img = content.querySelector('.team-logo');
        const points = content.querySelector('.points');
        const fouls = content.querySelector('.fouls');
        img.src = `img/${element.img}`;
        img.alt = `logo-${element.name}`
        name.innerText = element.name;
        points.innerText = element.points;
        fouls.innerText = element.fouls;
        fragment.append(content);
    });
    container.append(fragment);
}

const maxPoints = 90;
const maxFouls = 50;
const teamList = ['Juventus', 'Milan', 'Inter', 'Sampdoria', 'Torino', 'Chievo', 'Napoli'];
const template = document.querySelector('#team-row');
const container = document.querySelector('tbody');
class Teams {
    constructor(name, img){
        this.name = name,
        this.img = img,
        this.points = createRndNum(0, maxPoints),
        this.fouls = createRndNum(0, maxFouls)
    }
}

const teamListSorted = teamList.sort().map(element => element.toLowerCase());
const teamsImgList = teamListSorted.map(element => `${element}.png`);
const teamObjList = teamListSorted.map((element, index) => new Teams(element, teamsImgList[index]));
const teamsSortedByPoints = teamObjList.sort(({points:a}, {points:b}) => b-a);

// console.log(teamObjList);

createTeamRow(template, teamsSortedByPoints, container);

