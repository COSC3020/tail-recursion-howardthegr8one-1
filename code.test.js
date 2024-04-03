const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('testing.js')+'');

function fibTest(n) {
    return (n == 0) ? 0 : (n == 1) ? 1 : fibTest(n-2) + fibTest(n-1);
}

const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(fibTest(n)) ==
            JSON.stringify(fib(n));
    });
jsc.assert(test);
