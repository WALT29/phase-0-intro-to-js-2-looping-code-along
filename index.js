// Code your solutions in this file
let arrayz=['Guadalupe','Ollie','Aki']
function writeCards(arrayNames,event_name){
    let array_of_names=[];
    for(let i=0;i<arrayNames.length;i++){
    
     array_of_names.push(`Thank you, ${arrayNames[i]}, for the wonderful ${event_name} gift!`);
    }
    return array_of_names;
}
console.log(writeCards(arrayz,"suprise"));

function countDown(integer){
    while(integer>=0){
        console.log(integer);
        integer--
    }
    
}
console.log(countDown(7));
