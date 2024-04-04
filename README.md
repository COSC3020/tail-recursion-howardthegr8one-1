[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/bHkMPWBv)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

## My Runtime Analysis
The runtime is different for the tail-recursive version than it was for my non-tail-recursive implementation. In my old non-tail-recursive version when not in the base case the function would make two recursive calls, each of these calls would then make two more recursive calls and so on until each branch of calls hit the base case. The tail-recursive version only makes recursive calls in a linear way as only one recursive call is made, leaving us with $\Theta(n)$ in the worst-case.
