var maxArea = function(height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;

    while(i <= j) {
        let area = Math.min(height[i], height[j]) * (j - i);
        if (area > max) {
            max = area;
        }
        if (height[i] < height[j]) {
            i++;
        }
        else {
            j--;
        }
    };
    
    return max;
};

let input = [1,8,6,2,5,4,8,3,7];
// let input = [1,1];
console.log(maxArea(input));
