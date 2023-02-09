function greet(){
    console.log('Hello');
}

greet(); //Invoke

console.log(greet);

function logGreeting(fn){
    fn();
}

logGreeting(greet);

let greetMe = function(){
     console.log('Hello from the function expression');
}

greetMe();

let saludo = (nombre, tratamiento) =>{
    console.log("Hola " + tratamiento + " " + nombre);
}

saludo("Miguel", "sr.")

let cuadrado = numero => {
    return numero * numero;
}

console.log(cuadrado(4)); 

let cuadrado2 = numero => numero * numero;

console.log(cuadrado2(5)); 