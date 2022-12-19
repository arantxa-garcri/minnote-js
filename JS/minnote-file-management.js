// File management

// Variables
var filename = "myminnote"
var ext = document.getElementById("filetype").value
var content = document.getElementById("textareaID").value

let finalname = filename +'.'+ ext

const fs = require("fs")


// Write file
function saveDoc(finalname, content){

    fs.writeFile(finalname, content, (err) =>{

    if(err) throw err;
    console.log("Completed! :)");

    });

}
