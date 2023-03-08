const arrayInvitati = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const invitedPeopleObjArr = arrayInvitati.map((invited, index)=>{
    return {tableName: 'Tavolo Vip', name: invited, tablePlace: index}
});

console.log(invitedPeopleObjArr);