const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain:true } 

function getCharacters(id,callback){
    const Url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

    $.get(Url,opts, callback)
     .fail(()=>{
        console.log(`Sucedio un error en el parametro ${id}`)
    })    
}
//callback hell 
getCharacters(1, function(people){
    console.log(`hola yo soy ${people.name}`)
    getCharacters(2,function(people){
        console.log(`hola yo soy ${people.name}`)
        getCharacters(3,function(people){
            console.log(`hola yo soy ${people.name}`)
            getCharacters(4,function(people){
                console.log(`hola yo soy ${people.name}`)
                getCharacters(5,function(people){
                    console.log(`hola yo soy ${people.name}`)
                })
            })
        })
    })
})