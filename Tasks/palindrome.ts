function isPalindrome(input: number): boolean {
  const numToString = input.toString();
  const StringToArray = Array.from(numToString);
  const reverseArray = StringToArray.reverse();
  const join = reverseArray.join('');

  return numToString === join;
}

console.log(isPalindrome(12321));
