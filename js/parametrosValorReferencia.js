//los atributos de un objeto pueden ser modificados si pasamos el objeto por una funcion 
//el objeto angie se modifica en la edad cuando se pasa por esta funcion en cambio si la funcion 
// recibe solo un valor como edad asi pasemos el objeto. edad la edad de angie no es modificada en runtime 

var angie = {
    name: 'Angie',
    lastName: 'Prieto',
    age: 34  
  }

  function happybirthday(Person)
  {
    Person.age += 1;
    console.log(Person.age )
  }
  //returnamos una persona diferente con todo los datos de persona que ingresa excepto la edad 
  function happybirthdayNewPerson(Person)
  {
      return{ 
          ...Person,//clone of the atributes of person 
          age: Person.age + 1
        }
  }
  happybirthday(angie);
  var personMoreOld = happybirthdayNewPerson(angie);