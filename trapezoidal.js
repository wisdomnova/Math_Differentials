function trapezoidalRule(f, a, b, n) {
    const h = (b - a) / n;
    let sum = f(a) + f(b);
    for (let i = 1; i < n; i++) {
      sum += 2 * f(a + i * h);
    }
    return (h / 2) * sum;
}