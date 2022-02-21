const fib = (n) => {
    if (!n || n === 0) {
        return 0
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    let results = [1, 1];
    
    for(let i = 2; i < n; i++) {
        results[i] = results[i - 1] + results[i - 2];
    }
    return results[n - 1];
}

console.log(fib(0));
