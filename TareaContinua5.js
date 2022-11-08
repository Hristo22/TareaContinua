let arrayContacto=[
    {nombre:'Maxwell Wright',telefono:'(0191)7196495',correo:'Curabitur.egestas.nunc@nonumyac.co.uk'},
    {nombre:'Raja Vllareal',telefono:'0866 398 2895',correo:'posure.vulputate@sed.com'},
    {nombre:'Helen Richards',telefono:'0800 1111',correo:'libero@convallis.edu'},
    {nombre:'Maisie Haley',telefono:'0913 531 3030',correo:'risus.Quisque@urna.ca'}
    ];

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
                let contactos=new String();
                for(contactos of arrayContacto){
                    console.log(contactos);
                }
                break;
            case 4:
                let nombreContacto=prompt("Dime un nombre");
                let telefonoContacto=prompt("Dime un numero");
                let correoContacto=prompt("Dime un correo");
                if(nombreContacto==undefined || telefonoContacto==undefined || correoContacto==undefined){
                    break;
                }
                arrayContacto.push({nombre:nombreContacto,telefono:telefonoContacto,correo:correoContacto});
                console.log("Este es el nuevo contacto que hemos añadido es el siguiente:\n", arrayContacto[arrayContacto.length-1]);
                break;
            case 5:
                break;
        }
    }
} while(booleanos)