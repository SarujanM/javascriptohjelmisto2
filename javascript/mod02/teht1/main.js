
const nums = [];
for (i=0;i != 5; i++) {
    nums[i] = parseInt(prompt(`Number ${i+1}: `));
}

for (i=0;i!=5; i++){
    console.log(nums.pop());
}