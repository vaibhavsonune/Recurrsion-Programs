/*
	Problem Description 
	Write a function howSum(targetSum , numbers ) that takes in targetSum and an array of numbers as arguments.
	
	The function should retrun an arry containing any combination of numbers that can add up to extacly the targetSum.
  if there is no combination that adds up to the targetSum, then return null
	
	If there are multiple combinationa, you may retrun any one of the them.
*/


const howSum = ( targetSum, numbers ) => {
//basecase
if(targetSum === 0) return [];
if(targetSum < 0) return null;

for(let num of numbers){
		const remainder =  targetSum - num;
    const remainderComb = howSum(remainder, numbers);
	if(remainderComb !== null){
  	return [...remainderComb, num]
  }   
}

return null;
};

console.log(howSum(30, [25,3,4,7,25]));
