var ana = {
    name: 'ana',
    lastname: 'marino',
    age: 20,
    hight: 1.50,
    quantyBook: 20
}
var mary = {
    name: 'mary',
    lastname: 'moon',
    age: 30,
    hight: 1.60,
    quantyBook: 60
}
var karina = {
    name: 'karina',
    lastname: 'nena',
    age: 23,
    hight: 1.55,
    quantyBook: 70
}
var laura = {
    name: 'Any',
    lastname: 'Moleano',
    age: 23,
    hight: 1.65,
    quantyBook: 90
}

var personas = [ana,mary,karina,laura];
for (var i = 0; i < personas.length; i++)
{
    console.log(`${personas[i].name} tiene una altura de ${personas[i].hight.toFixed(2)} mts`);
}
 
var isLow = (personas)=> personas.hight < 1.56;

var personsLow = personas.filter(isLow);

for (var l = 0; l <  personsLow.length; l++)
{
    console.log(`la persona ${personsLow[l].name} es baja `);
}

const weightCms = (pers) => ({
    ...pers,
    hight: pers.hight * 100 
});
var personasCms = personas.map(weightCms);
console.log(personasCms);

const reducer = (aco,personas)=> aco + personas.quantyBook 
var totalbook = personas.reduce(reducer,0);
console.log(`el total de libros es ${totalbook}`);

