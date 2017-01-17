//Напишите процедуру, которая удаляет из одномерного вещественного массива наибольшее значение

function deleteMaxElement(arr:number[]):void {
    arr.splice(findPositionMax(arr), 1);
}

function findPositionMax(arr:number[]):number {
    let max:number = Math.max.apply(null, arr);
    for (let i:number = 0; i < arr.length; i++) {
        if (arr[i] === max) return i;
    }
    return max;
}

function print(arr:number[]):string {
    let str:string = ""
    for (let i:number = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}

let arr:number[] = [1, 4, 3, 5, 6, 3];
console.log(print(arr));
deleteMaxElement(arr);
console.log(print(arr));