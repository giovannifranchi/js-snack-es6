const nomiBici = ['Grazziella', 'Cascioli', 'Bianchi', 'Paoli', 'Rossi'];
const pesoBici = [40, 30, 50, 19, 33];

// Metodo con classi

class Bikes {
    constructor(name, weigth){
        this.name = name,
        this.weigth = weigth
    }
}

function createBikeArray(namesArray, weightArray){
    const bikesArray = namesArray.map((element, index)=> new Bikes(element, weightArray[index]));
    return bikesArray;
}

const bikesArray = createBikeArray(nomiBici, pesoBici);

function getLightest(bikesArray){
    let lightest = bikesArray[0].weigth;
    let i = 0;
    bikesArray.forEach((element, index) => {
        if(element.weigth < lightest){
            lightest = element.weigth;
            i = index;
        }
    });
    let {name} = bikesArray[i];
    let {weigth} = bikesArray[i];
    return `The lighest bike is ${name} with a weigth of ${weigth}`;
}

const lightestBike = getLightest(bikesArray);


console.log(lightestBike);



