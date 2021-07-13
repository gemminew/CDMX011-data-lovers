import { posters} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

let Adress = [20];
Adress = posters(data);

document.getElementById("film0").src=Adress[0];
document.getElementById("film1").src=Adress[1];
document.getElementById("film2").src=Adress[2];
document.getElementById("film3").src=Adress[3];
document.getElementById("film4").src=Adress[4];
document.getElementById("film5").src=Adress[5];
document.getElementById("film6").src=Adress[6];
document.getElementById("film7").src=Adress[7];
document.getElementById("film8").src=Adress[8];
document.getElementById("film9").src=Adress[9];
document.getElementById("film11").src=Adress[11];
document.getElementById("film12").src=Adress[12];
document.getElementById("film13").src=Adress[13];
document.getElementById("film14").src=Adress[14];
document.getElementById("film15").src=Adress[15];
document.getElementById("film16").src=Adress[16];
document.getElementById("film17").src=Adress[17];
document.getElementById("film18").src=Adress[18];
document.getElementById("film19").src=Adress[19];

/*console.log(posters, data);
console.log(data.films[2].title);
console.log(data.films[0].people[1].name);
console.log(data.films[17].title);
console.log(data.films[17].locations[0].name);
console.log(data.films[17].locations[0].residents[0]);
console.log(data.films[5].vehicles[1].name);
*/

for(let i=0 ; i<20 ; i++){
    if(data.films[i].director === "Hayao Miyazaki"){
        console.log(data.films[i].title);
    }else{ continue; }
}