var verirficacion = false 
var PrecioBase = 2000 //colocamos el precio base

while(verirficacion == false){ //Preguntamos al usuario su edad para verificacion
    var edadAsegurado = parseInt(prompt("Ingresar Edad: "));
    var edadConyuge = parseInt(prompt("Ingresar Edad: "));

    if(edadAsegurado >= 18 & edadConyuge >= 18){ //la condicion para seguir es que sea mayor de 18 tanto el asegurado como su conyuge 
        verirficacion = true
    }else{
        verirficacion = false
        continue;
    }

    if(edadAsegurado >= 18 & edadAsegurado <=24){
        PrecioBase = (PrecioBase*0.10) + PrecioBase //aca se hace el recargo del 10%  
    }
    if(edadAsegurado >= 25 & edadAsegurado <=49){
        PrecioBase = (PrecioBase*0.20) + PrecioBase //aca del 20%
    }
    if(edadAsegurado >= 50){
        PrecioBase = (PrecioBase*0.30) + PrecioBase //aca del 30%
    }

}
