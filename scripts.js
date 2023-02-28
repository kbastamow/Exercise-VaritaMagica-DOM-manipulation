// 1.	Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página

let links = document.querySelectorAll("a");
console.log(links);


function onClick(e) {
    e.preventDefault();
}

for(let link of links) {
 link.addEventListener("click", onClick);
}



//Variables for images, paragraphs and sections&articles


let images = document.querySelectorAll("img");
let paragraphs = document.querySelectorAll("p");
let sections = document.querySelectorAll("section, article");


// 2.	Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
//     2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
//     2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
//     2.3 Bloques de article o section: Cambia el color de fondo.


for(let i = 0; i < images.length; i++) {
   const image = images[i];
   image.addEventListener("click", function(){  //MUST Put the function here. Otherwise it always makes reference to the first image
   image.src = getRandom(gifs);
   })
    
}

for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];
    paragraph.addEventListener("click", function() {
        paragraph.style.backgroundColor = getRandom(colorPalette); 
    })
    
}

for (let i = 0; i < sections.length; i++) {
    const item = sections[i];
    item.addEventListener("click", function(){
        item.setAttribute("style", "background-color: black; color: white"); //WAY TO SET MULTIPLE STYLES. Note: hyphen, not camelCase!!
    })
    
}


for (let i = 0; i < images.length; i++) {
    const element = images[i];
    element.addEventListener("mouseover", function () {    
       element.src = getRandom(gifs);
    });
}


for (let i = 0; i < paragraphs.length; i++) {
  const paragraph = paragraphs[i];
  paragraph.addEventListener("mouseover", function() {
    paragraph.style.backgroundColor = getRandomDos(colorPalette);
    paragraph.style.color = getRandom(colorPalette);
  })
}

for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    section.addEventListener("mouseover", function(){
        section.style.backgroundColor = getRandom(colorPalette);
    })
    
}



//EXTRAS

// 4.	Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

    const colors = ['red', 'blue', 'green'];
    const colorPalette = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];  
    const gifs = ["./assets/abracadabra.gif", "./assets/magic-1.gif", "./assets/magic-2.gif", "./assets/magic-3.gif", "./assets/magic-4.gif", "./assets/magic-5.gif","./assets/magic-6.gif"];


    const getRandom = (array) => {
        let result = Math.floor(Math.random() * array.length);
        return array[result];
    }
    	
    console.log(getRandom(colors))
    console.log(getRandom(colorPalette));
    console.log(getRandom(gifs));
 
    // 12.	Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.
    // 13.	Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.


   
    
    
