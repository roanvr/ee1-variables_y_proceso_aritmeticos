//---------------------EJERCICIO 1 y 2------------------------------
/* //Primero se solicita que el usuario introduzca dos números enteros para realizar las distintas operaciones, en este caso la suma. Adicionalmente, a la propiedad prompt se le asigna un símbolo + anterior para que distinga que se trata de números.
let num1 = parseInt(+prompt("Introduzca el primer número para suma"))
let num2 = parseInt(+prompt("Introduzca el segundo número para suma"))

//Luego asignamos la variable con la que se realizará el proceso matemático
let resultado = (num1+num2)

//Ahora indicamos que el sitio muestre explícitamente el resultado de la operación.
document.write(`El resultado de la suma es ${resultado}`)



//Repetiremos el proceso anterior de solicitar dos números enteros al usuario.
let num3 = parseInt(+prompt("Introduzca el primer número para resta"))
let num4 = parseInt(+prompt("Introduzca el segundo número para resta"))

//Luego asignamos la variable con la que se realizará el proceso matemático
let resultado2 = (num3-num4)

//Ahora indicamos que el sitio muestre explícitamente el resultado de la operación.
document.write(`El resultado de la resta es ${resultado2}`)



//Repetiremos el proceso anterior de solicitar dos números enteros al usuario.
let num5 = parseInt(+prompt("Introduzca el primer número para multiplicación"))
let num6 = parseInt(+prompt("Introduzca el segundo número para multiplicación"))

//Luego asignamos la variable con la que se realizará el proceso matemático
let resultado3 = (num5*num6)

//Ahora indicamos que el sitio muestre explícitamente el resultado de la operación.
document.write(`El resultado de la multiplicación es ${resultado3}`)



//Repetiremos el proceso anterior de solicitar dos números enteros al usuario.
let num7 = parseInt(+prompt("Introduzca el primer número para división"))
let num8 = parseInt(+prompt("Introduzca el segundo número para división"))

//Luego asignamos la variable con la que se realizará el proceso matemático
let resultado4 = (num7/num8)

//Ahora indicamos que el sitio muestre explícitamente el resultado de la operación.
document.write(`El resultado de la división es ${resultado4}`)



//Repetiremos el proceso anterior de solicitar dos números enteros al usuario.
let num9 = parseInt(+prompt("Introduzca el primer número para módulo"))
let num0 = parseInt(+prompt("Introduzca el segundo número para módulo"))

//Luego asignamos la variable con la que se realizará el proceso matemático
let resultado5 = (num9%num0)

//Ahora indicamos que el sitio muestre explícitamente el resultado de la operación.
document.write(`El resultado del módulo es ${resultado5}`)
 */

//---------------------EJERCICIO 3: TEMPERATURA------------------------------

/* const kelvin = 273.15
const farenheit = 32

let celsius = parseInt(+prompt("Ingresa los grados Celsius en formato numérico solamente"))

let kresult = (celsius+kelvin)

document.write(`${celsius}°C equivale a ${kresult}K`+'</br>')

let fresult= ((celsius*9/5)+farenheit)
document.write(`${celsius}°C equivale a ${fresult}°F`) */

//---------------------EJERCICIO 4: DÍAS------------------------------
/* let dias = +prompt("Ingresa la cantidad de días en formato numérico")

const anios = Math.floor(dias/365);
const semanasRestantes = dias % 365;
const semanas = Math.floor(semanasRestantes/7);
const diasRestantes = semanasRestantes % 7;

document.write(`${dias} días equivalen a ${anios} año(s) ${semanas} semana(s) y ${diasRestantes} día(s)`) */

//---------EJERCICIO 5: INTRODUCIR 5 NÚMEROS Y CALCULAR SUMA Y PROMEDIO---------

/* let valor1 = parseInt(+prompt("Ingresa el primer número"))
let valor2 = parseInt(+prompt("Ingresa el segundo número"))
let valor3 = parseInt(+prompt("Ingresa el tercer número"))
let valor4 = parseInt(+prompt("Ingresa el cuarto número"))
let valor5 = parseInt(+prompt("Ingresa el quinto número"))

let valorsuma = (valor1+valor2+valor3+valor4+valor5)
let valorx = ((valor1+valor2+valor3+valor4+valor5)/5)
document.write(`El total de la suma de los números ingresados es ${valorsuma}`+'</br>')
document.write(`El promedio de los números ingresados es ${valorx}`) */