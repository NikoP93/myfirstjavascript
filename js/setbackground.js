console.log("jeg er i set background")

let inp = document.querySelector(".inpColor")
console.log(inp)

let pbCol = document.querySelector(".pbSetColor")
console.log(pbCol)

let inpColorValue = document.querySelector(".inpColorValue")

let inpColorPicker = document.getElementById("inpColorPicker")

const pTags = document.getElementsByTagName("p")
console.log(pTags)

let pTagArr = Array.from(pTags);
console.log("pTagArry")
console.log(pTagArry)
pTagArr.forEach(p => p.textContent = "Hej fra forEach");

pbCol.textContent = "Tryk på mig for at sætte color"

let bdy = document.querySelector("body")

console.log(bdy)

function setBackgroundColor(){
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
    pbCol.style.color = col;
}

function useColorPicker(){
    let col = inpColorPicker.value
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value=bdy.style.backgroundColor;
    pbCol.style.color = col;
}

pbCol.addEventListener("click", setBackgroundColor);

document.addEventListener('keyup',setBackgroundColor)

inpColorPicker.addEventListener('input',useColorPicker);



