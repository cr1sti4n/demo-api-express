export function ArrayAvg(values: number[]): number {
    let i = 0, summ = 0, ArrayLen = values.length;
    while (i < ArrayLen) {
        summ = summ + values[i++];
    }
    return summ / ArrayLen;
}
/*var myArray = [1, 5, 2, 3, 7];
var a = ArrayAvg(myArray);
console.log(a)*/