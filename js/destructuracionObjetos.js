var angie = {
    name: 'Angie',
    lastName: 'Prieto',
    age: 34  
  }  
  
String.prototype.format = function () {
    var literal = this;
 
    for (var i = 0; i < arguments.length; i++) {
        var regex = new RegExp('{' + i + '}', 'g');
        literal = literal.replace(regex, arguments[i]);
    }
 
    return literal;
};


  function printNameUppercase(persona){
    //var nombre = persona.nombre 
    var {name} = persona
      console.log(name.toUpperCase())
  }

  function printNameAndAge(persona)
  {
    var { name } = persona
    var { age } = persona
    console.log("Hola, me llamo "+name+ " y tengo "+age)    
  }
  printNameUppercase(angie)
  printNameUppercase({name: 'pepito'})
  printNameAndAge(angie)