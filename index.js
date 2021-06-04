// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};


function wrapAdjective(visualFlare = "*") {
    return function(anAngelOlsenSong = "special"){
        return `You are ${visualFlare}${anAngelOlsenSong}${visualFlare}!`;
    };
};


let Calculator = {
    
    add: function add(a,b) {
        return a + b ;
    },

    subtract: function subtract(a,b) {
        return a - b ;
    },
    divide: function divide(a,b) {
        return a / b ;
    },
    multiply: function multiply(a,b) {
        return a * b ;
    }
};



function actionApplyer(startingIntr, arrayOfFunctions) {
    for (let i = 0; i < arrayOfFunctions.length; i++) {
        startingIntr = arrayOfFunctions[i](startingIntr);
    }
    return startingIntr;
};