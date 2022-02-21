var longestPalindrome = function(words) {
    let matches = [];
    let anchor = '';
    while(words.length) {
        const word = words[0];
        const wordReversed = word[1] + word[0];
        if (word === wordReversed && words.indexOf(word, 1) === -1) {
            anchor = word;
        }
        else if (words.includes(wordReversed)) {
            matches.push([word, wordReversed]);
            words.splice(words.indexOf(wordReversed, 1), 1);
        }
        words.shift();
    }
    let palendrome = anchor ? [anchor] : [];
    matches.forEach((word, index) => {
        palendrome.unshift(word[0]);
        palendrome.push(word[1]);
    });
    console.log(palendrome)
    return palendrome.join('');
};

const words = ["lc","cl","gg"];

console.log(longestPalindrome(words));
