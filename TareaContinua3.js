let arrayContacto=[
    {nombre:'Maxwell Wright',telefono:'(0191)7196495',correo:'Curabitur.egestas.nunc@nonumyac.co.uk'},
    {nombre:'Raja Vllareal',telefono:'0866 398 2895',correo:'posure.vulputate@sed.com'},
    {nombre:'Helen Richards',telefono:'0800 1111',correo:'libero@convallis.edu'},
    {nombre:'Maisie Haley',telefono:'0913 531 3030',correo:'risus.Quisque@urna.ca'}
    ];

    arrayContacto.push({nombre:prompt("Dime un nombre"),telefono:prompt("Dime un numero"),correo:prompt("Dime un correo")});

    console.log(arrayContacto[0]);
    console.log(arrayContacto[arrayContacto.length-1]);