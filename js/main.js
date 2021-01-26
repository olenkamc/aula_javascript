function clicado(){
    document.getElementById("agradecimiento").innerHTML = "<b>Gracias por clicar aqui</b>";

    //console.log(document.getElementById("agradecimiento"));
    //alert("Gracias por dar click");
}

function redireccionar(){
    window.open("https://www.facebook.com/"); //other window
    //window.location.href = "https://www.facebook.com/"; //the same window
}

function cambiar(elemento){
    //document.getElementById("mousemove").innerHTML = "Gracias por pasar el mouse";
    elemento.innerHTML =  "Gracias por pasar el mouse";
    //alert("Cambiar texto");
}

function volver(elemento){
    //document.getElementById("mousemove").innerHTML = "Pase el mouse aqui";
    elemento.innerHTML = "Pase el mouse aqui";
}

function load(){
    alert("Pagina cargada *.*");
}

function funcionChange(elemento){
    console.log(elemento.value);
}
/* function suma(n1,n2){
    return n1 +n2;
}
 */

/* var validar=0;
function validaEdad(edad){
    if(edad >= 18){
        validar =true;
    }else{
        validar = false;
    }
    return validar;
}

var edad= prompt("¿Cúal es tu edad?");
validaEdad(edad)
console.log(validar);
 *///console.log(validaEdad(edad));
//alert(validaEdad(edad));
//alert(suma(5,10));














/* function setReplace(frase, nombre, nuevo_nombre){
    return frase.replace(nombre,nuevo_nombre)
}
alert(setReplace("Va Japon","Japon","Brasil")); //frase y (palabra a buscar, reemplazo palabra)
 */

/* var list = [nombre: "rosa", "clavel", "tulipán", "margarita"]
 
console.log (lista [2]); */
/* 
var d= new Date();
/* alert(d.getMonth()+1); */
/*alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/

/* var count; 
for(count=0; count <= 5; count++){
    alert(count);
} */

/* var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
} */

/* var edad = prompt("¿Cual es tu edad?");

if(edad>=18){
    alert("mayor de edad")
}else{
    alert("Menor de edad");
} */



/* var fruta = [{nombre:"maca", color:"Rojo"},{nombre:"uva", color:"morado"}]
console.log(fruta);
alert(fruta[1].nombre); */

//var lista = ["maca", "pera", "naranja"];
//lista.push("uva");
//lista.pop();


//console.log(lista[0]);
//console.log(lista.toString());
//console.log(lista.join("  "));





//var nombre = "Angie Miranda";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japon es el mejor equipo del mundo";
/* alert(nombre+" tiene "+edad+" años"); */
/* alert(edad+edad2); */
//console.log(nombre);
//console.log(n1*n2);
/* console.log(frase); */
/* console.log(frase.replace("Japon","Perú"));
alert(frase.replace("Japon","Brasil"))
console.log(frase.toUpperCase()); */
//console.log(frase.toLocaleLowerCase());
