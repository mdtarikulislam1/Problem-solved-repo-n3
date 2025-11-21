# I'm solved 10 problem in codewars 

## Remove Smallest Number 
**Description:**

### The museum of incredibly dull things
The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

### Task 
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

### Example 
```
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
```

### Solution
```
function removeSmallest(numbers) {
  const minnum = Math.min(...numbers);
const indexOfMin = numbers.indexOf(minnum)
  return numbers.filter((value,index)=>index !== indexOfMin)
}
const num1 = [1,1, 2, 3, 4, 5];
console.log(removeSmallest(num1)); Output = [1,2,3,4,5]
```

## TwiceAsOld
**Description:**

### 
Your function takes two arguments:

1. current father's age (years)
2. current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

### Solution 
```
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

console.log(twiceAsOld(52,20)); Output = 12
```