/* You are given a NxN grid of elements 
	represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {

	/*

	for(i)
	for(j)

	*/
	
	for (let i = 0; i < grid.length; i++) {
		let temp=grid[i][0];
		for (let j = grid[i].length-1; j < ; j++) {
			temp=grid[i][j];
			
		}
	}

}

/*

  x	 y 		 x  y
{ 0, 0 }=> { 0, 2 }
{ 0, 1 }=> { 1, 2 }
{ 0, 3 }=> { 2, 2 }

{ 1, 0 }=> { 0, 1 }
{ 1, 1 }=> { 1, 1 }
{ 1, 2 }=> { 2, 1 }

{ 2, 0 }=> { 0, 0 }
{ 2, 1 }=> { 1, 0 }
{ 2, 2 }=> { 2, 0 }


*/



//console.log(  rotateGrid([   [1, 2, 3],[4, 5, 6],[7, 8, 9]  ]),3 ) 
module.exports = rotateGrid;
