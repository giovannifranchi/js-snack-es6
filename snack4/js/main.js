'use scrict';

function createRndNum(min ,max){
    return Math.floor(Math.random() * (max - min) + min);
}

class Teams {
    constructor(name){
        this.name = name;
        this.points = 0;
        this.fouls = 0;
    }
}

function createArrayOfTeams(teamList){
    return teamList.map((element)=> new Teams(element));
}

const maxPoints = 90;
const maxFouls = 50;
const teamList = ['Juventus', 'Milan', 'Inter', 'Sampdoria', 'Torino', 'Chievo', 'Napoli'];


const teamObjList = createArrayOfTeams(teamList);

const teamObjRandom = teamObjList.map((element)=> {
    return {
        name: element.name,
        points: createRndNum(0, maxPoints),
        fouls: createRndNum(0, maxPoints),
    }
})


const teamFinalList = teamObjRandom.map((element)=>{
    const {name} = element;
    const {fouls} = element;
    return {name, fouls};
});

// Other concise solution

const finalTeams = teamList.map((element)=> new Teams(element))
.map((element)=> {
    return {
        name: element.name,
        points: createRndNum(0, maxPoints),
        fouls: createRndNum(0, maxPoints),
    }
})
.map((element)=>{
    const {name} = element;
    const {fouls} = element;
    return {name, fouls};
});

// console.log(teamObjList, 'obj list');

console.log(teamObjList);
console.log(teamObjRandom);
console.log(teamFinalList);
console.log(finalTeams);


