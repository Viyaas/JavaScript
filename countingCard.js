var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;

    case 7:
    case 8:
    case 9:
        count = 0;     // this is code also be execute , we comfortable which of one
        break;
  }

  var holdbet = 'Hold';

//   if (count > 0)
//   {
//     return count + " Bet";
//   } 
//   else 
//   {
//   return count + " Hold";
// }
  

return count + " " + holdbet;

}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc('A'));