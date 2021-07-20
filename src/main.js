import { posters, directorFilter, producerFilter, getUniqueValues} from './data.js';
// import data from './data/lol/lol.js';
import data from '../data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data)
let Adress = posters(data);


for(let i = 0; i <data.films.length; i++){ 
    document.getElementById("film" + i).src=Adress[i];
}
//const prueba = document.getElementsByTagName('input');
//const directorEven = document.getElementById('btnDirector');

////////////------------------------------------------------------------------------------------------------------------

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
    
     document.getElementById('Name').innerHTML = dataInput;
     console.log('Numero de peliculas: '+ dataFiltered.length)
    console.log(dataFiltered)
     /* ----- HTML DINAMICO*/
     const posterFilter = document.querySelector(".posterFilter"),
        template =document.getElementById("informativeFile").contentEditable,
        fragment = document.createDocumentFragment() /*Es para ir almacenando dinamicamente la información*/
     /*const informativeContent = []  ------ este sera mi dataFiltered*/

    dataFiltered.forEach(element => {
        template.querySelector(".filterImg ").setAttribute("src", element.poster);

        let clone = document.importNode(template, true);
        fragment.appendChild(clone);
    });
    
    posterFilter.appendChild(fragment);

     /*for(let i = 0; i < dataFiltered.length; i++){ 
         document.getElementById('filterImg'+ i).src = dataFiltered[i][0];
         document.getElementById('title'+ i).innerHTML = dataFiltered[i][1];
         document.getElementById('year'+ i).innerHTML = dataFiltered[i][2];
         document.getElementById('score'+ i).innerHTML = dataFiltered[i][3];
         document.getElementById('filmDescription'+ i).innerHTML = dataFiltered[i][4];
         document.getElementById('producer'+ i).innerHTML = dataFiltered[i][5];
         document.getElementById('director'+ i).innerHTML = dataFiltered[i][6];
         document.getElementById('people'+ i).innerHTML = dataFiltered[i][7];
     }*/
     
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

     document.getElementById('Name').innerHTML = dataInput;
     console.log('Numero de peliculas: '+ dataFiltered.length)

     for(let i = 0; i < dataFiltered.length; i++){ 
         document.getElementById('filterImg'+ i).src = dataFiltered[i][0];
         document.getElementById('title'+ i).innerHTML = dataFiltered[i][1];
         document.getElementById('year'+ i).innerHTML = dataFiltered[i][2];
         document.getElementById('score'+ i).innerHTML = dataFiltered[i][3];
         document.getElementById('filmDescription'+ i).innerHTML = dataFiltered[i][4];
         document.getElementById('producer'+ i).innerHTML = dataFiltered[i][5];
         document.getElementById('director'+ i).innerHTML = dataFiltered[i][6];
         document.getElementById('people'+ i).innerHTML = dataFiltered[i][7];
     }
     
    })
    

    










