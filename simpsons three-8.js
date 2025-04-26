function simpsons38Rule(f, a, b, n) {
    if (n % 3 !== 0) {
      return "Simpson's 3/8 rule requires a multiple of 3 intervals.";
    }
  
    const h = (b - a) / n;
    let sum = f(a) + f(b);
    for (let i = 1; i < n; i++) {
      sum += (i % 3 === 0 ? 3 : 2) * f(a + i * h);
    }
    return (3 * h / 8) * sum;
}