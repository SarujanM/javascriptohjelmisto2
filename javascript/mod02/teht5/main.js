const numbers = [];

while (true) {
    let num = parseInt(prompt("Number: "))

    if (numbers.includes(num)) {
        console.log("Number has already been given, quitting loop.")
        break
    }
    else {
        numbers.push(num)
    }
}
for(num of numbers.sort((a,b) => a-b)) {
    console.log(num)
}