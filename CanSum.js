/*
	Problem Description 
	Write a function canSum(targetSum , numbers ) that takes in targetSum and an array of numbers as arguments.
	
	The function should return a boolean indicating wheather or not it is possible to genrate the targetSum using numbers from array.

You may use an element of the array as many times as needed

you may assume that all input num ar non-negative. 
*/


const canSum = ( targetSum, numbers,) => {
//basecase
if(targetSum === 0) return true;
if(targetSum < 0) return false;


for(let num of numbers){
		const remainder =  targetSum - num;
    const remainderComb = canSum(remainder, numbers);
    if(remainderComb) return true;
	
}

return false;
};

console.log(canSum(28, [14,7]));
