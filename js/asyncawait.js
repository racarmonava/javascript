const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain:true } 

function getCharacter(id){

    return new Promise((resolve, reject) => { 
        const Url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
         $
         .get(Url,opts,function(data){
             resolve(data)
         })
        .fail(()=>reject(id))
    })
}
function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`);
}

// getCharacters(1)
// .then(function(people){
//     console.log(`el personaje 1 es ${people.name}`)
// })
//.catch(onError)


async function  getCharacters(){

var ids = [1,2,3,4,5,6,7,8,9,10]
var promesas = ids.map(id=> getCharacter(id))
try {
    var characters = await Promise.all(promesas)
    console.log(characters);
 } catch (id) {
    onError(id)
 }
 
}
getCharacters()