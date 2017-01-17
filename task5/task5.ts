/*Опишите объектный тип AllAboutChar, который используется для хранения
символьного значения и содержит методы определения, является ли заданный символ буквой,
цифрой или прописной буквой.*/
class AllAboutChar {

	private _symbol;

	get symbol():string {
		return this._symbol;
	}
	set symbol(value:string) {
		this._symbol = value;
	}

	constructor (symbol)
	{
		this.symbol = symbol;
	}

	public isLetter() {
		return /^[a-zA-Z]$/.test(this.symbol);
	}
	public isDigit() {
		return /^[0-9]$/.test(this.symbol);
	}
	public isBigLetter() {
		return /^[A-Z]$/.test(this.symbol);
	}
}
console.log("task 1");
let char:AllAboutChar = new AllAboutChar('s');
console.log("is " + char.symbol + " a letter? " + char.isLetter());
console.log("is " + char.symbol + " a digit? " + char.isDigit());
console.log("is " + char.symbol + " a big letter? " + char.isBigLetter());


//Дайте определение виртуального метода.


//dvdvdfv
class A {
	
	public a:number;

	constructor(a:number) {
		this.a = a;
	}
	
	public sayA(): void{
		console.log("Is AAAA");
	}
}


class B extends  A {

 	constructor(b:number) {
 		super(b);
 	}
  
 	public sayA(){
 	  super.sayA();
 		console.log("Is BBBBB");
	}
	
}

console.log("task 2");
let a:A = new A(2);
a.sayA();
let b:A = new B(3);
b.sayA();