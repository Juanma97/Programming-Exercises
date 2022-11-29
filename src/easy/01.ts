/** DESCRIPTION */

/**
 * Given an array of integers, return
 * indices of the two numbers such that
 * they add up to a specific target.
 * 
 * You may assume that each input would
 * have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * Given nums = [2, 7, 11, 15], target = 9
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9.
 * 
 * Return [0, 1]
 */

export function solution01Easy(numbers: number[], target: number): number[] {
    if (numbers.length !== 0 && target !== 0) {
    
        for (let indexFirstNumber = 0; indexFirstNumber < numbers.length; indexFirstNumber++) {
            const complement = target - numbers[indexFirstNumber];
            const indexSecondNumber = numbers.findIndex(num => num === complement);

            if (indexSecondNumber !== -1) return [indexFirstNumber, indexSecondNumber]
        }
    }

    return [];
}