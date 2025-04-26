function taylorSeries(f, x, a, n) {
    // f: the function to approximate
    // x: the point at which to evaluate the approximation
    // a: the point around which to expand the series
    // n: the number of terms to include in the approximation
  
    let result = f(a);
    let factorial = 1;
    let derivative = f;
  
    for (let i = 1; i <= n; i++) {
      factorial *= i;
      derivative = derivative.derive(); // Assuming a 'derive' method for the function
      result += (derivative(a) * Math.pow(x - a, i)) / factorial;
    }
  
    return result;
}