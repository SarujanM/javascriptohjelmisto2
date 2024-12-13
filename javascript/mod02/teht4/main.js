const numbers = [];

while (true) {
    var num = parseInt(prompt("Number (0 to stop): "));
    if (num == 0) {
        break
    }
    numbers.push(num)
}

for (num of numbers.sort((a,b) => a-b).reverse()) {
    console.log(num);
}