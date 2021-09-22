/**
 * IF statement -> execute a block of code if a condition is true
 */
function onSubmitClick(event) {
    const inputValue = document.getElementById('inputNumber').value;
    if (Number(inputValue) < 5) {
        document.getElementById('result').innerText = 'Value is smaller than 5';
    }
}

/**
 * IF ELSE statement -> execute a block of code if a condition is true, otherwise execute a different block of code
 */
// function onSubmitClick() {
//     const inputValue = document.getElementById('inputNumber').value;
//     if (Number(inputValue) < 5) {
//         document.getElementById('result').innerText = 'Value is smaller than 5';
//     } else {
//         document.getElementById('result').innerText = 'Value is bigger than 5';
//     }
// }


/**
 * IF ELSE IF statement -> execute a block of code if a condition is true,
 *                      -> if not, execute a block of code if a different condition is met
 *                      -> if no conditions are met, execute a different block of code as default (optional)
 */
// function onSubmitClick() {
//     const inputValue = document.getElementById('inputNumber').value;
//     if (Number(inputValue) < 5) {
//         document.getElementById('result').innerText = 'Value is smaller than 5';
//     } else if (Number(inputValue) > 5) {
//         document.getElementById('result').innerText = 'Value is bigger than 5';
//     } else {
//         document.getElementById('result').innerText = 'Value is equal to 5';
//     }
// }


/**
 * SWITCH statement -> compares different cases to the input value
 *                  -> if a case value equals input value, then the block of code for that case executes
 *                  -> multiple cases can be executed if the case value matches input value
 *                  -> break will interupt switch execution and no other cases will be investigated
 */
// function onSubmitClick() {
//     const inputValue = document.getElementById('inputNumber').value;
//     switch (Number(inputValue)) {
//         case 1:  
//             document.getElementById('result').innerText = 'Value is smaller than 5';
//             break;
//         case 2:  
//             document.getElementById('result').innerText = 'Value is smaller than 5';
//             break;
//         case 3:  
//             document.getElementById('result').innerText = 'Value is smaller than 5';
//             break;
//         case 4:  
//             document.getElementById('result').innerText = 'Value is smaller than 5';
//             break;
//         case 5:  
//             document.getElementById('result').innerText = 'Value is equal to 5';
//             break;
//         case 6:  
//             document.getElementById('result').innerText = 'Value is bigger than 5';
//             break;
//         case 7:  
//             document.getElementById('result').innerText = 'Value is bigger than 5';
//             break;
//         case 8:  
//             document.getElementById('result').innerText = 'Value is bigger than 5';
//             break;
//         case 9:  
//             document.getElementById('result').innerText = 'Value is bigger than 5';
//             break;
//         case 10:  
//             document.getElementById('result').innerText = 'Value is bigger than 5';
//             break;
//         default:
//             document.getElementById('result').innerText = 'Value entered is not an integer number between 1 and 10';
//             break;
//     }
// }