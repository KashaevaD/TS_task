var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*Опишите объектный тип AllAboutChar, который используется для хранения
символьного значения и содержит методы определения, является ли заданный символ буквой,
цифрой или прописной буквой.*/
var AllAboutChar = (function () {
    function AllAboutChar(symbol) {
        this.symbol = symbol;
    }
    Object.defineProperty(AllAboutChar.prototype, "symbol", {
        get: function () {
            return this._symbol;
        },
        set: function (value) {
            this._symbol = value;
        },
        enumerable: true,
        configurable: true
    });
    AllAboutChar.prototype.isLetter = function () {
        return /^[a-zA-Z]$/.test(this.symbol);
    };
    AllAboutChar.prototype.isDigit = function () {
        return /^[0-9]$/.test(this.symbol);
    };
    AllAboutChar.prototype.isBigLetter = function () {
        return /^[A-Z]$/.test(this.symbol);
    };
    return AllAboutChar;
}());
console.log("task 1");
var char = new AllAboutChar('s');
console.log("is " + char.symbol + " a letter? " + char.isLetter());
console.log("is " + char.symbol + " a digit? " + char.isDigit());
console.log("is " + char.symbol + " a big letter? " + char.isBigLetter());
//Дайте определение виртуального метода.
//dvdvdfv
var A = (function () {
    function A(a) {
        this.a = a;
    }
    A.prototype.sayA = function () {
        console.log("Is AAAA");
    };
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B(b) {
        return _super.call(this, b) || this;
    }
    B.prototype.sayA = function () {
        _super.prototype.sayA.call(this);
        console.log("Is BBBBB");
    };
    return B;
}(A));
console.log("task 2");
var a = new A(2);
a.sayA();
var b = new B(3);
b.sayA();
