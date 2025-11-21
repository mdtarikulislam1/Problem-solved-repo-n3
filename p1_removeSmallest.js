function removeSmallest(numbers) {
  const minnum = Math.min(...numbers);
const indexOfMin = numbers.indexOf(minnum)
  return numbers.filter((value,index)=>index !== indexOfMin)
}

const num1 = [1,1, 2, 3, 4, 5];

console.log(removeSmallest(num1));
