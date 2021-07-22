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
//Parte del order alfabeticamente, year and score
export const orderBy = (films, option) =>{
  
  if( option == 'AZ'){
    const orderByAtoZ = films.sort((film1, film2)=>{
      return (film1.title < film2.title) ? -1 : 1;
    })
    console.log(orderByAtoZ)
  }
  else if (option == 'ZA'){
    const orderByZtoA = films.sort((film1, film2)=>{
      return (film1.title > film2.title) ? -1 : 1;
    })
    console.log(orderByZtoA)
  }
  else if (option == 'scoreMinToMax'){
    const orderByMinToMax = films.sort((film1, film2)=>{
      return film1.rt_score - film2.rt_score
    })
    console.log(orderByMinToMax)
  }
  else if (option== 'scoreMaxToMin'){
    const orderByMaxToMin = films.sort((film1, film2)=>{
      return film2.rt_score - film1.rt_score
    })
    console.log(orderByMaxToMin)
  }
  else if (option == 'dateMinToMax'){
    const dateByMinToMax = films.sort((film1, film2) =>{
      return film1.release_date - film2.release_date
    })
    console.log(dateByMinToMax)
  }
  else if (option == 'dateMaxToMin'){
    const dateByMaxToMin = films.sort((film1, film2) =>{
      return film2.release_date - film1.release_date
    })
    console.log(dateByMaxToMin )
  }
}


//obtener valores unicos en select input
//
export const directorFilter = (dataInput,films) => {
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