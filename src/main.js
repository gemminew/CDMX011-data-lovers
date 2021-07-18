import { posters, directorFilter, producerFilter} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data)

let Adress = [20];
Adress = posters(data);

for(let i = 0; i <20; i++){ 
    document.getElementById("film" + i).src=Adress[i];
}
const prueba = document.getElementsByTagName('input');
const directorEven = document.getElementById('btnDirector');


directorEven.addEventListener('click', (evt) =>{
    evt.preventDefault();
    for(let i=0 ; i<prueba.length ; i++){
        prueba[i].addEventListener('click', (evt) => { 
            evt.preventDefault();
            const dataInput = prueba[i].value;
            console.log('Input: '+ dataInput )
            let dataFiltered =['']
            dataFiltered = directorFilter(dataInput,data.films);
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
        });
    }
})

const producerEven = document.getElementById('btnProducer');
producerEven.addEventListener('click', (evt) =>{
    evt.preventDefault();
    for(let i=0 ; i<prueba.length ; i++){
        prueba[i].addEventListener('click', (evt) => { 
            evt.preventDefault();
            const dataInput = prueba[i].value;
            console.log('Input: '+ dataInput )
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
        });
    }
})





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




 








