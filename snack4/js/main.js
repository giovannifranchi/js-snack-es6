function createRndNum(min ,max){
    return Math.floor(Math.random() * (max - min) + min);
}

class Teams {
    constructor(name, maxPoints, maxFouls){
        this.name = name;
        this.points = createRndNum(0, maxPoints);
        this.fouls = createRndNum(0, maxFouls);
    }
}

function createArrayOfTeams(teamList, maxPoints, maxFouls){
    return teamList.map((element)=> new Teams(element, maxPoints, maxFouls));
}

const maxPoints = 90;
const maxFouls = 50;
const teamList = ['Juventus', 'Milan', 'Inter', 'Sampdoria', 'Torino', 'Chievo', 'Napoli'];


const teamObjList = createArrayOfTeams(teamList, maxPoints, maxFouls);

const teamFinalList = teamObjList.map((element)=>{
    const {name} = element;
    let {fouls} = element;
    return {name, fouls};
});

// Other concise solution

const finalTeams = teamList.map((element)=> new Teams(element, maxPoints, maxFouls))
.map((element)=>{
    const {name} = element;
    const {fouls} = element;
    return {name, fouls};
})

console.log(finalTeams);

