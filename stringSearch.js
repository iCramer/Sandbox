var lengthOfLongestSubstring = function(s) {
    let sArray = Array.from(s);
    let maxSubStr = 0;
    let subStr = [];
    
    sArray.forEach((letter) => {
        let repeat = subStr.indexOf(letter);
        console.log(repeat)
        if (repeat > -1) {
            subStr.splice(0, repeat + 1);
        }
        subStr.push(letter);

        if (subStr.length > maxSubStr) maxSubStr = subStr.length;
        console.log(subStr)
    });
    return maxSubStr;
};

// let input = "abcabcbb";
// let input = "bbbbb";

// console.log(lengthOfLongestSubstring(input));


///////////   Palindrome  //////////////

const longestPalindrome = function(s) {
    console.log(s.reverse());
};

let input = 'babad';

console.log(longestPalindrome(input));
