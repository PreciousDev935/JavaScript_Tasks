
function bonAppetit(bill, k, b) {
  const total = (bill.reduce((sum, item) => sum + item, 0) - bill[k]) / 2;
  return b === total ? "Bon Appetit" : b - total;
}
console.log(bonAppetit([3, 10, 2, 9], 1, 12)); 
