import { posters, orderBy, directorFilter, producerFilter, characterFilter, getUniqueValues} from './data.js';
// import data from './data/lol/lol.js';
import data from '../data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data)
let Adress = posters(data);
///---------- Seccion de la primera pagina donde muestra los posters
let posterHTML = ""
Adress.forEach(objeto =>{
    posterHTML+=generatorPosterHTML(objeto)
})
function generatorPosterHTML(objeto){
    return `<div class="poster"><img src="${objeto}" ></div>`
}

document.getElementById("movies").innerHTML = posterHTML
//document.getElementById("pruebaPeople").src = data.films[5].people[0].img
let sortAndSelect = document.getElementById('sortinGhibli')
sortAndSelect.addEventListener('change', () =>{
    let posterOrder = orderBy(data.films, sortAndSelect.value)
    let posterOrderHTML = '' //Aqui se guarda el nuevo orden
    posterOrder.forEach(objeto =>{
        posterOrderHTML+=generatorPosterHTML(objeto)
    })
    // if(sortAndSelect.value == 'AZ' || sortAndSelect.value == 'ZA'){ //NO ME DEJA METER LA FUNCION EN EL IF  :(
    function generatorPosterHTML(objeto){
        if(sortAndSelect.value == 'AZ' || sortAndSelect.value == 'ZA'){
        return `<figure class="poster">
        <figcaption> ${objeto.title}</figcaption>
        <img src="${objeto.poster}" >
        </figure>`
        }else
        if (sortAndSelect.value == 'scoreMinToMax' || sortAndSelect.value == 'scoreMaxToMin'){
            return `<figure class="poster">
            <figcaption>Score: ${objeto.rt_score}</figcaption>
            <img src="${objeto.poster}" >
            </figure>`
        }else
        if (sortAndSelect.value == 'dateMinToMax' || sortAndSelect.value == 'dateMaxToMin'){
            return `<figure class="poster">
            <figcaption>Date: ${objeto.release_date}</figcaption>
            <img src="${objeto.poster}" >
            </figure>`
        }
    }
    document.getElementById("movies").innerHTML = posterOrderHTML
})



//SELECCIONAR DIRECTOR directo DESDE la DATA // ----------------seccion de DIRECTORES
let selectDir = document.getElementById('selectDirector');
let directorOptions = data.films.map(function(film) {return film.director})
directorOptions = getUniqueValues(directorOptions) //evita duplicacion de elementos
    console.log(directorOptions);
    for (let i = 0; i < directorOptions.length; i++){
        let directorName = directorOptions[i];
        let dirElement = document.createElement("option")
        
        dirElement.textContent = directorName 
        dirElement.value = directorName
        selectDir.appendChild(dirElement);
    }
    selectDir.addEventListener('change', () => {
     document.getElementById('FirstPage').style.display="none";
     let dataInput = selectDir.value;
     let dataFiltered =['']
     dataFiltered = directorFilter(dataInput,data.films);  
     const caption = 'Ha dirigido '+ dataFiltered.length + ' peliculas';
    
     document.getElementById('Name').innerHTML = dataInput;
     document.getElementById('caption').innerHTML = caption;
     console.log('Numero de peliculas: '+ dataFiltered.length)
    console.log(dataFiltered)
     /* ----- HTML DINAMICO*/
     let directorHTML = ""
     dataFiltered.forEach( oneDirector =>{
         directorHTML += generatorDirectorHTML(oneDirector)
     })
     function generatorDirectorHTML(oneDirector){
         return ` 
         <div class="flexRow" style="display: flex; font-family: sans-serif; flex-flow: nowrap; 
         background-color: #D9B8B5; border-radius: 1rem; margin-bottom: 1rem;">
            <div class="posterFilter" style="padding: 1rem;">
                <img src="${oneDirector.poster}" id="filterImg"></div>
            <div class="Informative">
            <p><b>Title:  </b><span id="title">${oneDirector.title}</span></p>
            <p><b>Year: </b><span id="year">${oneDirector.year}</span></p>
            <p><b>Score: </b><span id="score">${oneDirector.score}</span></p>
            <p><b>Descripcion: </b><span id='filmDescription'>${oneDirector.description}</span></p>
            <p><b>Producer: </b><span id="producer">${oneDirector.producer}</span></p>
            <p><b>Director: </b><span id="director">${oneDirector.director}</span></p>
            <p><b>Movie characters:  </b><span id="people">${oneDirector.characters}</span></p>
            </div>
          </div>  `
     }

     document.getElementById("informativeFile").innerHTML = directorHTML
     
    })

    //SELECCIONAR PRODUCTOR directo DESDE la DATA // ------------------------------Seccion PRODUCTOR
