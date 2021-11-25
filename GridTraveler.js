/*
	Say that you are a traveler on 2D grid. You Begin in the Top-left  corner and your goal is to travel to the bottom-right corner. You may only move down or right.
  
  In how many ways can you travel to the goal on a grid with dimensions m*N?
  
  Write a Function gridTraveler(m,n) that calculates this.
  
*/


const gridTraveler = (m,n) => {
//base
		
		if(m == 1 && n == 1) return 1;
    if(m <= 0 || n <= 0 ) return 0;
    return gridTraveler(m-1,n) + gridTraveler(m,n-1);
  
};

console.log(gridTraveler(3,3));
