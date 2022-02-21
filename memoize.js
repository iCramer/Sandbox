function memoize(func) {
    let cache = {};

    return function(...args) {
        let key = JSON.stringify(args);
        if (cache[key]) {
            console.log('cached:' + cache[key]);
            return cache[key];
        }
        else {
            let val = func(args);
            cache[key] = val;
            console.log('new:' + cache[key]);
            return val;
        }
    }
}

function adder(a) {
    return function(b) {
        return a + b;
    }
}

let addFive = memoize(adder(5));

// console.log(addFive(10));
// console.log(addFive(10));


function memo(func) {
    let cache = {};

    return function(...args) {
        let key = JSON.stringify(...args);

        if (cache[key]) {
            console.log('cahched: ' + cache[key])
            return cache[key];
        }
        else {
            const val = func.apply(null, args);
            cache[key] = val;
            console.log('new: ' + cache[key])
            return val;
        }
    }
}

const multiplier = a => b => a * b ;

const timesTwo = memo(multiplier(2));
console.log(timesTwo(10));
console.log(timesTwo(10));