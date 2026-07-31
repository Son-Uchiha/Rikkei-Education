const sum = (numbers) => {
  let s = 0;

  for (const x of numbers) if (x % 2 === 0) s += x;

  return s;
};

const numbers = [1, 2, 3, 4, 5, 6];
console.log(sum(numbers));
