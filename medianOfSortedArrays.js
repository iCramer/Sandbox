var findMedianSortedArrays = function(nums1, nums2) {
  let index1 = 0;
  let index2 = 0;
  const length1 = nums1.length;
  const length2 = nums2.length;

  while(nums1.length < length1 + length2) {
    if (index1 >= nums1.length && index2 < length2) {
      nums1.push(nums2[index2]);
      index2++;
    }
    else if (index2 >= length2 && index1 < length1) {
      index1++;
    }
    else if (nums1[index1] < nums2[index2]) {
      index1++;
    }
    else {
      nums1.splice(index1, 0, nums2[index2]);
      index2++;
      index1++;
    }
  }

  let evenLength = nums1.length % 2 === 0;
  let median = 0;
  if (!evenLength) {
    median = nums1[Math.floor(nums1.length / 2)];
  }
  else {
    const halfLength = nums1.length / 2;
    median = (nums1[halfLength - 1] + nums1[halfLength]) / 2;
  }

  return median;
};

const nums1 = [3];
const nums2 = [-1, -2]
console.log(findMedianSortedArrays(nums1, nums2));
