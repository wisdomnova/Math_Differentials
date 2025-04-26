function picardsMethod(f, x0, y0, h, n) {
    // f: the function defining the differential equation (dy/dx = f(x, y))
    // x0: the initial x value
    // y0: the initial y value
    // h: the step size
    // n: the number of iterations
  
    const results = [];
    let x = x0;
    let y = y0;
  
    results.push({ x, y });
  
    for (let i = 0; i < n; i++) {
      y = y0 + h * f(x, y);
      x += h;
      results.push({ x, y });
    }
  
    return results;
}