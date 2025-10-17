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
  // Create a frequency object
  const freq = {};
  // loop through the nums array
  for (let i = 0; i < nums.length; i++) {
    // if the current number is not in the object, initialize it with a value of 1
    if (!freq[nums[i]]) {
      freq[nums[i]] = 1;
      continue;
    }
    // if the current number is in the object we add 1 to it
    freq[nums[i]]++;
  }
  // loop through the nums array a second time
  for (let i = 0; i < nums.length; i++) {
    // if the current number is in the frequency object with a value higher than 1, return true
    if (freq[nums[i]] > 1) {
      return true;
    }
  }
  // if no duplicates were found, return false after the loop
  return false;
};

// Export the function for testing
module.exports = { containsDuplicate };

// Example usage (commented out to avoid interference with tests)
// console.log(containsDuplicate([1,2,3,1])); // → true
// console.log(containsDuplicate([1,2,3,4])); // → false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // → true