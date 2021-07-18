import { posters, filteredOut} from './data.js';
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

/**A la funcion de flecha no hay necesidad de poner funcion antes */
for(let i=0 ; i<prueba.length ; i++){
    prueba[i].addEventListener('click', (evt) => { 
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
        //document.getElementById('socre1').innerHTML = dataFiltered[0][3];
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




 








