function testPrime(num) {
    for (let i = 2; i < num; i++) {
        if ((num % i) === 0) {
            return false;
        } else {
            return true;
        }
    }
}
console.log(testPrime(7));
console.log(testPrime(12));