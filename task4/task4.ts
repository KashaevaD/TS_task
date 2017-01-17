/*Определите результат выполнения следующей программы:
program test5:
type
TwoByte = array[0..4] of Byte; 0..255
var
Wrd: String; строка
TwoBytePtr : ^TwoByte;  // указатель (типизированный ^тип )
begin
Wrd := 'abcde';
TwoBytePtr := @Wrd;   // @ - Обозначение адреса переменной, типизированной константы, подпрограммы, метода
(записыв ASCII код в массив TwoByte)
Write (TwoBytePtr^[1] - Ord ('a')]); ASCII код символа 'a'
ReadLn;
end.*/

function test5():void {
    //let TwoByte:number[] = new Array();
    let Wrd:string = 'abcde';

    interface IType {
        mas: number[];
    }
    var TwoBytePtr = <IType>{
        mas: []
    };

    for (let i:number = 0; i < Wrd.length; i++) {
        TwoBytePtr.mas.push(Wrd.charCodeAt(i));
    }
    let temp:number = TwoBytePtr.mas[1] - "a".charCodeAt(0)
    console.log(temp);
}

console.log("task1");
test5();

// Напишите процедуру, которая объединяет линейный и
// циркулярный списки в один линейный.

class NodeSingle {

    private _value:number;
    private _next:NodeSingle;

    get value():number {
        return this._value;
    }
    set value(value: number) {
        this._value = value;
    }

    get next():NodeSingle {
        return this._next;
    }
    set next(value: NodeSingle) {
        this._next = value;
    }

    constructor() {
        this.value = Math.round(Math.random() * 10);
        this.next = null;
    }
}

class SingleList {

    private _head:NodeSingle;
    private _current:NodeSingle;

    get head():NodeSingle {
        return this._head;
    }
    set head(value: NodeSingle) {
        this._head = value;
    }

    get current():NodeSingle {
        return this._current;
    }
    set current(value: NodeSingle) {
        this._current = value;
    }

    costructor() {
        this.head = null;
        this.current = null;
    }
    public create() {
        this.head = this.current = new NodeSingle();
        for (let i = 0; i < Math.round(Math.random() * 10); i++) {
            let temp:NodeSingle = new NodeSingle();
            this.current.next = temp;
            this.current = temp;
        }
        this.current.next = null;
        return this.head;
    }
}

class CycleList {

    private _head:NodeSingle;
    private _current:NodeSingle;
    
    get head():NodeSingle {
        return this._head;
    }
    set head(value: NodeSingle) {
        this._head = value;
    }

    get current():NodeSingle {
        return this._current;
    }
    set current(value: NodeSingle) {
        this._current = value;
    }

    costructor() {
        this.head = null;
        this.current = null;
    }
    public create() {
        this.head = this.current = new NodeSingle();
        for (let i = 0; i < 2; i++) {
            let temp = new NodeSingle();
            this.current.next = temp;
            this.current = temp;
        }
        this.current.next = this.head;
        return this.head;
    }
}

class Merge {

    private _headS:NodeSingle;
    private _headC:NodeSingle;

    get headS():NodeSingle {
        return this._headS;
    }
    set headS(value: NodeSingle) {
        this._headS = value;
    }

    get headC():NodeSingle {
        return this._headC;
    }
    set headC(value: NodeSingle) {
        this._headC = value;
    }

    constructor(listS:NodeSingle, listC:NodeSingle) {
        this.headS = listS;
        this.headC = listC;
    }

    public create() {
        let newList:NodeSingle = this.headS;
        while (this.headS.next !== null) {
            this.headS = this.headS.next;
        }
        this.headS.next = this.headC;

        return newList;
    }
}

let list:SingleList = new SingleList(),
    listCycle:CycleList = new CycleList();

let headS:NodeSingle = list.create(),
    headC:NodeSingle = listCycle.create();

console.log("task2");
console.log(headS, headC);
let merge:Merge = new Merge(headS, headC);
console.log(merge.create());