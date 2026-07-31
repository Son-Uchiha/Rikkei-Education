let numbers = [10, 25, 42, 58, 91, 100];

const checkNumber = (searchValue) => {
  if (numbers.includes(searchValue)) {
    let index = numbers.indexOf(searchValue);
    console.log(`Tìm thấy ${searchValue} tại vị trí index: ${index}`);
  } else {
    console.log("Not found");
  }
};

checkNumber(42);
checkNumber(99);
