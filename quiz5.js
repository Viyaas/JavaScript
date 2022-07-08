function largestOfFour(arr) {
    // Step 1. Create an array that will host the result of the 4 sub-arrays
    var lNum = [0,0,0,0];
  
    // Step 2. Create the first FOR loop that will iterate through the arrays
    for(var array = 0; array < arr.length; array++) {
    /* The starting point, index 0, corresponds to the first array */
    // Step 3. Create the second FOR loop that will iterate through the sub-arrays
     for(var arraySub = 0; arraySub < arr[array].length;arraySub++) {
     /* The starting point, index 0, corresponds to the first sub-array */
        
        if(arr[array][arraySub] > lNum[array]) {
           
           lNum[array] = arr[array][arraySub];
           
        /* FOR loop cycles
          array => i
          arraySub => j
           
        Iteration in the first array
           For each iteration: arr[i][j]           lNum[i]          if arr[i][j] > lNum[i]?     then lNum[i] = arr[i][j]
           First iteration:    arr[0][0] => 4      lNum[0] => 0     4 > 0? => TRUE                       then lNum[0] = 4
           Second iteration:   arr[0][1] => 5      lNum[0] => 4     5 > 4? => TRUE                       then lNum[0] = 5
           Third iteration:    arr[0][2] => 1      lNum[0] => 5     1 > 5? => FALSE                      then lNum[0] = 5
           Fourth iteration:   arr[0][3] => 3      lNum[0] => 5     3 > 5? => FALSE                      then lNum[0] = 5
           Fifth iteration:    arr[0][4] => FALSE  lNum[0] => 5                                          lNum = [5,0,0,0]
        Exit the first array and continue on the second one
        Iteration in the second array
           For each iteration: arr[i][j]            lNum[i]           if arr[i][j] > lNum[i]?     then lNum[i] = arr[i][j]
           First iteration:    arr[1][0] => 13      lNum[1] => 0      13 > 0? => TRUE                      then lNum[1] = 13
           Second iteration:   arr[1][1] => 27      lNum[1] => 13     27 > 13? => TRUE                     then lNum[1] = 27
           Third iteration:    arr[1][2] => 18      lNum[1] => 27     18 > 27? => FALSE                    then lNum[1] = 27
           Fourth iteration:   arr[1][3] => 26      lNum[1] => 27     26 > 27? => FALSE                    then lNum[1] = 27
           Fifth iteration:    arr[1][4] => FALSE   lNum[1] => 27                                          lNum = [5,27,0,0]
        Exit the first array and continue on the third one
        Iteration in the third array
           For each iteration: arr[i][j]            lNum[i]           if arr[i][j] > lNum[i]?     then lNum[i] = arr[i][j]
           First iteration:    arr[2][0] => 32      lNum[2] => 0      32 > 0? => TRUE                      then lNum[2] = 32
           Second iteration:   arr[2][1] => 35      lNum[2] => 32     35 > 32? => TRUE                     then lNum[2] = 35
           Third iteration:    arr[2][2] => 37      lNum[2] => 35     37 > 35? => TRUE                     then lNum[2] = 37
           Fourth iteration:   arr[2][3] => 39      lNum[2] => 37     39 > 37? => TRUE                     then lNum[2] = 39
           Fifth iteration:    arr[2][4] => FALSE   lNum[2] => 39                                          lNum = [5,27,39,0]
        Exit the first array and continue on the fourth one
        Iteration in the fourth array
           For each iteration: arr[i][j]            lNum[i]           if arr[i][j] > lNum[i]?     then lNum[i] = arr[i][j]
           First iteration:    arr[3][0] => 1000    lNum[3] => 0      1000 > 0? => TRUE                    then lNum[3] = 1000
           Second iteration:   arr[3][1] => 1001    lNum[3] => 1000   1001 > 1000? => TRUE                 then lNum[3] = 1001
           Third iteration:    arr[3][2] => 857     lNum[3] => 1001   857 > 1001? => FALSE                 then lNum[3] = 1001
           Fourth iteration:   arr[3][3] => 1       lNum[3] => 1001   1 > 1001? => FALSE                   then lNum[3] = 1001
           Fifth iteration:    arr[3][4] => FALSE   lNum[3] => 1001                                        lNum = [5,27,39,1001]
        Exit the FOR loop */
         }
     }
  }
  // Step 4. Return the largest numbers of each sub-arrays
  return lNum; // lNum = [5,27,39,1001];
 }
 
 console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// find the largest number in array