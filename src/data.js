// estas funciones son de ejemplo
export const posters = (data) => {
    let DirPoster = [20];
    let i=0;
    do {
      DirPoster[i]= data.films[i].poster;
      i++
      //console.log(DirPoster[i]);
    } while (i<20);
    return DirPoster;
};

export const directorFilter = (dataInput,films) => {

    const directors = films.filter(function(films){
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
       return directors
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