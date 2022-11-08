let arrayContacto=[
    {nombre:'Maxwell Wright',telefono:'(0191)7196495',correo:'Curabitur.egestas.nunc@nonumyac.co.uk'},
    {nombre:'Raja Vllareal',telefono:'0866 398 2895',correo:'posure.vulputate@sed.com'},
    {nombre:'Helen Richards',telefono:'0800 1111',correo:'libero@convallis.edu'},
    {nombre:'Maisie Haley',telefono:'0913 531 3030',correo:'risus.Quisque@urna.ca'}
    ];

function showContact(arrayContacto, contacto){
    contacto=prompt("Dime el numero del contacto que quieres mostrar");
    console.log(arrayContacto[contacto]);
}

function showAllContact(arrayContacto){
    if(arrayContacto instanceof Array) {
        console.log("El array arrayContacto es un array");

        let contactos=new String();
        for(contactos of arrayContacto){
            console.log(contactos);
        }
    } else {
        console.log("El array arrayContacto no es un array");
    }
}

function addNewContact(arrayContacto, nombreContacto, telefonoContacto, numeroContacto){
    if(arrayContacto instanceof Array) {
        console.log('El parametro "arrayContacto" es un array');
    } else {
        console.log('El parametro "arrayContacto" no es un array');
    }

    if(nombreContacto==undefined && telefonoContacto==undefined && numeroContacto==undefined && nombreContacto=="" && telefonoContacto=="" && correoContacto=="") {
        console.log("Alguno de los valores no es correcto");
    } else {
        arrayContacto.push({nombre:nombreContacto,telefono:telefonoContacto,correo:correoContacto});
        console.log("Este es el nuevo contacto que hemos añadido es el siguiente:\n", arrayContacto[arrayContacto.length-1]);
    }
}

let opcion=new String();
let booleanos=true;

do{
    opcion=String(prompt("1-Muestrame el primer contacto\n2-Muestrame el ultimo contacto\n3-Mostrar todos los contactos\n4-Añadir nuevo contacto\n5-Salir del programa"));
    if(opcion.match(/\D/)||opcion==""||opcion.match(/\s/)||opcion<1||opcion>5){
        alert("Los datos introducidos no son correctos, vuelve a intentarlo.");
    } else if(opcion==5){
        booleanos=false;
    } else{
        alert("Los datos son correctos");
        opcion=Number(opcion);
        switch(opcion){
            case 1:
                console.log(arrayContacto[0]);
                break;
            case 2:
                console.log(arrayContacto[arrayContacto.length-1]);
                break;
            case 3:
                showAllContact(arrayContacto);
                break;
            case 4:
                nombreContacto=prompt("Dime un nombre");
                telefonoContacto=prompt("Dime un numero");
                correoContacto=prompt("Dime un correo");
                addNewContact(arrayContacto, nombreContacto, telefonoContacto, correoContacto);
                break;
            case 5:
                break;
        }
    }
} while(booleanos)