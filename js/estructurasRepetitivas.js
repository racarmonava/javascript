var hinata = {
   name: 'Hinata',
   lastname: 'Hiuga',
   weight: 70
}
 const DAY_OF_YEAR = 365;
 const INCREMENT = .3;
 const Up_weight = personaT => personaT.weight += INCREMENT;
 const Low_weight = personaT => personaT.weight -= INCREMENT;
 console.log(`al inicio del anio ${hinata.name} pesa ${hinata.weight.toFixed(1)} kg`) 
 for(var i=0; i<= DAY_OF_YEAR; i++)
 { 
    var ran = Math.random()
    if(ran < 0.25)
    {
       Up_weight(hinata)
    }
    else if(ran < 0.5){
      Low_weight(hinata)
    }
    
 }
 console.log(`al final del anio ${hinata.name} pesa ${hinata.weight.toFixed(1)} kg`)