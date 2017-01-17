// Напишите программу, которая считывает из заданного текстового файла
// слова и записывает в новый текстовый файл только те из них, которые начинаются с указанной буквы.

function previewFile():void {
    let reader:FileReader = new FileReader();
    let str:string = "";
    reader.onloadend = (ev: Event) => {
       
        str = reader.result;
        console.log("Содержимое файла: " + str);
        let letter:string = prompt("Enter letter", "h");
        let newStr:any = writeSpecailWord(letter, str);
        console.log("Содержимое нового файла: " + newStr);
    }
     let file:HTMLInputElement = document.getElementById("text") as HTMLInputElement;
        reader.readAsText(file.files[0]);

}


function writeSpecailWord(letter:string, text:string):string[] {
    let arr:string[] = text.split(" ");
    let str:string = "";
    let num:number;
    let result:string[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === letter) result.push(arr[i]);
        //str += arr[i] + " ";
    }
    return result;
}
// let text:string = "hyyj dlg hnks hkfk";
// let letter:string = "h";
// console.log(writeSpecailWord(letter,text));