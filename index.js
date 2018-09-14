const mainNumbers = {
    zero: 0 ,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    tweleve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninty: 90,
    hundred: 100,
    thousand: 1000,
    lakh: 100000,
    lakhs: 100000,
    million: 1000000,
    millions: 1000000,
    crore: 10000000,
    crores: 10000000,
    billion: 100000000,
    billions: 100000000
};


var wordToNumbers = (input) => {
    var inputWords = input.toLowerCase().split(" ");
    var inputWords = inputWords.filter(element => {
        return element != "and";
    });
    let inputLength = inputWords.length;
    let finalNumberValue;
    switch (inputLength) {
        case 1: 
            finalNumberValue = mainNumbers[inputWords[0]];
            break;
        case 2:
            if (["hundred", "thousand", "lakh", "crore", "million", "billion", "crores", "lakhs"].includes(inputWords[1])) {
                finalNumberValue = mainNumbers[inputWords[0]] * mainNumbers[inputWords[1]];
            } else {
                finalNumberValue = mainNumbers[inputWords[0]] + mainNumbers[inputWords[1]];
            }
            break;
        case 3:
            finalNumberValue = mainNumbers[inputWords[0]] * mainNumbers[inputWords[1]] + mainNumbers[inputWords[2]];
            break;
        case 4:
            finalNumberValue = mainNumbers[inputWords[0]] * mainNumbers[inputWords[1]] + mainNumbers[inputWords[2]] * mainNumbers[inputWords[3]];
        case 5:
            finalNumberValue = mainNumbers[inputWords[0]] * mainNumbers[inputWords[1]] + mainNumbers[inputWords[2]] * mainNumbers[inputWords[3]] + mainNumbers[inputWords[4]];
    }
    return finalNumberValue;
};


module.exports.wordToNumbers = wordToNumbers;
