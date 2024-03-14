// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

function isPalindrome(x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false; // Numbers ending with 0 (except 0 itself) or negative numbers cannot be palindromes
  }

  let reversed = 0;
  let original = x;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return original === reversed;
}
