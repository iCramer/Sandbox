function closestSum(a1, a2, target) {
    const arr1Sorted = a1.sort((a, b) => a - b);
    const arr2Sorted = a2.sort((a, b) => a - b);
    let i = 0;
    let j = arr2Sorted.length - 1;
    let smallestDiff = Math.abs(arr1Sorted[0] + arr2Sorted[0] - target);
    let closestPair = [arr1Sorted[0], arr2Sorted[0]];
  
    while (i < arr1Sorted.length && j >= 0) {
      const arr1Val = arr1Sorted[i];
      const arr2Val = arr2Sorted[j];
      const diff = arr1Val + arr2Val - target;
      console.log(diff, smallestDiff)
  
      if (Math.abs(diff) < smallestDiff) {
        smallestDiff = Math.abs(diff);
        closestPair = [arr1Val, arr2Val];
      }
      if (diff === 0) {
        return closestPair;
      }
      else if (diff < 0) {
        i += 1;
      }
      else {
        j -= 1;
      }
      console.log(closestPair)
    }
    return closestPair;
  };
  
  // let a1 = [-1, 3, 8, 2, 9, 5];
  // let a2 = [4, 1, 2, 10, 5, 20];
  // let targetSum = 24;
  
  let a1 = [19, 14, 6, 11, -16, 14, -16, -9, 16, 13]
  let a2 = [13, 9, -15, -2, -18, 16, 17, 2, -11, -7]
  let targetSum = -15
  
  // console.log(closestSum(a1, a2, targetSum));
  