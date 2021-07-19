import { posters, filteredOut, getUniqueValues} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data)

let Adress = posters(data);



for(let i = 0; i <data.films.length; i++){ 

    document.getElementById("film" + i).src=Adress[i];
}
const prueba = document.getElementsByTagName('input');


    //SELECCIONAR DIRECTOR directo DESDE la DATA
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
     dataFiltered = filteredOut(dataInput,data.films);  

     
     console.log('main: ')
     console.log(dataFiltered)
     console.log(dataFiltered[0][2])
     console.log(dataFiltered[0][3])

     document.getElementById('Name').innerHTML = dataInput;
     document.getElementById('filterImg1').src = dataFiltered[0][0];
     document.getElementById('title1').innerHTML = dataFiltered[0][1];
     document.getElementById('filmDescription1').innerHTML = dataFiltered[0][3];
    })

    //SELECCIONAR PRODUCTOR directo DESDE la DATA
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
     dataFiltered = filteredOut(dataInput,data.films);  

     
     
     console.log('main: ')
     console.log(dataFiltered)
     console.log(dataFiltered[0][2])
     console.log(dataFiltered[0][3])

     document.getElementById('Name').innerHTML = dataInput;
     document.getElementById('filterImg1').src = dataFiltered[0][0];
     document.getElementById('title1').innerHTML = dataFiltered[0][1];
     document.getElementById('filmDescription1').innerHTML = dataFiltered[0][3];
    })
    

    

/**A la funcion de flecha no hay necesidad de poner funcion antes */
    for(let i=0 ; i<prueba.length ; i++){
    prueba[i].addEventListener('click', (evt) => { 
        document.getElementById('FirstPage').style.display="none"
        evt.preventDefault();
        const dataInput = prueba[i].value;
        console.log('Input: '+ dataInput )
        let dataFiltered =['']
        dataFiltered = filteredOut(dataInput,data.films);

        console.log('Numero de peliculas: '+ dataFiltered.length)

        document.getElementById('Name').innerHTML = dataInput;
        document.getElementById('filterImg1').src = dataFiltered[0][0];
        document.getElementById('title1').innerHTML = dataFiltered[0][1];
        document.getElementById('year1').innerHTML = dataFiltered[0][2];
        document.getElementById('score1').innerHTML = dataFiltered[0][3];
        document.getElementById('filmDescription1').innerHTML = dataFiltered[0][4];
        document.getElementById('producer1').innerHTML = dataFiltered[0][5];
        document.getElementById('director1').innerHTML = dataFiltered[0][6];
        document.getElementById('people1').innerHTML = dataFiltered[0][7];
    });
}



/*const getDirectors = data.films.filter(data.films ,(data.films.title ==="The Cat Returns"));
console.log(getDirectors)

/*console.log(posters, data);
console.log(data.films[2].title);
console.log(data.films[0].people[1].name);
console.log(data.films[17].title);
console.log(data.films[17].locations[0].name);
console.log(data.films[17].locations[0].residents[0]);
console.log(data.films[5].vehicles[1].name);

for(let i=0 ; i<20 ; i++){
    console.log(data.films[i].producer);
}

for(let i=0 ; i<20 ; i++){
    if(data.films[i].director === "Hiromasa Yonebayashi"){
       console.log(data.films[i].title)
       console.log(data.films[i].producer)
       console.log(data.films[i].description)
    }else{ continue; }
}
*/




 








