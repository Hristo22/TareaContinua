let arrayContacto=[
    {nombre:'Maxwell Wright',telefono:'(0191)7196495',correo:'Curabitur.egestas.nunc@nonumyac.co.uk'},
    {nombre:'Raja Vllareal',telefono:'0866 398 2895',correo:'posure.vulputate@sed.com'},
    {nombre:'Helen Richards',telefono:'0800 1111',correo:'libero@convallis.edu'},
    {nombre:'Maisie Haley',telefono:'0913 531 3030',correo:'risus.Quisque@urna.ca'}
    ];

let opcion=prompt("1-Muestrame el primer contacto\n2-Muestrame el ultimo contacto\n3-Añadir nuevo contacto");
opcion=Number(opcion);
switch(opcion){
    case 1:
        console.log(arrayContacto[0]);
        break;
    case 2:
        console.log(arrayContacto[arrayContacto.length-1]);
        break;
    case 3:
        let nombreContacto=prompt("Dime un nombre");
        let telefonoContacto=prompt("Dime un numero");
        let correoContacto=prompt("Dime un correo");
        if(nombreContacto==undefined || telefonoContacto==undefined || correoContacto==undefined || nombreContacto=="" || telefonoContacto=="" || correoContacto==""){
            break;
        }
        arrayContacto.push({nombre:nombreContacto,telefono:telefonoContacto,correo:correoContacto});
        console.log("Este es el nuevo contacto que hemos añadido es el siguiente:\n", arrayContacto[arrayContacto.length-1]);
        break;
}