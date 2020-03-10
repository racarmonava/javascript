const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain:true } 

function getCharacters(id){

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

getCharacters(1)
.then(function(people){
    console.log(`el personaje 1 es ${people.name}`)
})
.catch(onError)
