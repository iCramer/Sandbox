var isValid = function(s) {
    if (s.length === 1) return false;
    let stack = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    let validString = true;

    sArray = s.split('');
    sArray.forEach((char, index) => {
      if (index === 0 && Object.keys(map).includes(char)) {
        stack.push(char);
      }
      else if (index === 0 && !Object.keys(map).includes(char)) {
        validString = false;
      }
      else if (Object.keys(map).includes(char) && index !== sArray.length - 1) {
        stack.push(char);
      }
      else if (char !== map[stack.pop()]) {
        validString = false;
      }
    });

    return stack.length ? false : validString;
};

const s = "((";
console.log(isValid(s));
