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
         let information = [films.poster, films.title, films.release_date, films.rt_score, films.description, films.director, films.producer, namesOfPeople.join()];
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
       let information = [films.poster, films.title, films.release_date, films.rt_score, films.description, films.director, films.producer, namesOfPeople.join()];
       return information 
     })
     return producers
}