module.exports = function toReadable(number) {
    let readable = "";
    let numbers = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    let tens = {
        0: "",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    switch (number.toString().length) {
        case 1:
            if (number == 0) {
                readable = "zero";
            } else {
                readable = numbers[number];
            }
            break;
        case 2:
            if (number < 20) {
                readable = numbers[number];
            } else if (number.toString()[1] == 0) {
                readable = tens[number.toString()[0]];
            } else {
                readable =
                    tens[number.toString()[0]] +
                    " " +
                    numbers[number.toString()[1]];
            }
            break;
        case 3:
            if (number.toString().slice(1) == "00") {
                readable = numbers[number.toString()[0]] + " hundred";
            } else if (
                Number(number.toString().slice(1)) > 9 &&
                Number(number.toString().slice(1)) < 20
            ) {
                readable =
                    numbers[number.toString()[0]] +
                    " hundred " +
                    numbers[Number(number.toString().slice(1))];
            } else {
                readable =
                    numbers[number.toString()[0]] +
                    " hundred " +
                    tens[number.toString()[1]] +
                    " " +
                    numbers[number.toString()[2]];
            }
            break;
    }
    console.log(readable.toString());
    return readable.replace(/ +/g, " ").trim();
};
