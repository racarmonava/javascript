function heredaDe(prototipohijo,prototipopadre)
{
   var fn = function(){}
   fn.prototype = prototipopadre.prototype
   prototipohijo.prototype = new fn
   prototipohijo.prototype.constructor = prototipohijo
}
class Personaherencia{
    constructor(name,lastname, weight)
  {
    this.name = name
    this.lastname = lastname;
    this.weight = weight;
    this.sale = 200;    
  }
   bye() {
    console.warn(`se despide con amor ${this.name} ${this.lastname}`)
  }
    hi(){
    console.log(`hola, me llamo ${this.name}`)
  }

  IsWeight(){
  return console.log(this.weight > 1.60 ? 'es alto': 'no es alto');
 }
}

function Desarrollador(name, lastname)
{
    this.name = name
    this.lastname = lastname
}
heredaDe(Desarrollador,Personaherencia);

Desarrollador.prototype.hi = function(){
console.log(`hola, me llamo ${this.name} ${this.lastname} soy desarrollador/a`)
}



// let camila = new Personaherencia('camila','gomez',1.60)
// let daniela = new Personaherencia('daniela','perez',1.65)
// let mariana = new Personaherencia('mariana','diaz',1.80)
// let rafael = new Desarrollador('Rafael', 'Carmona')

// camila.hi();
// daniela.hi();
// mariana.hi();

// camila.bye();
// daniela.bye();
// mariana.bye();

// camila.IsWeight()
// daniela.IsWeight()
// mariana.IsWeight()
