
const fib = (f => m => f(f)(m))(g => k => k < 2 ? k : g(g)(k - 1) + g(g)(k - 2))

for (let i = 0; i < 13; i++) console.log(i, fib(i))



