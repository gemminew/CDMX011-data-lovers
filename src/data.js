// estas funciones son de ejemplo
export const posters = (data) => {
    let DirPoster = [];
    let i=0;
    do {
      DirPoster.push(data.films[i].poster);
      //console.log(DirPoster[i]);
      i++

    } while (i<data.films.length);
      //console.log(DirPoster[i]);
    return DirPoster;
};

export const getUniqueValues = (array) => (
  array.filter((currentValue, index, arr) => (
      arr.indexOf(currentValue) === index
  ))
)

//obtener valores unicos en select input
//
export const directorFilter = (dataInput,films) => {
  /*let filmspeople = [];
  for(let i=0 ; i<films.length ; i++){
    if(films[i].director === dataInput){
      filmspeople.push(films[i].title)
    }
  }*/
    const directorFilms = films.filter(function(films){
       return films.director === dataInput;})
       .map(function(films){
        let numberPeople = films.people;
        let namesOfPeople = [];
        for(let j=0; j<numberPeople.length; j++){
          namesOfPeople[j] = films.people[j].name ;
        }
         let information =  {poster: films.poster, title: films.title, year: films.release_date, score: films.rt_score, description: films.description, director: films.director, producer: films.producer, characters: namesOfPeople.join()};
         return information 
       })
       console.log(directorFilms);
       
       return directorFilms
}

export const producerFilter = (dataInput,films) => {

  const producers = films.filter(function(films){
     return films.producer === dataInput;})
     .map(function(films){
      let numberPeople = films.people;
      let namesOfPeople = [];
      for(let j=0; j<numberPeople.length; j++){
        namesOfPeople[j] = films.people[j].name ;
      }
       let information = {poster: films.poster, title: films.title, year: films.release_date, score: films.rt_score, description: films.description, director: films.director, producer: films.producer, characters: namesOfPeople.join()};
       return information 
     })
     return producers
}