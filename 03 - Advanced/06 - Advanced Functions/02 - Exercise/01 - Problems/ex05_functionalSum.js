function add(a) {
    function sum(b) {
        a += b;
        return sum;
    }
    
    sum.toString = () => a;
    return sum;
}

console.log(add(1));
console.log(add(1)(6)(-3));