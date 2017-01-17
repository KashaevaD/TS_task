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
function test5() {
    //let TwoByte:number[] = new Array();
    var Wrd = 'abcde';
    var TwoBytePtr = {
        mas: []
    };
    for (var i = 0; i < Wrd.length; i++) {
        TwoBytePtr.mas.push(Wrd.charCodeAt(i));
    }
    var temp = TwoBytePtr.mas[1] - "a".charCodeAt(0);
    console.log(temp);
}
console.log("task1");
test5();
// Напишите процедуру, которая объединяет линейный и
// циркулярный списки в один линейный.
var NodeSingle = (function () {
    function NodeSingle() {
        this.value = Math.round(Math.random() * 10);
        this.next = null;
    }
    Object.defineProperty(NodeSingle.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeSingle.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (value) {
            this._next = value;
        },
        enumerable: true,
        configurable: true
    });
    return NodeSingle;
}());
var SingleList = (function () {
    function SingleList() {
    }
    Object.defineProperty(SingleList.prototype, "head", {
        get: function () {
            return this._head;
        },
        set: function (value) {
            this._head = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleList.prototype, "current", {
        get: function () {
            return this._current;
        },
        set: function (value) {
            this._current = value;
        },
        enumerable: true,
        configurable: true
    });
    SingleList.prototype.costructor = function () {
        this.head = null;
        this.current = null;
    };
    SingleList.prototype.create = function () {
        this.head = this.current = new NodeSingle();
        for (var i = 0; i < Math.round(Math.random() * 10); i++) {
            var temp = new NodeSingle();
            this.current.next = temp;
            this.current = temp;
        }
        this.current.next = null;
        return this.head;
    };
    return SingleList;
}());
var CycleList = (function () {
    function CycleList() {
    }
    Object.defineProperty(CycleList.prototype, "head", {
        get: function () {
            return this._head;
        },
        set: function (value) {
            this._head = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CycleList.prototype, "current", {
        get: function () {
            return this._current;
        },
        set: function (value) {
            this._current = value;
        },
        enumerable: true,
        configurable: true
    });
    CycleList.prototype.costructor = function () {
        this.head = null;
        this.current = null;
    };
    CycleList.prototype.create = function () {
        this.head = this.current = new NodeSingle();
        for (var i = 0; i < 2; i++) {
            var temp = new NodeSingle();
            this.current.next = temp;
            this.current = temp;
        }
        this.current.next = this.head;
        return this.head;
    };
    return CycleList;
}());
var Merge = (function () {
    function Merge(listS, listC) {
        this.headS = listS;
        this.headC = listC;
    }
    Object.defineProperty(Merge.prototype, "headS", {
        get: function () {
            return this._headS;
        },
        set: function (value) {
            this._headS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Merge.prototype, "headC", {
        get: function () {
            return this._headC;
        },
        set: function (value) {
            this._headC = value;
        },
        enumerable: true,
        configurable: true
    });
    Merge.prototype.create = function () {
        var newList = this.headS;
        while (this.headS.next !== null) {
            this.headS = this.headS.next;
        }
        this.headS.next = this.headC;
        return newList;
    };
    return Merge;
}());
var list = new SingleList(), listCycle = new CycleList();
var headS = list.create(), headC = listCycle.create();
console.log("task2");
console.log(headS, headC);
var merge = new Merge(headS, headC);
console.log(merge.create());
