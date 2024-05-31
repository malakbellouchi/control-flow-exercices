function isPrime(number) {
  for (let i = 2; i < number; i++)
    if (number % i === 0) {
      return true;
    } else {
      return false;
    }
}

console.log(isPrime(6));
