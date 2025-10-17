/**
 * Write a function named containsDuplicate that takes an array of integers (nums) as input 
 * and returns true if any value appears at least twice in the array, and false if every element is distinct.
 *
 * Problem: Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 *
 * Examples:
 * - containsDuplicate([1,2,3,1]) → true
 * - containsDuplicate([1,2,3,4]) → false  
 * - containsDuplicate([1,1,1,3,3,4,3,2,4,2]) → true
 */

const containsDuplicate = (nums) => {
  //write your code here
  const freq = {};
  for (let i = 0; i < nums.length; i++) {
    if (!freq[nums[i]]) {
      freq[nums[i]] = 1;
      continue;
    }
    freq[nums[i]]++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (freq[nums[i]] > 1) {
      return true;
    }
  }
  return false;
};

// Export the function for testing
module.exports = { containsDuplicate };

// Example usage (commented out to avoid interference with tests)
// console.log(containsDuplicate([1,2,3,1])); // → true
// console.log(containsDuplicate([1,2,3,4])); // → false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // → true