function getMoneySpent(keyboards, drives, b) {
  let bestBuy = -1;

  for(let i in keyboards) {
    for(let j in drives) {
      const currentBuy = keyboards[i] + drives[j];
      if(currentBuy <= b && currentBuy > bestBuy) {
        bestBuy = currentBuy;
      }
    }
  }

  return bestBuy;
}

let keyboards = [40, 50, 60];
let drives = [5, 8, 12];
let b = 60;

console.log(getMoneySpent(keyboards, drives, b))


