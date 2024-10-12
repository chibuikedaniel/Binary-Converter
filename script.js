//********* easter egg ********//
const a = () => {
    return "dracuzi " + b();
};

const b = () => {
    return "is " + c();
};

const c = () => {
    return "awesome!";
};

console.log(a());
// ********** END **********//

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

//********* function to convert to binary ********/////
const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
        return String(input);
    } else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
};

// ******** OR *******////
// const decimalToBinary = (input) => {
//     let binary = "";

//     if (input === 0) {
//         binary = "0";
//     }

//     while (input > 0) {
//         binary = (input % 2) + binary;
//         input = Math.floor(input / 2);
//     }

//     result.innerText = binary;
// };

// ******** OR *******////
// const decimalToBinary = (input) => {
//     const inputs = [];
//     const quotients = [];
//     const remainders = [];

//     if (input == 0) {
//         result.innerText = "0";
//         return
//     };

//     while (input > 0) {
//         const quotient = Math.floor(input / 2);
//         const remainder = input % 2;

//         inputs.push(input);
//         quotients.push(quotient);
//         remainders.push(remainder);
//         input = quotient;
//     }

//     console.log("Inputs: ", inputs);
//     console.log("Quotients: ", quotients);
//     console.log("Remainders: ", remainders);

//     result.innerText = remainders.reverse().join("");
// }
// ******** END *******////

const showAnimation = () => {

};

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);
    if (!numberInput.value ||
        isNaN(inputInt) || inputInt < 0) {
        alert("Please provide a decimal number greater than or equal to 0");
        return
    }
    if (inputInt === 5) {
        showAnimation()
        return
    }
    // decimalToBinary(inputInt);
    result.textContent = decimalToBinary(Math.floor(input / 2)) + (input % 2)
    numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});