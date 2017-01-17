// Напишите программу, которая считывает из заданного текстового файла
// слова и записывает в новый текстовый файл только те из них, которые начинаются с указанной буквы.
function previewFile() {
    var reader = new FileReader();
    var str = "";
    reader.onloadend = function (ev) {
        str = reader.result;
        console.log("Содержимое файла: " + str);
        var letter = prompt("Enter letter", "h");
        var newStr = writeSpecailWord(letter, str);
        console.log("Содержимое нового файла: " + newStr);
    };
    var file = document.getElementById("text");
    reader.readAsText(file.files[0]);
}
function writeSpecailWord(letter, text) {
    var arr = text.split(" ");
    var str = "";
    var num;
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][0] === letter)
            result.push(arr[i]);
    }
    return result;
}
// let text:string = "hyyj dlg hnks hkfk";
// let letter:string = "h";
// console.log(writeSpecailWord(letter,text)); 
