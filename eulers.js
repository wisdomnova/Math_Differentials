function eulersTheorem(a, n) {
    if (gcd(a, n) !== 1) {
      return "Euler's theorem does not apply. a and n must be relatively prime.";
    }
  
    const phiN = totient(n);
    const result = Math.pow(a, phiN) % n;
  
    return result;
  }
  
  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  
  function totient(n) {
    let result = n;
    for (let p = 2; p * p <= n; p++) {
      if (n % p === 0) {
        result -= result / p;
        while (n % p === 0) {
          n /= p;
        }
      }
    }
    if (n > 1) {
      result -= result / n;
    }
    return result;
  }