var x = 4, y = "4";
var brownie = {
  name: 'brownie',
  lastName: 'perro',
  age: 35,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  dronero: true

}

function  printProfession(persona)
{
    console.log(`${persona.name} es `)
    for (var property in persona) {
       if(property.valueOf()===true)
       {
           console.log('estoy')
           console.log(`${property.toString()}`)
       }
    }
}  
