let merged = [...[1,3,5,7], ...[2,4,6,8], ...[1,2,3,4,5,6,7,8]].sort();

let inputSet = [...new Set(merged)];
// console.log(inputSet)
let [first, second, third] = inputSet;
// console.log(first, second, third);

function mergeLists(arr1, arr2, limit) {
  let merged = [];
  let counter = limit;
  
  while (counter > 0 && (arr1.length || arr2.length)) {
    if(arr1.length && !arr2.length) {
      merged.push(arr1[0]);
      arr1.shift();
    }
    else if(!arr1.length && arr2.length) {
      merged.push(arr2[0]);
      arr2.shift();
    }
    else if (arr1.length && arr1[0] <= arr2[0]) {
      merged.push(arr1[0]);
      arr1.shift();
    }
    else if (arr2.length && arr1[0] > arr2[0]) {
      merged.push(arr2[0]);
      arr2.shift();
    }
    
    counter--;
  }
  console.log(merged);
  
  
  return merged;
}

// console.log(mergeLists([0, 1, 2], [2,0,6], 10));

// const merge = function(nums1, m, nums2, n) {
//   let index2 = 0;
//   let arrPos = 0;
//   let arr1Count = m;
  
//   while (arrPos < m + n) {
//     if (nums1[arrPos] > nums2[index2] || arr1Count < 1) {
//       let spliceLen = arr1Count < 1 ? 1 : 0;
//       console.log(spliceLen);
//       nums1.splice(arrPos, spliceLen, nums2[index2]);
//       index2++;

//       if(spliceLen === 0) nums1.pop();
//     }
//     else {
//       arr1Count--;
//     }
//     console.log(nums1);
//     arrPos++;
//     console.log('arr1Count: ' + arr1Count, 'index2: ' + index2, 'arrPos: ' + arrPos);
//   }
// };

const merge = function(nums1, m, nums2, n) {
    let current = nums1.length - 1;
    m--;
    n--;
    
    while (current > -1 && (n > -1 || m > -1)) {
      if ((n < 0 && m > -1) || nums1[m] >= nums2[n]) {
        nums1[current] = nums1[m];
        nums1[m] = nums2[n];
        m--;
      }
      else if (n > -1) {
        nums1[current] = nums2[n];
        n--;
      }
      current--;
    }
  };
  
  // merge([1,2,3,0,0,0], 3, [2,5,6], 3);
  merge([-1, -1, 0, 0, 0, 0], 4, [-1, 0], 2);