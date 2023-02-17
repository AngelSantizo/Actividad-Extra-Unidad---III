var verirficacion = false
var PrecioBase = 2000

while(verirficacion == false){ //Preguntamos al usuario su edad para verificacion
    var edadAsegurado = parseInt(prompt("Ingresar Edad: "));
    var edadConyuge = parseInt(prompt("Ingresar Edad: "));

    if(edadAsegurado >= 18){ //la condicion para seguir es que sea mayor de 18 
        verirficacion = true
    }else{
        verirficacion = false
        continue;
    }

    if(edad >= 18 & edad <=24){
        PrecioBase = (PrecioBase*0.10) + PrecioBase //aca se hace el recargo del 10%  
    }
    if(edad >= 25 & edad <=49){
        PrecioBase = (PrecioBase*0.20) + PrecioBase //aca del 20%
    }
    if(edad >= 50){
        PrecioBase = (PrecioBase*0.30) + PrecioBase //aca del 30%
    }

}
