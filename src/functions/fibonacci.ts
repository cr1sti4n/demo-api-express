export function GetFibonacciNumber(index: number): number {
    const fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    console.log('index ->', index);
    const loop = index + 1;

    for (var i = 2; i < loop; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    console.log(fibonacci);

    return fibonacci[index];
}