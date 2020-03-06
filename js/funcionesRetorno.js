var pedro = {
  name:'pedro',
  lastName: 'perez',
  edad: 24,
  ingeniero: true,
  cocinero: false 
}
const MAJOR_OF_AGE =18;
//arrow function 
 const IsMajorAge = (personaEval) => personaEval.edad >= MAJOR_OF_AGE

function printIsMajorOfAge(personaEval)
{
    if(IsMajorAge(personaEval))
     console.log(`${personaEval.name} es mayor de edad `)
    else  
      console.log(`${personaEval.name} no es mayor de edad`) 
}
 //arrow function and onario operator 
const accessPermition = (personaEval)=> (!IsMajorAge(personaEval)?'Acceso Denegado':'Acceso Permitido'); 

printIsMajorOfAge(pedro);