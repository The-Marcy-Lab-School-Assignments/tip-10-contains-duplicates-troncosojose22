/**
 * Test suite for the contains duplicates problem
 * 
 * Problem: Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

const { containsDuplicate } = require('./index.js');

describe('containsDuplicate', () => {
  // Test cases from the README examples
  describe('Example test cases', () => {
    test('should return true for [1,2,3,1]', () => {
      expect(containsDuplicate([1,2,3,1])).toBe(true);
    });

    test('should return false for [1,2,3,4]', () => {
      expect(containsDuplicate([1,2,3,4])).toBe(false);
    });

    test('should return true for [1,1,1,3,3,4,3,2,4,2]', () => {
      expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
    });
  });

  // Additional edge cases and comprehensive tests
  describe('Edge cases', () => {
    test('should return false for single element array', () => {
      expect(containsDuplicate([1])).toBe(false);
    });

    test('should return false for empty array', () => {
      expect(containsDuplicate([])).toBe(false);
    });

    test('should return false for array with two different elements', () => {
      expect(containsDuplicate([1, 2])).toBe(false);
    });

    test('should return true for array with two same elements', () => {
      expect(containsDuplicate([1, 1])).toBe(true);
    });

    test('should return true for array with all same elements', () => {
      expect(containsDuplicate([1, 1, 1, 1])).toBe(true);
    });
  });

  describe('Complex scenarios', () => {
    test('should return true for array with multiple duplicates', () => {
      expect(containsDuplicate([1, 2, 3, 1, 2, 3])).toBe(true);
    });

    test('should return false for array with all unique elements', () => {
      expect(containsDuplicate([1, 2, 3, 4, 5, 6])).toBe(false);
    });

    test('should return true for array with negative numbers', () => {
      expect(containsDuplicate([-1, 2, -1, 4])).toBe(true);
    });

    test('should return false for array with all negative unique numbers', () => {
      expect(containsDuplicate([-1, -2, -3, -4])).toBe(false);
    });

    test('should return true for array with zero duplicates', () => {
      expect(containsDuplicate([0, 1, 0, 2])).toBe(true);
    });

    test('should return true for array with large numbers', () => {
      expect(containsDuplicate([1000000, 2, 1000000, 4])).toBe(true);
    });
  });

  describe('Performance and constraints', () => {
    test('should handle maximum length array (105 elements)', () => {
      const largeArray = Array.from({length: 105}, (_, i) => i);
      expect(containsDuplicate(largeArray)).toBe(false);
    });

    test('should handle array with all same elements at maximum length', () => {
      const largeArray = new Array(105).fill(1);
      expect(containsDuplicate(largeArray)).toBe(true);
    });

    test('should handle array with mixed positive and negative numbers', () => {
      expect(containsDuplicate([-1, 0, 1, -1, 0, 1])).toBe(true);
    });
  });

  describe('Boundary conditions', () => {
    test('should return false for array with exactly 2 unique elements', () => {
      expect(containsDuplicate([1, 2])).toBe(false);
    });

    test('should return true for array with exactly 2 duplicate elements', () => {
      expect(containsDuplicate([1, 1])).toBe(true);
    });

    test('should handle array where duplicates are at the beginning', () => {
      expect(containsDuplicate([1, 1, 2, 3, 4])).toBe(true);
    });

    test('should handle array where duplicates are at the end', () => {
      expect(containsDuplicate([1, 2, 3, 4, 4])).toBe(true);
    });

    test('should handle array where duplicates are in the middle', () => {
      expect(containsDuplicate([1, 2, 2, 3, 4])).toBe(true);
    });

    test('should handle array with multiple different duplicates', () => {
      expect(containsDuplicate([1, 1, 2, 2, 3, 3])).toBe(true);
    });
  });
});