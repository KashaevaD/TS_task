//Выполнить оптимизацию цикла
function optimaze() {
    var t = 3;
    var cos = Math.cos(t);
    var sin = Math.sin(t);
    var h1 = 4;
    var h2 = 3;
    var constF = 0.1 * h1;
    var constS = 0.01 * h2;
    var x = new Array();
    for (var i = 0; i < 100; i++) {
        x[i] = new Array();
        for (var j = 0; j < 3; j++) {
            x[i][j] = 0;
        }
    }
    for (var k = 0; k < 3; k++) {
        x[k][1] = cos + constF * k;
        x[k][2] = sin + constS * k;
    }
}
console.log("task 1 _1");
// Составьте алгоритм и напишите программу для вычисления приближенного значения
//натурального логорифма от произвольного значения аргумента |x|< 1, вводимого с клавиатуры.
function seriesTaylor(x) {
    var sum = 0;
    var E = 0.376;
    var n = 0;
    var factor = 1;
    do {
        n++;
        x = Math.pow(x, n);
        for (var i = 1; i <= n; i++) {
            factor *= i;
        }
        if (n % 2 == 0)
            factor *= -1;
        sum += x / factor;
    } while (Math.abs(sum) > E);
    return sum;
}
var x = +prompt("Enter |x| < 1", "0.5");
if (Math.abs(x) > 1 || Math.abs(x) < -1 || x === null) {
    x = +prompt("Enter again |x| < 1", "0.5");
}
console.log(seriesTaylor(x));
