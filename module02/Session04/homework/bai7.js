let scores = [1, 2, 3, 4, 5];

console.log("Bình phương của từng phần tử:");

scores.forEach((x) => console.log(x * x));

let doubledScores = scores.map((x) => x * 2);

console.log("Mảng doubledScores:", doubledScores);
