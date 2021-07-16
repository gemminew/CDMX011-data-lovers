import { posters, directorFilter} from './data.js';
// import data from './data/lol/lol.js';
import data from '../data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

let Adress = [20];
Adress = posters(data);



for(let i = 0; i <20; i++){ 
    document.getElementById("film" + i).src=Adress[i];
}
const prueba = document.getElementsByTagName('input');
/**Un evento para cuando le de clntsByClassNamick */
/**A la funcion de flecha no hay necesidad de poner funcion antes */
for(let i=0 ; i<prueba.length ; i++){
    prueba[i].addEventListener('click', (evt) => { 
        evt.preventDefault();
        const Comparativa = prueba[i].value;
        console.log('INTENTO1 '+ Comparativa )
        directorFilter(Comparativa,data);
    });
}
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
}*/
