function fib(n, iters = 0, prev1 = 0, prev2 = 1) {
    return (n == iters) ? (prev1) : fib(n, iters+=1, prev2, (prev1+prev2));
}
