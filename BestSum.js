/*
	Problem Description 
	Write a function bestSum(targetSum , numbers ) that takes in targetSum and an array of numbers as arguments.
	
	The function should retrun an arry containing the shortest combination of numbers that can add up to extacly the targetSum.
	
	If there is a tie for the shortest combination, you may retrun any one of the shortest.
*/


const bestSum = ( targetSum, numbers ) => {
//basecase
if(targetSum === 0) return [];
if(targetSum < 0) return null;

let shortestComb = null;

for(let num of numbers){
		const remainder =  targetSum - num;
    const remainderComb = bestSum(remainder, numbers);
   
	if(remainderComb !== null ){
  	const comb =  [...remainderComb, num];
    if(shortestComb === null || shortestComb.length > comb.length){
     shortestComb = comb;
    }
    
  }
}

return shortestComb;
};

console.log(baseSum(10, [5,3,4,7,25]));
