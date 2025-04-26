function a(){
    // Euler's theorem example
    const a = 3;
    const n = 7;
    const result = eulersTheorem(a, n);
    console.log(`Euler's theorem: ${a}^${totient(n)} mod ${n} = ${result}`);
}


function b(){
    // Simpson's 1/3 rule example
    const f = (x) => x * x;
    const a = 0;
    const b = 2;
    const n = 4;
    const integral = simpsons13Rule(f, a, b, n);
    console.log(`Simpson's 1/3 rule: Integral of f(x) = x^2 from ${a} to ${b} ≈ ${integral}`);
}



// Define a differential equation (dy/dx = x + y) - pickards
function f(x, y) {
    return x + y;
  }
  // Solve the equation using Picard's method
  const results = picardsMethod(f, 0, 1, 0.1, 5);
  
  // Print the results
  console.log(results);





  // Define a function and its derivative - taylors
function f(x) {
    return Math.sin(x);
  }
  
  function fPrime(x) {
    return Math.cos(x);
  }
  




  // Approximate sin(0.5) using the Taylor series around x=0 with 5 terms
  const approximation = taylorSeries(f, 0.5, 0, 5);
  console.log("Approximation of sin(0.5):", approximation);


  // Simpson's 3/8 rule example
const f = (x) => x * x;
const a = 0;
const b = 2;
const n = 6;
const integral38 = simpsons38Rule(f, a, b, n);
console.log(`Simpson's 3/8 rule: Integral of f(x) = x^2 from ${a} to ${b} ≈ ${integral38}`);

// Simpson's 1/3 rule example
const integral13 = simpsons13Rule(f, a, b, n);
console.log(`Simpson's 1/3 rule: Integral of f(x) = x^2 from ${a} to ${b} ≈ ${integral13}`);

// Trapezoidal rule example
const integralTrap = trapezoidalRule(f, a, b, n);
console.log(`Trapezoidal rule: Integral of f(x) = x^2 from ${a} to ${b} ≈ ${integralTrap}`);




// trapezoidal
function trapezoidalRule(f, a, b, n) {
    const h = (b - a) / n;
    let sum = f(a) + f(b);
    for (let i = 1; i < n; i++) {
      sum += 2 * f(a + i * h);
    }
    return (h / 2) * sum;
  }