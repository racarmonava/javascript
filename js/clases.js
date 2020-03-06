class Persona{
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

  IsTall(){
  return console.log(this.weight > 1.60 ? 'es alto': 'no es alto');
 }
}
class _Desarrollador extends Persona {
  constructor(name, lastname, weight)
  {
      super(name,lastname,weight)
  }
  hi()
  {
    console.log(`hola, me llamo ${this.name} ${this.lastname} soy desarrollador/a`)
  }
}
// let camila = new Persona('camila','gomez',1.60)
// let daniela = new Persona('daniela','perez',1.65)
// let mariana = new Persona('mariana','diaz',1.80)

// camila.hi();
// daniela.hi();
// mariana.hi();

// camila.bye();
// daniela.bye();
// mariana.bye();

// camila.IsWeight()
// daniela.IsWeight()
// mariana.IsWeight()
