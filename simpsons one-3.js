function simpsons13Rule(f, a, b, n) {
    if (n % 2 !== 0) {
      return "Simpson's 1/3 rule requires an even number of intervals.";
    }
  
    const h = (b - a) / n;
    let sum = f(a) + f(b);
    for (let i = 1; i < n; i++) {
      sum += (i % 2 === 0 ? 2 : 4) * f(a + i * h);
    }
    return (h / 3) * sum;
  }