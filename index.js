const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let array1 = [""] 
let array2 = [""] 
let passw1 = document.getElementById("passw-1")
let passw2 = document.getElementById("passw-2")

function genPassw() {
    passw1.textContent = ""
    for (let i = 0; i < 15; i++) {
    array1[i] = (Math.floor(Math.random() * characters.length))
    passw1.textContent += characters[array1[i]] 
    }
    passw2.textContent = ""
    for (let j = 0; j < 15; j++) {
    array2[j] = (Math.floor(Math.random() * characters.length))
    passw2.textContent += characters[array2[j]] 
    }
}


