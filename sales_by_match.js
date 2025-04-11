function sockMerchant(n, ar) {
  const sockCount = {};
  let pairs = 0;

  for (let sock of ar) {
    sockCount[sock] = (sockCount[sock] || 0) + 1;
  }

  for (let count of Object.values(sockCount)) {
    pairs += Math.floor(count / 2);
  }

  return pairs;
}
console.log(sockMerchant (9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
