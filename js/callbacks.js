const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain:true } 
const onPeopleResponse = function(people){
    console.log(`hola yo soy ${people.name}`)
}
function getCharacters(id){
    const Url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(Url,opts, onPeopleResponse)
}
