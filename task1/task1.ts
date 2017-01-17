//Выполнить оптимизацию цикла
function optimaze():void {
    const t:number = 3;
    const cos:number = Math.cos(t);
    const sin:number = Math.sin(t);
    const h1:number = 4;
    const h2:number = 3;
    const constF:number = 0.1 * h1;
    const constS:number = 0.01 * h2;

    let x:number[][] = new Array();
    for (let i:number = 0; i < 100; i++) {
        x[i] = new Array();
        for (let j:number = 0; j < 3; j++) {
            x[i][j] = 0;
        }
    }


    for (let k:number = 0; k < 3; k++) {
        x[k][1] = cos + constF * k;
        x[k][2] = sin + constS * k;
        // console.log(x[k][1] + " " + x[k][2]);
    }
}

console.log("task 1 _1");

// Составьте алгоритм и напишите программу для вычисления приближенного значения
//натурального логорифма от произвольного значения аргумента |x|< 1, вводимого с клавиатуры.
function seriesTaylor(x:number):number {
    let sum:number = 0;
    let E:number = 0.376;
    let n:number = 0;
    let factor:number = 1;

    do {
        n++;
        x = Math.pow(x, n);
        for (let i:number = 1; i <= n; i++) {
            factor *= i;
        }
        if (n % 2 == 0) factor *= -1;
        sum += x / factor;

    } while (Math.abs(sum) > E)

    return sum;
}

let x:number = +prompt("Enter |x| < 1", "0.5");
if (Math.abs(x) > 1 || Math.abs(x) < -1 || x === null) {
    x = +prompt("Enter again |x| < 1", "0.5");
}

console.log(seriesTaylor(x));