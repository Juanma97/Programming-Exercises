/** DESCRIPTION */

/**
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * 
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * 
 * Example 2:
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * Example 3:
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * 
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

export function solution02Medium (token: string): number {
    if (token.length === 1) return 1;

    token = token.replace(/\s/g, '');

    const characters: string[] = token.split('');
    let word: string = '';
    const results: number[] = [];

    for (let index = 0; index < characters.length; index++) {
        if (word.includes(characters[index])) {
            results.push(word.length);
            word = '';
            index--;
        } else {
            word += characters[index];
        }
    }

    results.push(word.length);

    return results.sort().reverse()[0];
}