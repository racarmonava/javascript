var angie = {
  nombre: 'Angie',
  apellido: 'Prieto',
  edad: 34  
}

function printNameUppercase({nombre}){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}
printNameUppercase(angie)
printNameUppercase({nombre: 'pepito'})