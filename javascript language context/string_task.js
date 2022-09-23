// Uppercase the first character
function ucFirst(str) {
    let trimedString = str.trim();
    return trimedString[0].toUpperCase() + trimedString.slice(1);
    // let upperCase = str[0].toUpperCase();
    // let removeFirstWord = str.slice(1);
    // return upperCase + removeFirstWord;
}
console.log(ucFirst('   how are you doing   '));


// check for spam word 'XXX'
function checkSpam(str) {
    if( (str.toUpperCase().includes('XXX') || str.toLowerCase().includes('xxx')) || (str.toUpperCase().includes('VIAGRA') || str.toLowerCase().includes('viagra')) ) {
        return true;
    }
    return false;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxxx'));
console.log(checkSpam('innocent rabbit'));

// Function to truncate text
function truncate(str, maxLenght) {
    let string = str;
    if(Number(str)) {
        string = str.toString();
    }

    if(string.length > maxLenght) {
        string = string.trim();
        string = string.slice(0, maxLenght - 1);
        return string + "...";
    }
    return str;

}   

let string = `     My name is richman loveday, i am learning javascript strings, trying to manipulate string methods and properties`;

console.log(truncate(string, 80));

// Function to extract money
function extractCurrencyValue(str) {
    return +str.slice(1);
}

function extractCurrencyValue2(str) {
    return parseFloat(str);
}
console.log(extractCurrencyValue('$120'));




