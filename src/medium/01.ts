/** DESCRIPTION */

/**
 * You are given two non-empty arrays
 * that representing two non-negative
 * integers. The digits are stored in
 * reverse order and each of their nodes
 * contain a single digit. Add the two
 * numbers and return it as an array.
 * 
 * You may assum the two numbers do not
 * contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * Input: [2, 4, 3] + [5, 6, 4]
 * Output: [7, 0, 8]
 * Explanation: 342 + 465 = 807
 */

export function solution01Medium (firstNumber: number[], secondNumber: number[]): number[] {
    if (firstNumber.length && secondNumber.length) {
        const num1 = firstNumber.reverse().join('');
        const num2 = secondNumber.reverse().join('');

        const sum = parseInt(num1) + parseInt(num2);

        return sum.toString().split('').reverse().map(num => parseInt(num));
    }
    return [];
}