// Code your solutions in this file
function writeCards(arrayNames, event){

    const collectedMessagesArray = [];

    for (let i = 0; i < arrayNames.length; i++){
        collectedMessagesArray[i] = `Thank you, ${arrayNames[i]}, for the wonderful ${event} gift!`;
    }

    return collectedMessagesArray;
}

function countDown(int){

    while (int >= 0){
        console.log(int);
        int--;
    }
}