let selectProd = document.getElementById('selectProducer');
let producerOptions = data.films.map(function(film) {return film.producer})
producerOptions = getUniqueValues(producerOptions) //evita duplicacion de elementos
    console.log(producerOptions);
    for (let i = 0; i < producerOptions.length; i++){
        let producerName = producerOptions[i];
        let prodElement = document.createElement("option")
        
        prodElement.textContent = producerName 
        prodElement.value = producerName
        selectProd.appendChild(prodElement);
    }

    selectProd.addEventListener('change', () => {
     document.getElementById('FirstPage').style.display="none";
     let dataInput = selectProd.value;
     let dataFiltered =['']
     dataFiltered = producerFilter(dataInput,data.films);  
     const caption = 'a producido '+ dataFiltered.length + ' peliculas';

     document.getElementById('Name').innerHTML = dataInput;
     document.getElementById('caption').innerHTML = caption;
     console.log('Numero de peliculas: '+ dataFiltered.length)

     /* ----- HTML DINAMICO*/
     let producerHTML = ""
     dataFiltered.forEach( theProducer=>{
        producerHTML += generatorProducerHTML(theProducer)
     })
     function generatorProducerHTML(theProducer){
         return ` 
         <div class="flexRow" style="display: flex; font-family: sans-serif; flex-flow: nowrap; 
         background-color: #D9B8B5; border-radius: 1rem; margin-bottom: 1rem;">
         <div class="posterFilter" style="padding: 1rem;"><img src="${theProducer.poster}" id="filterImg"></div>
         <div class="Informative">
           <p><b>Title:  </b><span id="title">${theProducer.title}</span></p>
           <p><b>Year: </b><span id="year">${theProducer.year}</span></p>
           <p><b>Score: </b><span id="score">${theProducer.score}</span></p>
           <p><b>Descripcion: </b><span id='filmDescription'>${theProducer.description}</span></p>
           <p><b>Producer: </b><span id="producer">${theProducer.producer}</span></p>
           <p><b>Director: </b><span id="director">${theProducer.director}</span></p>
           <p><b>Movie characters:  </b><span id="people">${theProducer.characters}</span></p>
         </div>
         </div>`

     }

     document.getElementById("informativeFile").innerHTML = producerHTML
     
    })// --- Final producer
    

 //SELECCIONAR PEOPLE directo DESDE la DATA // ------------------------------Seccion CHARACTER
let selectCharacter = document.getElementById('selectCharacter');
let characterOptions = data.films.map(function(film) {return film.title})
characterOptions  = getUniqueValues(characterOptions ) //evita duplicacion de elementos
    console.log(characterOptions );

for(let i=0; i < characterOptions.length; i++){//Porque me lo pone arriba 
    let titleName = characterOptions[i];
    let characterElemnt = document.createElement('option')

    characterElemnt.textContent =titleName //¿Por que ?
    characterElemnt.value = titleName 
    selectCharacter.appendChild(characterElemnt)
}

selectCharacter.addEventListener('change',() =>{
    document.getElementById('FirstPage').style.display = 'none';
    let dataInput = selectCharacter.value
    let dataFiltered = [''];
    dataFiltered = characterFilter(dataInput, data.films); //argument

    console.log(dataFiltered)

    let characterHTML = ""
    dataFiltered.forEach( theCharacter=>{
       characterHTML += generatorCharacterHTML(theCharacter)
    })
    function generatorCharacterHTML(theCharacter){
        return ` 
        <div class="flexRow" style="display: flex; font-family: sans-serif; flex-flow: nowrap; 
        background-color: #D9B8B5; border-radius: 1rem; margin-bottom: 1rem;">
        <div class="posterFilter" style="padding: 1rem;"><img src="${theCharacter.img}" id="filterImg"></div>
        <div class="Informative">
          <p><b>Title:  </b><span id="title">${theCharacter.title}</span></p>
          <p><b>Year: </b><span id="year">${theCharacter.year}</span></p>
          <p><b>Score: </b><span id="score">${theCharacter.score}</span></p>
          <p><b>Descripcion: </b><span id='filmDescription'>${theCharacter.description}</span></p>
          <p><b>Producer: </b><span id="producer">${theCharacter.producer}</span></p>
          <p><b>Director: </b><span id="director">${theCharacter.director}</span></p>
          <p><b>Movie characters:  </b><span id="people">${theCharacter.characters}</span></p>
        </div> 
        </div>`

    }

    document.getElementById("informativeFile").innerHTML =  characterHTML
    
   })

    










